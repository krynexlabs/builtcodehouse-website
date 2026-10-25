import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * BUILTCODE HOUSE — Signature 3D Centerpiece: "The Architectural Digital Igloo"
 * 
 * Visual Architecture Concept:
 * - A futuristic, modular igloo dome engineered from precision curved ceramic/glass blocks.
 * - Projecting arched entrance portal spilling luminous electric cyan light from within.
 * - Internal glowing digital core representing the software engineering engine.
 * - Floating circular architectural datum plinth with CAD calibration rings.
 * - Interactive raycasting: Hovering or touching blocks reveals engineering node telemetry.
 * - ACESFilmic tone mapping, high-precision performance timer, and full resource disposal.
 */

interface ModuleData {
  id: string;
  category: string;
  name: string;
  spec: string;
}

const MODULE_DEFINITIONS: ModuleData[] = [
  { id: 'MOD-01', category: 'INTERFACE', name: 'COMPONENT RUNTIME', spec: 'React 19 + TypeScript + Zero-CLS Layouts' },
  { id: 'MOD-02', category: 'API GATEWAY', name: 'HIGH-CONCURRENCY MESH', spec: 'Sub-50ms Edge Routing & Caching' },
  { id: 'MOD-03', category: 'DATA CORE', name: 'TENANT ISOLATION', spec: 'Row-Level Security & Postgres RLS' },
  { id: 'MOD-04', category: 'INTELLIGENCE', name: 'VECTOR RETRIEVAL', spec: 'Hybrid Dense + BM25 Lexical Ranking' },
  { id: 'MOD-05', category: 'INFRASTRUCTURE', name: 'AUTONOMOUS CI/CD', spec: 'Automated Test Hardening & GitOps' },
  { id: 'MOD-06', category: 'FOUNDATION', name: 'DESIGN SYSTEM', spec: 'Resend-Level Tokens & Fluid Spacing' },
];

