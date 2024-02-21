import { Text } from "@react-three/drei";

export default function Text404() {
  return (
    <group>
      <Text position={[0, 0, -0.1]} fontSize={0.4}>
        404
      </Text>
      <Text position={[0, -0.19, -0.1]} fontSize={0.04}>
        page not found
      </Text>
    </group>
  );
}
