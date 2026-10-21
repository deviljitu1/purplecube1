/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, RotateCcw, Box, Sparkles, Orbit } from 'lucide-react';

type ModelType = 'cube' | 'vase' | 'gyro' | 'sacred';
type FinishType = 'purple' | 'gold' | 'neon' | 'matte';

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeModel, setActiveModel] = useState<ModelType>('cube');
  const [activeFinish, setActiveFinish] = useState<FinishType>('purple');
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    const isHeadless =
      typeof navigator !== 'undefined' &&
      (navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent));

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(3.8, 2.6, 5.2);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isHeadless,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Atmospheric Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyPurple = new THREE.PointLight(0x9d4edd, 5, 20);
    keyPurple.position.set(3, 4, 3);
    scene.add(keyPurple);

    const rimCyan = new THREE.PointLight(0xc77dff, 3.5, 18);
    rimCyan.position.set(-3, 3, -3);
    scene.add(rimCyan);

    const underGlow = new THREE.PointLight(0x6a0dad, 4, 12);
    underGlow.position.set(0, -2, 2);
    scene.add(underGlow);

    // Holographic Circular Build Stage with glowing radial lines
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // Glowing base ring
    const ringGeo = new THREE.RingGeometry(1.6, 1.85, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x9d4edd,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.05;
    stageGroup.add(ring);

    // Inner subtle grid
    const innerGrid = new THREE.GridHelper(3.2, 16, 0xc77dff, 0x3c096c);
    innerGrid.position.y = -0.04;
    stageGroup.add(innerGrid);

    // Ambient floating 3D dust / sparks particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 5;
      positions[i + 1] = Math.random() * 3.5 - 0.2;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe0aaff,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Main 3D Model Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    groupRef.current = modelGroup;

    // Mouse drag rotation
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !groupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      groupRef.current.rotation.y += deltaX * 0.009;
      groupRef.current.rotation.x += deltaY * 0.009;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !groupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.current.y;

      groupRef.current.rotation.y += deltaX * 0.009;
      groupRef.current.rotation.x += deltaY * 0.009;

      previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize
    const handleResize = () => {
      if (!container || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth idle floating and rotation
      if (groupRef.current) {
        if (isRotating && !isDraggingRef.current) {
          groupRef.current.rotation.y += 0.008;
        }
        // Gentle vertical levitation
        groupRef.current.position.y = 0.9 + Math.sin(elapsed * 1.5) * 0.08;
      }

      // Rotate stage ring slowly
      ring.rotation.z += 0.004;

      // Particle floating
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Geometry & Materials
  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    while (group.children.length > 0) {
      const child = group.children[0] as THREE.Mesh;
      if (child.geometry) child.geometry.dispose();
      if (Array.isArray(child.material)) {
        child.material.forEach((m) => m.dispose());
      } else if (child.material) {
        child.material.dispose();
      }
      group.remove(child);
    }

    let material: THREE.Material;
    if (activeFinish === 'purple') {
      material = new THREE.MeshPhysicalMaterial({
        color: 0x9d4edd,
        roughness: 0.15,
        metalness: 0.45,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        wireframe,
      });
    } else if (activeFinish === 'gold') {
      material = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        roughness: 0.2,
        metalness: 0.92,
        wireframe,
      });
    } else if (activeFinish === 'neon') {
      material = new THREE.MeshPhysicalMaterial({
        color: 0x06b6d4,
        roughness: 0.1,
        transmission: 0.75,
        thickness: 0.6,
        wireframe,
      });
    } else {
      material = new THREE.MeshStandardMaterial({
        color: 0x222226,
        roughness: 0.85,
        metalness: 0.2,
        wireframe,
      });
    }

    if (activeModel === 'cube') {
      const cubeGroup = new THREE.Group();

      const mainCubeGeo = new THREE.BoxGeometry(1.65, 1.65, 1.65);
      const mainCube = new THREE.Mesh(mainCubeGeo, material);
      cubeGroup.add(mainCube);

      // Distinctive 3D printed micro-layer striations
      for (let i = -3; i <= 3; i++) {
        const lineGeo = new THREE.BoxGeometry(1.68, 0.02, 1.68);
        const lineMat = new THREE.MeshBasicMaterial({ color: 0xc77dff });
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.position.y = i * 0.22;
        cubeGroup.add(line);
      }

      group.add(cubeGroup);
    } else if (activeModel === 'vase') {
      const vaseGeo = new THREE.CylinderGeometry(0.65, 0.85, 2.1, 24, 32);
      const pos = vaseGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        const angle = y * 1.6;
        const x = pos.getX(i);
        const z = pos.getZ(i);
        pos.setX(i, x * Math.cos(angle) - z * Math.sin(angle));
        pos.setZ(i, x * Math.sin(angle) + z * Math.cos(angle));
      }
      vaseGeo.computeVertexNormals();

      const vase = new THREE.Mesh(vaseGeo, material);
      group.add(vase);
    } else if (activeModel === 'gyro') {
      const gyroGroup = new THREE.Group();
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.08, 16, 64), material);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.07, 16, 64), material);
      const ring3 = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.06, 16, 64), material);
      const centerSphere = new THREE.Mesh(new THREE.SphereGeometry(0.26, 24, 24), material);

      ring2.rotation.x = Math.PI / 4;
      ring3.rotation.y = Math.PI / 3;

      gyroGroup.add(ring1);
      gyroGroup.add(ring2);
      gyroGroup.add(ring3);
      gyroGroup.add(centerSphere);
      group.add(gyroGroup);
    } else {
      const knotGeo = new THREE.TorusKnotGeometry(0.78, 0.22, 100, 16, 2, 3);
      const knot = new THREE.Mesh(knotGeo, material);
      group.add(knot);
    }
  }, [activeModel, activeFinish, wireframe]);

  return (
    <div
      className={`relative w-full h-[280px] sm:h-[340px] md:h-[380px] flex flex-col justify-between items-center pointer-events-auto ${className}`}
    >
      {/* Three.js Canvas Container - Transparent & Floating */}
      <div
        ref={containerRef}
        data-testid="hero-3d-canvas"
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
      />

      {/* Floating Interactive Controls Bar */}
      <div className="z-20 w-full flex flex-col items-center gap-2 mt-auto pb-1">
        <div className="flex flex-wrap items-center justify-center gap-2 bg-[#120B1E]/85 border border-[#9D4EDD]/40 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          {/* Model Switcher */}
          <div className="flex items-center gap-1">
            {(
              [
                { id: 'cube', label: 'Cube' },
                { id: 'sacred', label: 'Sculpture' },
                { id: 'vase', label: 'Vase' },
                { id: 'gyro', label: 'Gyro' },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveModel(m.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  activeModel === m.id
                    ? 'bg-gradient-to-r from-[#6A0DAD] to-[#9D4EDD] text-white shadow-[0_0_12px_rgba(157,78,221,0.6)]'
                    : 'text-[#D7E2EA]/70 hover:text-white'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="w-[1px] h-4 bg-white/20 mx-1" />

          {/* Filament Color Swatches */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveFinish('purple')}
              title="Purple Resin"
              className={`w-4 h-4 rounded-full bg-gradient-to-tr from-[#6A0DAD] to-[#C77DFF] transition-all cursor-pointer ${
                activeFinish === 'purple' ? 'ring-2 ring-white scale-125' : 'opacity-70 hover:opacity-100'
              }`}
            />
            <button
              type="button"
              onClick={() => setActiveFinish('gold')}
              title="Silk Gold"
              className={`w-4 h-4 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 transition-all cursor-pointer ${
                activeFinish === 'gold' ? 'ring-2 ring-white scale-125' : 'opacity-70 hover:opacity-100'
              }`}
            />
            <button
              type="button"
              onClick={() => setActiveFinish('neon')}
              title="Cyan SLA"
              className={`w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-600 to-cyan-300 transition-all cursor-pointer ${
                activeFinish === 'neon' ? 'ring-2 ring-white scale-125' : 'opacity-70 hover:opacity-100'
              }`}
            />
            <button
              type="button"
              onClick={() => setActiveFinish('matte')}
              title="Stealth Matte"
              className={`w-4 h-4 rounded-full bg-neutral-800 border border-neutral-600 transition-all cursor-pointer ${
                activeFinish === 'matte' ? 'ring-2 ring-white scale-125' : 'opacity-70 hover:opacity-100'
              }`}
            />
          </div>

          <div className="w-[1px] h-4 bg-white/20 mx-1" />

          {/* Wireframe & Auto-spin */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setWireframe(!wireframe)}
              title="Toggle Wireframe Mesh"
              className={`p-1 rounded-md text-xs transition-colors cursor-pointer ${
                wireframe ? 'bg-[#9D4EDD] text-white' : 'text-[#D7E2EA]/70 hover:text-white'
              }`}
            >
              <Layers size={13} />
            </button>
            <button
              type="button"
              onClick={() => setIsRotating(!isRotating)}
              title="Toggle Rotation"
              className={`p-1 rounded-md text-xs transition-colors cursor-pointer ${
                isRotating ? 'text-[#C77DFF]' : 'text-white/30'
              }`}
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[#D7E2EA]/50 font-mono">
          <Orbit size={11} className="text-[#9D4EDD]" />
          <span>Click &amp; drag to rotate &bull; Real-time WebGL</span>
        </div>
      </div>
    </div>
  );
};
