import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as random from "maath/random";
import { Mesh, Points as ThreePoints } from "three";

interface StarsProps {
  count?: number;
  radius?: number;
}

function Stars({ count = 5000, radius = 1.5, ...props }: StarsProps) {
  const ref = useRef<ThreePoints>(null);
  const { mouse } = useThree();
  
  const [sphere] = useMemo(() => {
    const positions = random.inSphere(new Float32Array(count * 3), { radius }) as Float32Array;
    return [positions];
  }, [count, radius]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // React to mouse movement
      ref.current.rotation.x += mouse.x * 0.001;
      ref.current.rotation.y += mouse.y * 0.001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#C8A2D8"  // Lavender color
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingOrb() {
  const ref = useRef<Mesh>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (ref.current) {
      // Subtle parallax only — kept far enough back and small enough that
      // it never overlaps foreground text/content.
      ref.current.position.x = mouse.x * 0.15;
      ref.current.position.y = mouse.y * 0.15;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={ref} position={[0, 0, -2.5]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="#4ECDC4"  // Teal color
          emissive="#4ECDC4"
          emissiveIntensity={0.4}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

// Reduces particle count and disables the effect entirely for users who
// prefer reduced motion, and scales it down on small/touch screens so the
// background doesn't tax battery/performance on phones and tablets.
function usePerformanceProfile() {
  const [profile, setProfile] = useState<{ starCount: number; dpr: [number, number]; enabled: boolean }>({
    starCount: 5000,
    dpr: [1, 2],
    enabled: true,
  });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion) {
      setProfile({ starCount: 0, dpr: [1, 1], enabled: false });
    } else if (isSmallScreen || isCoarsePointer) {
      setProfile({ starCount: 1500, dpr: [1, 1], enabled: true });
    } else {
      setProfile({ starCount: 5000, dpr: [1, 2], enabled: true });
    }
  }, []);

  return profile;
}

export function EnhancedStarsBackground() {
  const { starCount, dpr, enabled } = usePerformanceProfile();

  if (!enabled) {
    return <div className="absolute inset-0 h-full w-full" />;
  }

  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance"
        }}
        dpr={dpr}
      >
        <ambientLight intensity={0.5} />
        <Stars count={starCount} />
        <Stars count={starCount} />
        <FloatingOrb />
      </Canvas>
    </div>
  );
}