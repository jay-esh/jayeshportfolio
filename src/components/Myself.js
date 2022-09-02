import React, { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import {
  Extrude,
  OrbitControls,
  Center,
  Scroll,
  useScroll,
  useAnimations,
  Points,
  Point,
  Text,
  Text3D,
} from "@react-three/drei";
import { Environment, ScrollControls } from "@react-three/drei";

const Rotate = () => {
  const myMesh = useRef();
  const data = useScroll();

  useFrame(({ clock, camera }) => {
    const a = clock.getElapsedTime();
    if (myMesh) {
      myMesh.current.rotation.x = a * 0.2;
      //   const offset = 1 - data.offset;
      //   state.camera.position.set(
      //     Math.sin(offset) * -10,
      //     Math.atan(offset * Math.PI * 2) * 5,
      //     Math.cos((offset * Math.PI) / 3) * -10
      //   );
      //   state.camera.lookAt(0, 0, 0);
      //   myMesh.position.z += a;
    }
    // if (data) {
    //   camera.position.x += a;
    // }
  });

  return (
    <mesh ref={myMesh}>
      <dodecahedronBufferGeometry args={[100, 2]} />
      <meshLambertMaterial color="purple" wireframe />
    </mesh>
  );
};

const points = (num) => {};

const Myself = () => {
  //   const gltf = useLoader(GLTFLoader, "rocket.gltf");
  //   console.log(gltf);
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
