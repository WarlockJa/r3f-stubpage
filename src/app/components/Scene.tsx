"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import Text404 from "./Text404";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 800 }}>
      {/* <OrbitControls /> */}
      <directionalLight intensity={3} position={[0, 0.1, 1]} />
      <Model />
      <Text404 />
      <Environment preset="city" />
    </Canvas>
  );
}
