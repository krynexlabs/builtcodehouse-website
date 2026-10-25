import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SceneFallback } from './three/SceneFallback';

/**
 * BUILTCODE HOUSE — 3D Centerpiece: "The Architectural Systems Monolith"
 * 
 * Quality Improvements (Phase 8 Audit):
 * - Machined obsidian & brushed titanium material finishes.
 * - Dual-tiered key/rim lighting with ACESFilmic tone mapping.
 * - Precision CAD wireframe alignment with calibrated datum calipers.
 * - Smooth inertia damping on mouse interaction.
 * - Optimized WebGL buffer disposal and resize lifecycle.
 * - Fallback rendering when WebGL is unsupported or disabled.
 */
const checkWebGLAvailable = (): boolean => {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
};

const isWebGLSupported = checkWebGLAvailable();

export const HeroVisual3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isWebGLSupported) return;

    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera (Orthographic-like long perspective for architectural precision)
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
    camera.position.set(24, 18, 28);
    camera.lookAt(0, 0, 0);

    // Renderer with high performance & ACES Filmic mapping
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Master Group for smooth animation & parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- LIGHTING RIG (Architectural Sculptural Rig) ---
    // Ambient soft fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    // Hemisphere sky/ground contrast for depth
    const hemiLight = new THREE.HemisphereLight(0x181822, 0x080808, 0.9);
    scene.add(hemiLight);

    // Key Light (Crisp directional sun)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(32, 48, 26);
    scene.add(keyLight);

    // Fill Light (Subtle cold fill)
    const fillLight = new THREE.DirectionalLight(0xa8adb2, 0.7);
    fillLight.position.set(-28, 22, -22);
    scene.add(fillLight);

    // Precision Laser Rim Light (Brand Accent #D6FF3F)
    const rimLight = new THREE.DirectionalLight(0xd6ff3f, 1.1);
    rimLight.position.set(0, -32, 22);
    scene.add(rimLight);

    // --- MATERIALS ---
    // Machined Obsidian Architectural Material
    const obsidianMaterial = new THREE.MeshStandardMaterial({
      color: 0x111114,
      metalness: 0.88,
      roughness: 0.22,
    });

    const brushedGraphiteMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1f,
      metalness: 0.75,
      roughness: 0.32,
    });

    // Hairline Wireframe Edge Material (Architectural CAD lines)
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
    });

    // Precision Calibrated Accent Line Material (Brand Accent #D6FF3F)
    const accentLineMaterial = new THREE.LineBasicMaterial({
      color: 0xd6ff3f,
      transparent: true,
      opacity: 0.9,
    });

    // Track meshes for disposal
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [
      obsidianMaterial,
      brushedGraphiteMaterial,
      edgeMaterial,
      accentLineMaterial,
    ];

    // Helper: Add Monolithic Slab with Hairline Edges
    const addSlab = (
      w: number,
      h: number,
      d: number,
      x: number,
      y: number,
      z: number,
      material: THREE.Material = obsidianMaterial
    ) => {
      const geo = new THREE.BoxGeometry(w, h, d);
      geometries.push(geo);

      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(x, y, z);
      masterGroup.add(mesh);

      const edges = new THREE.EdgesGeometry(geo);
      geometries.push(edges);

      const line = new THREE.LineSegments(edges, edgeMaterial);
      mesh.add(line);
      return mesh;
    };

    // --- ARCHITECTURAL STRUCTURAL MONOLITH ASSEMBLY ---
    // 1. Foundation Base Cantilever Plinth
    addSlab(14.5, 0.8, 14.5, 0, -5, 0, obsidianMaterial);

    // 2. Primary Vertical Core Shaft (Systems Spine)
    addSlab(3.6, 14.5, 3.6, -2, 2, -2, obsidianMaterial);

    // 3. Interlocking Cantilever Platform 1 (Lower Mid)
    addSlab(11.5, 1.2, 7.5, 2, 0, 1, brushedGraphiteMaterial);

    // 4. Precision Transverse Beam (Engineered Truss)
    addSlab(6.2, 2.5, 12.5, 1, 3.5, 0, obsidianMaterial);

    // 5. Crown Monolith (Upper Cantilever Horizon)
    addSlab(10.5, 1.2, 9.5, -1, 7.5, 1.5, brushedGraphiteMaterial);

    // 6. Suspended Vertical Datum Fin
    addSlab(0.6, 11.5, 4.8, 4.5, 4, 3, obsidianMaterial);

    // --- ARCHITECTURAL DATUM CALIBRATION GRIDS & AXIS TICKS ---
    // Base Precision Grid Lines (Mathematical Plane)
    const gridHelper = new THREE.GridHelper(26, 26, 0xd6ff3f, 0x222222);
    gridHelper.position.y = -5.5;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.16;
    masterGroup.add(gridHelper);

    // Precision Laser Alignment Tendons (Calibrated Engineering Lines)
    const lineGeo1 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-9, 7.5, 6),
      new THREE.Vector3(9, 7.5, 6),
    ]);
    geometries.push(lineGeo1);
    const line1 = new THREE.Line(lineGeo1, accentLineMaterial);
    masterGroup.add(line1);

    const lineGeo2 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(4.5, -5.5, 5.5),
      new THREE.Vector3(4.5, 10.5, 5.5),
    ]);
    geometries.push(lineGeo2);
    const line2 = new THREE.Line(lineGeo2, accentLineMaterial);
    masterGroup.add(line2);

    // Precision Datum Marker Spheres (Intersection Nodes)
    const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
    geometries.push(nodeGeo);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xd6ff3f });
    materials.push(nodeMat);

    const node1 = new THREE.Mesh(nodeGeo, nodeMat);
    node1.position.set(4.5, 7.5, 6);
    masterGroup.add(node1);

    const node2 = new THREE.Mesh(nodeGeo, nodeMat);
    node2.position.set(-2, 9.25, -2);
    masterGroup.add(node2);

    const node3 = new THREE.Mesh(nodeGeo, nodeMat);
    node3.position.set(5.5, -5, 5.5);
    masterGroup.add(node3);

    // --- INTERACTION & BUTTERY SMOOTH LERP ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Handle Responsive Dynamic Camera Framing & Aspect Ratio
    const updateCameraDistance = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      if (height === 0) return;
      const aspect = width / height;
      camera.aspect = aspect;

      // On mobile / narrow columns (aspect < 1.15), gently adjust camera distance to prevent clipping
      if (aspect < 1.15) {
        const zoomFactor = Math.min(Math.max(1.15 / aspect, 1.0), 1.55);
        camera.position.set(24 * zoomFactor, 18 * zoomFactor, 28 * zoomFactor);
      } else {
        camera.position.set(24, 18, 28);
      }

      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Initial camera calibration
    updateCameraDistance();
    window.addEventListener('resize', updateCameraDistance);

    // Visibility Optimization with IntersectionObserver
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop with High-Precision Performance Timer (Zero Three.js Deprecation Warnings)
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Freeze WebGL GPU execution when scrolled out of view
      if (!isVisible) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Continuous subtle structural revolution with smooth mouse parallax
      targetRotationY = masterGroup.rotation.y + 0.0016 + mouseX * 0.015;
      targetRotationX = mouseY * 0.18;

      masterGroup.rotation.y += (targetRotationY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetRotationX - masterGroup.rotation.x) * 0.04;

      // Subtle breathing flotation along vertical axis (engineering micro-oscillation)
      masterGroup.position.y = Math.sin(elapsedTime * 0.7) * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    // Comprehensive WebGL Resource Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', updateCameraDistance);
      cancelAnimationFrame(animationFrameId);

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!isWebGLSupported) {
    return <SceneFallback />;
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: 0,
        }}
      />

      {/* Engineering HUD Coordinate Overlays */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '4px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--brand-accent)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          SYS.MODEL // STRUCTURAL MATRIX 01
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}
        >
          NODE: DISTRIBUTED RUNTIME
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '24px',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-secondary)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: 'var(--brand-accent)',
              boxShadow: '0 0 6px var(--brand-accent)',
            }}
          />
          GEOMETRIC TOLERANCE // 0.0001 MM
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}
        >
          SCALE: 1:1 ENTERPRISE ARCHITECTURE
        </span>
      </div>

      {/* Decorative Hairline Framing Corners */}
      <div className="crosshair" style={{ top: '16px', left: '16px' }} />
      <div className="crosshair" style={{ top: '16px', right: '16px' }} />
      <div className="crosshair" style={{ bottom: '16px', left: '16px' }} />
      <div className="crosshair" style={{ bottom: '16px', right: '16px' }} />
    </div>
  );
};
