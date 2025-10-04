import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const NodeNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);
  const linesRef = useRef<THREE.Line[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    // Camera setup with better perspective
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 12);
    cameraRef.current = camera;

    // Renderer setup with better quality
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create 15 nodes with truly random spacing
    const nodes: THREE.Mesh[] = [];
    const lines: THREE.Line[] = [];
    
    // Random positions with more variation
    const nodePositions = [
      { x: -4.2, y: 4, z: -2, offsetY: 1200 },
      { x: 3.8, y: 2.5, z: 1.5, offsetY: 1850 },
      { x: -3.5, y: 0.8, z: -1, offsetY: 2600 },
      { x: 4.5, y: -1.2, z: 2, offsetY: 3200 },
      { x: -2.8, y: -3.5, z: -2.5, offsetY: 4100 },
      { x: 3.2, y: -5.8, z: 1.8, offsetY: 4950 },
      { x: -4.8, y: -7.5, z: -1.2, offsetY: 5650 },
      { x: 2.5, y: -10, z: 2.2, offsetY: 6500 },
      { x: -3.8, y: -12.8, z: -2, offsetY: 7200 },
      { x: 4.2, y: -15.2, z: 1.5, offsetY: 8050 },
      { x: -2.5, y: -17.5, z: -1.8, offsetY: 8750 },
      { x: 3.5, y: -20.3, z: 2.5, offsetY: 9600 },
      { x: -4.5, y: -23, z: -2.2, offsetY: 10300 },
      { x: 2.8, y: -25.8, z: 1.2, offsetY: 11150 },
      { x: -3.2, y: -28.5, z: -1.5, offsetY: 12000 }
    ];

    nodePositions.forEach((pos, index) => {
      // Create sphere with better geometry
      const geometry = new THREE.SphereGeometry(0.5, 64, 64);
      
      // Use MeshStandardMaterial for better lighting
      const material = new THREE.MeshStandardMaterial({
        color: 0x1A1D23,
        emissive: 0x3A9BDC,
        emissiveIntensity: 0.1,
        metalness: 0.8,
        roughness: 0.2,
      });
      
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(pos.x, pos.y, pos.z);
      sphere.castShadow = true;
      sphere.receiveShadow = true;
      sphere.userData = { 
        index, 
        offsetY: pos.offsetY,
        baseScale: 0.3,
        initialRotation: Math.random() * Math.PI * 2
      };
      scene.add(sphere);
      nodes.push(sphere);

      // Add glowing outer ring
      const ringGeometry = new THREE.TorusGeometry(0.6, 0.05, 16, 100);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0x3A9BDC,
        emissive: 0x3A9BDC,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.6,
        metalness: 0.9,
        roughness: 0.1,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(sphere.position);
      ring.rotation.x = Math.PI / 2;
      sphere.userData.ring = ring;
      scene.add(ring);

      // Add connecting tubes between consecutive nodes
      if (index > 0) {
        const prevPos = nodePositions[index - 1];
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(prevPos.x, prevPos.y, prevPos.z),
          new THREE.Vector3(
            (prevPos.x + pos.x) / 2 + (Math.random() - 0.5) * 2,
            (prevPos.y + pos.y) / 2,
            (prevPos.z + pos.z) / 2 + (Math.random() - 0.5) * 2
          ),
          new THREE.Vector3(pos.x, pos.y, pos.z)
        ]);
        
        const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.05, 8, false);
        const tubeMaterial = new THREE.MeshStandardMaterial({
          color: 0x3A9BDC,
          emissive: 0x3A9BDC,
          emissiveIntensity: 0.3,
          transparent: true,
          opacity: 0.4,
          metalness: 0.8,
          roughness: 0.2,
        });
        const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
        scene.add(tube);
        sphere.userData.tube = tube;
      }
    });

    nodesRef.current = nodes;

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x3A9BDC, 0.3);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x7E57C2, 1.5);
    mainLight.position.set(5, 10, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const accentLight1 = new THREE.PointLight(0x32E0C4, 2, 50);
    accentLight1.position.set(-5, 0, 5);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x7E57C2, 2, 50);
    accentLight2.position.set(5, -10, 5);
    scene.add(accentLight2);

    // Animation loop with rotation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate nodes and rings slightly
      nodes.forEach((node) => {
        node.rotation.y += 0.005;
        node.rotation.x += 0.003;
        if (node.userData.ring) {
          node.userData.ring.rotation.z += 0.01;
        }
      });
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle scroll with smooth transitions
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      nodes.forEach((node, index) => {
        const offsetY = node.userData.offsetY;
        const prevOffsetY = index > 0 ? nodes[index - 1].userData.offsetY : 0;
        const nextOffsetY = index < nodes.length - 1 ? nodes[index + 1].userData.offsetY : offsetY + 900;
        const transitionRange = 600;

        // Calculate distance from active point
        const distanceFromActive = Math.abs(scrollY - offsetY);
        const normalizedDistance = Math.min(distanceFromActive / transitionRange, 1);

        // Scale: large when active, small when far
        const targetScale = node.userData.baseScale * (2.5 - normalizedDistance * 2);
        node.scale.setScalar(targetScale);
        
        if (node.userData.ring) {
          node.userData.ring.scale.setScalar(targetScale);
        }

        // Material updates
        const material = node.material as THREE.MeshStandardMaterial;
        const ringMaterial = node.userData.ring?.material as THREE.MeshStandardMaterial;

        if (scrollY < offsetY - transitionRange) {
          // Upcoming node - dim teal
          material.color.setHex(0x1A1D23);
          material.emissive.setHex(0x3A9BDC);
          material.emissiveIntensity = 0.1;
          if (ringMaterial) {
            ringMaterial.emissive.setHex(0x3A9BDC);
            ringMaterial.emissiveIntensity = 0.2;
            ringMaterial.opacity = 0.3;
          }
        } else if (scrollY >= offsetY - transitionRange && scrollY <= offsetY + transitionRange) {
          // Active node - bright luminous teal/green
          const activeProgress = 1 - normalizedDistance;
          material.color.setHex(0x0C0E12);
          material.emissive.setHex(0x32E0C4);
          material.emissiveIntensity = 0.8 * activeProgress + 0.2;
          if (ringMaterial) {
            ringMaterial.emissive.setHex(0x32E0C4);
            ringMaterial.emissiveIntensity = 1.2 * activeProgress;
            ringMaterial.opacity = 0.8 * activeProgress + 0.2;
          }
          
          // Update tube color if exists
          if (node.userData.tube) {
            const tubeMat = node.userData.tube.material as THREE.MeshStandardMaterial;
            tubeMat.emissive.setHex(0x32E0C4);
            tubeMat.emissiveIntensity = 0.6 * activeProgress;
            tubeMat.opacity = 0.7 * activeProgress + 0.3;
          }
        } else {
          // Past node - red/neo-purple fade
          const fadeProgress = Math.min((scrollY - offsetY - transitionRange) / transitionRange, 1);
          material.color.setHex(0x1A1D23);
          material.emissive.setHex(0x7E57C2);
          material.emissiveIntensity = 0.4 * (1 - fadeProgress * 0.7);
          if (ringMaterial) {
            ringMaterial.emissive.setHex(0x7E57C2);
            ringMaterial.emissiveIntensity = 0.5 * (1 - fadeProgress * 0.7);
            ringMaterial.opacity = 0.4 * (1 - fadeProgress * 0.5);
          }
          
          // Fade tube
          if (node.userData.tube) {
            const tubeMat = node.userData.tube.material as THREE.MeshStandardMaterial;
            tubeMat.emissive.setHex(0x7E57C2);
            tubeMat.emissiveIntensity = 0.3 * (1 - fadeProgress * 0.7);
            tubeMat.opacity = 0.3 * (1 - fadeProgress * 0.7);
          }
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
      style={{ height: '13000px' }}
    />
  );
};
