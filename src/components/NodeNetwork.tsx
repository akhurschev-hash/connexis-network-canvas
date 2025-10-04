import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const NodeNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create 15 nodes with varying positions
    const nodes: THREE.Mesh[] = [];
    const nodePositions = [
      { x: -3, y: 8, offsetY: 0 },
      { x: 3, y: 6, offsetY: 800 },
      { x: -2.5, y: 4, offsetY: 1600 },
      { x: 2.8, y: 2, offsetY: 2300 },
      { x: -3.2, y: 0, offsetY: 3000 },
      { x: 2.5, y: -2, offsetY: 3800 },
      { x: -2.8, y: -4, offsetY: 4500 },
      { x: 3.1, y: -6, offsetY: 5300 },
      { x: -2.6, y: -8, offsetY: 6000 },
      { x: 2.9, y: -10, offsetY: 6800 },
      { x: -3.3, y: -12, offsetY: 7500 },
      { x: 2.7, y: -14, offsetY: 8300 },
      { x: -2.9, y: -16, offsetY: 9000 },
      { x: 3.2, y: -18, offsetY: 9800 },
      { x: -2.5, y: -20, offsetY: 10500 }
    ];

    nodePositions.forEach((pos, index) => {
      const geometry = new THREE.SphereGeometry(0.3, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: index === 0 ? 0x22c55e : 0x6b7280,
        emissive: index === 0 ? 0x22c55e : 0x000000,
        emissiveIntensity: index === 0 ? 0.5 : 0,
        shininess: 100,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(pos.x, pos.y, 0);
      sphere.userData = { 
        index, 
        offsetY: pos.offsetY,
        baseScale: index === 0 ? 1.5 : 0.5
      };
      scene.add(sphere);
      nodes.push(sphere);

      // Add connecting lines between consecutive nodes
      if (index > 0) {
        const points = [
          new THREE.Vector3(nodePositions[index - 1].x, nodePositions[index - 1].y, 0),
          new THREE.Vector3(pos.x, pos.y, 0)
        ];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({ 
          color: 0x3A9BDC,
          transparent: true,
          opacity: 0.3
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      }
    });

    nodesRef.current = nodes;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      nodes.forEach((node, index) => {
        const offsetY = node.userData.offsetY;
        const prevOffsetY = index > 0 ? nodes[index - 1].userData.offsetY : 0;
        const nextOffsetY = index < nodes.length - 1 ? nodes[index + 1].userData.offsetY : offsetY + 700;

        // Calculate progress for this node
        let progress = 0;
        if (scrollY >= prevOffsetY && scrollY <= offsetY) {
          progress = 1 - (offsetY - scrollY) / (offsetY - prevOffsetY);
        } else if (scrollY >= offsetY && scrollY <= nextOffsetY) {
          progress = 1 - (scrollY - offsetY) / (nextOffsetY - offsetY);
        }

        // Scale: grows as it becomes active, shrinks as it passes
        const targetScale = scrollY >= offsetY ? 0.5 : (0.5 + progress * 1);
        node.scale.setScalar(targetScale);

        // Color: green when active, grey before, red after
        const material = node.material as THREE.MeshPhongMaterial;
        if (scrollY < offsetY - 200) {
          // Not yet active - grey
          material.color.setHex(0x6b7280);
          material.emissive.setHex(0x000000);
          material.emissiveIntensity = 0;
        } else if (scrollY >= offsetY - 200 && scrollY <= offsetY + 200) {
          // Becoming/currently active - green
          const greenProgress = Math.max(0, Math.min(1, (scrollY - (offsetY - 200)) / 400));
          material.color.setRGB(
            0.13 * (1 - greenProgress) + 0.13 * greenProgress,
            0.45 * (1 - greenProgress) + 0.77 * greenProgress,
            0.5 * (1 - greenProgress) + 0.37 * greenProgress
          );
          material.emissive.setHex(0x22c55e);
          material.emissiveIntensity = greenProgress * 0.5;
        } else {
          // Past active - red
          const redProgress = Math.min(1, (scrollY - offsetY - 200) / 400);
          material.color.setRGB(
            0.13 + redProgress * 0.74,
            0.77 - redProgress * 0.44,
            0.37 - redProgress * 0.23
          );
          material.emissive.setHex(0xef4444);
          material.emissiveIntensity = redProgress * 0.3;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ height: '11000px' }}
    />
  );
};
