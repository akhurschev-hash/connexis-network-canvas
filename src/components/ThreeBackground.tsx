import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    globeGroup: THREE.Group;
    globe: THREE.LineSegments;
    meshLines: THREE.Line;
    nodesGroup: THREE.Group;
    nodes: THREE.Mesh[];
    targetX: number;
    targetY: number;
    state: { index: number };
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0c0e12, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // === Globe ===
    const globeGroup = new THREE.Group();
    const globeGeometry = new THREE.SphereGeometry(1.4, 32, 32);
    const globeWire = new THREE.WireframeGeometry(globeGeometry);
    const globe = new THREE.LineSegments(
      globeWire,
      new THREE.LineBasicMaterial({ color: 0x32e0c4, transparent: true, opacity: 0.6 })
    );
    globeGroup.add(globe);

    // Mesh connection lines
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 500; i++) {
      const phi = Math.random() * Math.PI * 2;
      const costheta = Math.random() * 2 - 1;
      const theta = Math.acos(costheta);
      const r = 1.4;
      points.push(
        new THREE.Vector3(
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(theta)
        )
      );
    }
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3a9bdc,
      opacity: 0.15,
      transparent: true,
    });
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const meshLines = new THREE.Line(lineGeometry, lineMaterial);
    globeGroup.add(meshLines);
    scene.add(globeGroup);

    // === Node Field ===
    const nodesGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.25, 24, 24);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x5da869,
      roughness: 0.4,
      metalness: 0.2,
    });
    const N = 15;
    const nodes: THREE.Mesh[] = [];
    let yCursor = 3;

    for (let i = 0; i < N; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat.clone());
      mesh.position.set(
        THREE.MathUtils.randFloatSpread(4),
        yCursor,
        THREE.MathUtils.randFloatSpread(1)
      );
      yCursor -= THREE.MathUtils.randFloat(0.5, 0.9);
      nodesGroup.add(mesh);
      nodes.push(mesh);
    }
    nodesGroup.visible = false;
    scene.add(nodesGroup);

    // Mouse interaction
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = x * 0.5;
      targetY = y * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ScrollTrigger animations
    gsap.to(globeGroup.scale, {
      x: 3,
      y: 3,
      z: 3,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '30%',
        scrub: true,
      },
    });

    gsap.to(globe.material, {
      opacity: 0,
      scrollTrigger: {
        start: '30%',
        end: '40%',
        scrub: true,
      },
    });

    gsap.to(meshLines.material, {
      opacity: 0,
      scrollTrigger: {
        start: '30%',
        end: '40%',
        scrub: true,
        onEnter: () => {
          nodesGroup.visible = true;
        },
      },
    });

    gsap.fromTo(
      nodesGroup.scale,
      { x: 0.1, y: 0.1, z: 0.1 },
      {
        x: 1,
        y: 1,
        z: 1,
        scrollTrigger: {
          start: '30%',
          end: '50%',
          scrub: true,
        },
      }
    );

    const state = { index: 0 };
    gsap.to(state, {
      index: N - 1,
      ease: 'none',
      scrollTrigger: {
        start: '50%',
        end: '+=3000',
        scrub: 0.3,
      },
    });

    // Animation functions
    const animateNodes = () => {
      const p = state.index;
      const k = Math.floor(p);
      const t = p - k;

      nodes.forEach((n, i) => {
        if (i === k) {
          n.scale.setScalar(THREE.MathUtils.lerp(1.2, 0.4, t));
          n.material.color.setHSL(0.33 * (1 - t), 0.6, 0.45);
        } else if (i === k + 1) {
          n.scale.setScalar(THREE.MathUtils.lerp(0.4, 1.2, t));
          n.material.color.setHSL(0.33 * t, 0.6, 0.45);
        } else {
          n.scale.setScalar(0.45);
          n.material.color.setHSL(0, 0, 0.4);
        }
        n.position.x += Math.sin(Date.now() / 1000 + i) * 0.0015;
      });
    };

    const render = () => {
      const animationId = requestAnimationFrame(render);
      
      globeGroup.rotation.y += 0.004 + (targetX - globeGroup.rotation.y) * 0.02;
      globeGroup.rotation.x += (targetY - globeGroup.rotation.x) * 0.02;
      
      animateNodes();
      
      renderer.render(scene, camera);
      
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Store refs
    sceneRef.current = {
      renderer,
      scene,
      camera,
      globeGroup,
      globe,
      meshLines,
      nodesGroup,
      nodes,
      targetX,
      targetY,
      state,
      animationId: 0,
    };

    // Start animation
    render();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }

      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      renderer.dispose();
      globeGeometry.dispose();
      nodeGeo.dispose();
      lineGeometry.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#0c0e12' }}
      aria-label="Animated 3D background showing network connections"
    />
  );
};
