import { Float, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/media/shards.glb");
  return (
    <group scale={viewport.width}>
      {nodes.Scene.children.map((mesh, index) => {
        return <Mesh data={mesh} key={index} />;
      })}
    </group>
  );
}

function Mesh({ data }: any) {
  const options = {
    thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.75, min: 0, max: 1 },
    resolution: { value: 300 },
  };
  const levaControls = useControls("MeshTransmissionMaterial", options);
  return (
    <Float>
      <mesh {...data}>
        {/* <meshBasicMaterial /> */}
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          {...levaControls}
        />
      </mesh>
    </Float>
  );
}
