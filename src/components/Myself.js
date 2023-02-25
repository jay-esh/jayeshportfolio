import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Points, Text3D } from "@react-three/drei";

const Rotate = () => {
  const myMesh = useRef();

  useFrame(({ clock, camera }) => {
    const a = clock.getElapsedTime();
    if (myMesh) {
      myMesh.current.rotation.x = a * 0.2;
    }
  });

  return (
    <mesh ref={myMesh}>
      <dodecahedronBufferGeometry args={[100, 2]} />
      <meshLambertMaterial color="purple" wireframe />
    </mesh>
  );
};

const Myself = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Canvas legacy={true} camera={{ fov: 75, position: [150, 50, 100] }}>
        <ambientLight intensity={0.5} />
        <Center rotation={[-0.5, 0.7, 0.4]}>
          <Text3D
            curveSegments={32}
            bevelEnabled
            bevelSize={0.4}
            bevelThickness={1}
            height={5}
            lineHeight={0.5}
            letterSpacing={0.6}
            size={10}
            font="/Inter_Bold.json"
          >
            Hello World!
            <meshNormalMaterial />
          </Text3D>
        </Center>
        <Rotate />

        <Points
          limit={1000} // Optional: max amount of items (for calculating buffer size)
          range={1000} // Optional: draw-range
        >
          <pointsMaterial vertexColors />
        </Points>
        <directionalLight color="white" position={[5, 0, 5]} />
        <directionalLight color="white" position={[5, 5, 5]} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <directionalLight color="white" position={[0, 5, 0]} />
        {/* <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
  /> */}
      </Canvas>
    </div>
  );
};

export default Myself;
