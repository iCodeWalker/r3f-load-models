import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export default function Experience() {
  // Loading a model
  const model = useLoader(GLTFLoader, "./hamburger.glb");

  // using DRACOLoader()
  const dracoModel = useLoader(GLTFLoader, "./hamburger.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      {/* adding a model in the scene */}
      {/* <primitive object={model.scene} scale={0.3} /> */}
      {/* adding a draco model in the scene */}

      <primitive object={dracoModel.scene} scale={0.3} />
    </>
  );
}