export const HeroVisual3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeModule, setActiveModule] = useState<ModuleData>(MODULE_DEFINITIONS[0]);
  const [isHoveringMesh, setIsHoveringMesh] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera (Long architectural perspective)
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.set(22, 16, 26);
    camera.lookAt(0, 0.5, 0);

    // 3. Renderer with ACESFilmic Tone Mapping
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 4. Master Group for Float & Parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- LIGHTING RIG (Crisp Daylight + Core Glow) ---
    // Ambient soft daylight
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    // Key Sun Light (Warm highlight)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(26, 40, 24);
    scene.add(keyLight);

    // Fill Light (Soft cool daylight)
    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 0.9);
    fillLight.position.set(-24, 20, -18);
    scene.add(fillLight);

    // Electric Cyan Laser Rim Light (Brand Accent #0066FF)
    const rimLight = new THREE.DirectionalLight(0x0066ff, 1.4);
    rimLight.position.set(-10, -20, 20);
    scene.add(rimLight);

    // Internal Glowing Core PointLight (Radiating through block joints and entrance)
    const corePointLight = new THREE.PointLight(0x0066ff, 5.5, 28, 1.2);
    corePointLight.position.set(0, 0.8, 1.5);
    masterGroup.add(corePointLight);

    // Secondary Warm Hearth PointLight inside igloo
    const hearthLight = new THREE.PointLight(0x38bdf8, 3.2, 18, 1.4);
    hearthLight.position.set(0, 0.2, -0.5);
    masterGroup.add(hearthLight);

    // --- MATERIALS ---
    // Pearl Frosted Ceramic / Glass Panels (Resend aesthetic)
    const pearlMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.18,
      metalness: 0.06,
      transparent: true,
      opacity: 0.94,
    });

    // Luminous Internal Digital Core Material
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0066ff,
      emissive: 0x0070f3,
      emissiveIntensity: 1.6,
      roughness: 0.2,
      metalness: 0.2,
    });

    // CAD Hairline Wireframe Edges (Electric Cyan / Gray)
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.32,
    });

    // Hover Highlight Material
    const hoverMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x0066ff,
      emissiveIntensity: 0.75,
      roughness: 0.1,
      metalness: 0.15,
      transparent: true,
      opacity: 0.98,
    });

    // Memory Disposal Tracking
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [
      pearlMaterial,
      coreMaterial,
      edgeMaterial,
      hoverMaterial,
    ];
    const interactiveMeshes: THREE.Mesh[] = [];

    // --- 5. THE SIGNATURE ARCHITECTURAL IGLOO GEOMETRY ---
    const iglooGroup = new THREE.Group();
    masterGroup.add(iglooGroup);

    // Base Dome Radius
    const domeRadius = 8.8;

    // Concentric Tier Definitions (Modular Blocks Arrangement)
    const tiers = [
      { phi: 0.18, count: 14, w: 3.5, h: 1.7, d: 1.3, skipAngle: 0.45 }, // Tier 1: Base Ring (skips for entrance)
      { phi: 0.42, count: 12, w: 3.3, h: 1.7, d: 1.25, skipAngle: 0.32 }, // Tier 2: Lower-Mid
      { phi: 0.68, count: 10, w: 3.0, h: 1.65, d: 1.2, skipAngle: 0.0 }, // Tier 3: Mid-Dome
      { phi: 0.94, count: 8,  w: 2.6, h: 1.6, d: 1.15, skipAngle: 0.0 }, // Tier 4: Upper-Mid
      { phi: 1.22, count: 6,  w: 2.1, h: 1.5, d: 1.05, skipAngle: 0.0 }, // Tier 5: Crown Collar
    ];

    let meshIndex = 0;

    tiers.forEach((tier, tierIdx) => {
      const { phi, count, w, h, d, skipAngle } = tier;
      const ringRadius = domeRadius * Math.cos(phi);
      const ringY = domeRadius * Math.sin(phi) - 2.8;

      for (let i = 0; i < count; i++) {
        // Stagger each ring for authentic modular masonry overlap
        const stagger = (tierIdx % 2) * (Math.PI / count);
        const theta = (i * 2 * Math.PI) / count + stagger;

        // Orient entrance facing forward-right to the camera (theta = 0.42 * PI)
        const entranceAngle = Math.PI * 0.42;
        let diff = Math.abs(theta - entranceAngle);
        if (diff > Math.PI) diff = 2 * Math.PI - diff;

        if (skipAngle > 0 && diff < skipAngle) {
          continue; // Leave portal opening!
        }

        const geo = new THREE.BoxGeometry(w, h, d);
        geometries.push(geo);

        const mesh = new THREE.Mesh(geo, pearlMaterial);
        
        // Calculate 3D position on the catenary dome surface
        const px = ringRadius * Math.cos(theta);
        const pz = ringRadius * Math.sin(theta);
        mesh.position.set(px, ringY, pz);

        // Orient box tangential to the dome curve
        mesh.lookAt(px * 1.5, ringY + Math.sin(phi) * 2.0, pz * 1.5);

        // Add hairline CAD edges for architectural clarity
        const edges = new THREE.EdgesGeometry(geo);
        geometries.push(edges);
        const edgeLine = new THREE.LineSegments(edges, edgeMaterial);
        mesh.add(edgeLine);

        // Attach metadata for raycasting interaction
        const modDef = MODULE_DEFINITIONS[meshIndex % MODULE_DEFINITIONS.length];
        mesh.userData = { moduleData: modDef, originalMaterial: pearlMaterial };
        interactiveMeshes.push(mesh);
        iglooGroup.add(mesh);
        meshIndex++;
      }
    });

    // --- APEX OCULUS (Top Circular Skylight Aperture) ---
    const oculusRadius = 2.4;
    const oculusY = domeRadius * Math.sin(1.42) - 2.7;

    const oculusGeo = new THREE.TorusGeometry(oculusRadius, 0.35, 16, 32);
    geometries.push(oculusGeo);
    const oculusMesh = new THREE.Mesh(oculusGeo, pearlMaterial);
    oculusMesh.rotation.x = Math.PI / 2;
    oculusMesh.position.set(0, oculusY, 0);
    iglooGroup.add(oculusMesh);

    // Oculus Skylight Lens
    const lensGeo = new THREE.CircleGeometry(oculusRadius * 0.85, 32);
    geometries.push(lensGeo);
    const lensMat = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    materials.push(lensMat);
    const lensMesh = new THREE.Mesh(lensGeo, lensMat);
    lensMesh.rotation.x = Math.PI / 2;
    lensMesh.position.set(0, oculusY + 0.05, 0);
    iglooGroup.add(lensMesh);

    // --- ARCHITECTURAL ENTRANCE PORTAL (Projecting Vestibule Tunnel) ---
    const portalGroup = new THREE.Group();
    const portalDirX = Math.cos(Math.PI * 0.42);
    const portalDirZ = Math.sin(Math.PI * 0.42);

    // 3 Concentric Stepped Archway Collars extending outward
    for (let archIdx = 0; archIdx < 3; archIdx++) {
      const dist = 7.6 + archIdx * 1.35;
      const archScale = 1.0 - archIdx * 0.06;
      const archHeight = 3.6 * archScale;
      const archWidth = 3.2 * archScale;
      const archDepth = 1.1;

      // Left Pillar
      const leftPillarGeo = new THREE.BoxGeometry(0.85, archHeight, archDepth);
      geometries.push(leftPillarGeo);
      const leftPillar = new THREE.Mesh(leftPillarGeo, pearlMaterial);
      leftPillar.position.set(-archWidth * 0.5, archHeight * 0.5 - 2.8, 0);
      const leftEdges = new THREE.EdgesGeometry(leftPillarGeo);
      geometries.push(leftEdges);
      leftPillar.add(new THREE.LineSegments(leftEdges, edgeMaterial));

      // Right Pillar
      const rightPillarGeo = new THREE.BoxGeometry(0.85, archHeight, archDepth);
      geometries.push(rightPillarGeo);
      const rightPillar = new THREE.Mesh(rightPillarGeo, pearlMaterial);
      rightPillar.position.set(archWidth * 0.5, archHeight * 0.5 - 2.8, 0);
      const rightEdges = new THREE.EdgesGeometry(rightPillarGeo);
      geometries.push(rightEdges);
      rightPillar.add(new THREE.LineSegments(rightEdges, edgeMaterial));

      // Top Lintel Arch Beam
      const lintelGeo = new THREE.BoxGeometry(archWidth + 0.85, 0.85, archDepth);
      geometries.push(lintelGeo);
      const lintel = new THREE.Mesh(lintelGeo, pearlMaterial);
      lintel.position.set(0, archHeight - 2.4, 0);
      const lintelEdges = new THREE.EdgesGeometry(lintelGeo);
      geometries.push(lintelEdges);
      lintel.add(new THREE.LineSegments(lintelEdges, edgeMaterial));

      const archSubGroup = new THREE.Group();
      archSubGroup.add(leftPillar);
      archSubGroup.add(rightPillar);
      archSubGroup.add(lintel);

      // Position and orient the archway along the portal vector
      archSubGroup.position.set(portalDirX * dist, 0, portalDirZ * dist);
      archSubGroup.rotation.y = -(Math.PI * 0.42 - Math.PI / 2);

      portalGroup.add(archSubGroup);
    }
    iglooGroup.add(portalGroup);

    // --- LUMINOUS DIGITAL CORE (Pulsating Internal Core) ---
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    geometries.push(coreGeo);
    const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
    coreMesh.position.set(0, 0.5, 0);
    iglooGroup.add(coreMesh);

    // Core Orbit Ring 1
    const ringGeo1 = new THREE.RingGeometry(2.4, 2.45, 64);
    geometries.push(ringGeo1);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    materials.push(ringMat);
    const orbitRing1 = new THREE.Mesh(ringGeo1, ringMat);
    orbitRing1.rotation.x = Math.PI / 3;
    orbitRing1.position.set(0, 0.5, 0);
    iglooGroup.add(orbitRing1);

    // --- FLOATING ARCHITECTURAL DATUM PLATFORM (Foundation Disc) ---
    const plinthY = -2.85;

    // Main Floating Foundation Disc
    const plinthGeo = new THREE.CylinderGeometry(13.5, 13.5, 0.25, 64);
    geometries.push(plinthGeo);
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0xf4f4f5,
      roughness: 0.35,
      metalness: 0.05,
    });
    materials.push(plinthMat);
    const plinthMesh = new THREE.Mesh(plinthGeo, plinthMat);
    plinthMesh.position.set(0, plinthY - 0.125, 0);
    masterGroup.add(plinthMesh);

    // Plinth CAD Edge
    const plinthEdges = new THREE.EdgesGeometry(plinthGeo);
    geometries.push(plinthEdges);
    const plinthEdgeLine = new THREE.LineSegments(
      plinthEdges,
      new THREE.LineBasicMaterial({ color: 0xd4d4d8, transparent: true, opacity: 0.7 })
    );
    plinthMesh.add(plinthEdgeLine);

    // Concentric Calibration Rings on Plinth
    const datumRings = [10.5, 12.0, 13.0];
    datumRings.forEach((r) => {
      const rGeo = new THREE.RingGeometry(r, r + 0.04, 64);
      geometries.push(rGeo);
      const rLine = new THREE.Mesh(
        rGeo,
        new THREE.MeshBasicMaterial({ color: 0x0066ff, side: THREE.DoubleSide, transparent: true, opacity: 0.25 })
      );
      rLine.rotation.x = -Math.PI / 2;
      rLine.position.set(0, plinthY + 0.01, 0);
      masterGroup.add(rLine);
    });

    // Datum Node Spheres around Foundation
    for (let k = 0; k < 8; k++) {
      const ang = (k * 2 * Math.PI) / 8;
      const sGeo = new THREE.SphereGeometry(0.12, 16, 16);
      geometries.push(sGeo);
      const sMesh = new THREE.Mesh(sGeo, new THREE.MeshBasicMaterial({ color: 0x0066ff }));
      sMesh.position.set(12.5 * Math.cos(ang), plinthY + 0.1, 12.5 * Math.sin(ang));
      masterGroup.add(sMesh);
    }

    // --- INTERACTION & RAYCASTING ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = -0.3; // Initial resting angle presenting the entrance archway

    const raycaster = new THREE.Raycaster();
    const mouseCoord = new THREE.Vector2(-999, -999);
    let hoveredMesh: THREE.Mesh | null = null;

    const handlePointerMove = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((clientY - rect.top) / rect.height) * 2 - 1);
      mouseCoord.x = mouseX;
      mouseCoord.y = mouseY;
    };

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // Dynamic Camera Framing for Mobile / Tablets
    const updateCameraDistance = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      if (height === 0) return;
      const aspect = width / height;
      camera.aspect = aspect;

      if (aspect < 1.15) {
        const factor = Math.min(Math.max(1.15 / aspect, 1.0), 1.55);
        camera.position.set(22 * factor, 16 * factor, 26 * factor);
      } else {
        camera.position.set(22, 16, 26);
      }

      camera.lookAt(0, 0.5, 0);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    updateCameraDistance();
    window.addEventListener('resize', updateCameraDistance);

    // IntersectionObserver to sleep GPU render loop when scrolled off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // --- ANIMATION LOOP ---
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth inertia rotation
      targetRotationY += 0.0012 + mouseX * 0.008;
      targetRotationX = mouseY * 0.14;

      masterGroup.rotation.y += (targetRotationY - masterGroup.rotation.y) * 0.045;
      masterGroup.rotation.x += (targetRotationX - masterGroup.rotation.x) * 0.04;

      // Subtle breathing flotation on vertical axis
      masterGroup.position.y = Math.sin(elapsedTime * 0.75) * 0.22;

      // Luminous Core subtle pulsation
      const coreScale = 1.0 + Math.sin(elapsedTime * 2.2) * 0.06;
      coreMesh.scale.set(coreScale, coreScale, coreScale);
      orbitRing1.rotation.z += 0.012;

      // Raycasting for interactive module inspection
      if (width > 640 && mouseCoord.x !== -999) {
        raycaster.setFromCamera(mouseCoord, camera);
        const intersects = raycaster.intersectObjects(interactiveMeshes, false);

        if (intersects.length > 0) {
          const hit = intersects[0].object as THREE.Mesh;
          if (hoveredMesh !== hit) {
            if (hoveredMesh && hoveredMesh.userData.originalMaterial) {
              hoveredMesh.material = hoveredMesh.userData.originalMaterial;
            }
            hoveredMesh = hit;
            hoveredMesh.material = hoverMaterial;
            if (hit.userData.moduleData) {
              setActiveModule(hit.userData.moduleData);
              setIsHoveringMesh(true);
            }
          }
        } else {
          if (hoveredMesh && hoveredMesh.userData.originalMaterial) {
            hoveredMesh.material = hoveredMesh.userData.originalMaterial;
            hoveredMesh = null;
            setIsHoveringMesh(false);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Comprehensive Resource Disposal
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
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

      {/* Engineering HUD Telemetry Badge (Resend × Igloo System) */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '4px',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            borderRadius: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            border: '1px solid var(--border-subtle)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--brand-accent)',
              boxShadow: '0 0 6px rgba(0, 102, 255, 0.5)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-primary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            IGLOO.SYS // ARCHITECTURE v2.6
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10.5px',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            paddingRight: '4px',
          }}
        >
          48 MODULAR NODES ONLINE
        </span>
      </div>

      {/* Active Module Raycast Telemetry Banner (Bottom Left) */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          pointerEvents: 'none',
          zIndex: 2,
          maxWidth: '320px',
        }}
      >
        <div
          style={{
            padding: '10px 14px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            border: `1px solid ${isHoveringMesh ? 'var(--brand-accent)' : 'var(--border-subtle)'}`,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)',
            transition: 'border-color var(--transition-fast)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--brand-accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '2px',
            }}
          >
            <span>{activeModule.id}</span>
            <span>//</span>
            <span>{activeModule.category}</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            {activeModule.name}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10.5px',
              color: 'var(--text-muted)',
              marginTop: '2px',
            }}
          >
            {activeModule.spec}
          </div>
        </div>
      </div>

      {/* Decorative Hairline Framing Corners */}
      <div className="crosshair" style={{ top: '16px', left: '16px' }} />
      <div className="crosshair" style={{ top: '16px', right: '16px' }} />
      <div className="crosshair" style={{ bottom: '16px', left: '16px' }} />
      <div className="crosshair" style={{ bottom: '16px', right: '16px' }} />
    </div>
  );
};
