"use client";
import { Canvas } from "@react-three/fiber";
import Text404 from "./Text404";
import { Environment, OrbitControls } from "@react-three/drei";
import { GlassShards } from "./GlassShards";

export default function Scene() {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1500 }}>
      {/* <OrbitControls /> */}
      <directionalLight intensity={3} position={[0, 0.1, 1]} />
      <GlassShards />
      <Text404 />
      <Environment preset="city" />
    </Canvas>
  );
}
