// ########## Suspence component for lazy loading
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

import Model from "./Model";
import Placeholder from "./Placeholder";
import Hamburger from "./Hamburger";
import Fox from "./Fox";

export default function Experience() {
  // ######### Loading a model
  const model = useLoader(GLTFLoader, "./hamburger.glb");

  // ########### Using DRACOLoader() #############
  //   const dracoModel = useLoader(GLTFLoader, "./hamburger-draco.glb", (loader) => {
  //     const dracoLoader = new DRACOLoader();
  //     dracoLoader.setDecoderPath("./draco/");
  //     loader.setDRACOLoader(dracoLoader);
  //   });

  //   // ############ Lazy Loading : Loading Bigger size models ###############
  //   const model = useLoader(
  //     GLTFLoader,
  //     "./FlightHelmet/glTF/FlightHelmet.gltf",
  //     (loader) => {
  //       const dracoLoader = new DRACOLoader();
  //       dracoLoader.setDecoderPath("./draco/");
  //       loader.setDRACOLoader(dracoLoader);
  //     }
  //   );

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04} // For removing the shadow acne, we are off setting the shadow.
      />
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
      {/* <primitive object={model.scene} scale={0.4} position-y={-1} /> */}
      {/* adding a draco model in the scene */}

      {/* <primitive object={dracoModel.scene} scale={0.3} /> */}

      {/* Lazy loading using Suspence component for bigger models */}
      <Suspense
        // fallback={
        //   <mesh position-y={0.6} scale={[2, 3, 2]}>
        //     <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
        //     <meshBasicMaterial wireframe color="red" />
        //   </mesh>
        // }
        fallback={<Placeholder position-y={0.6} scale={[2, 3, 2]} />}
      >
        {/* <Model /> */}
        <Hamburger scale={0.36} />
      </Suspense>

      <Fox />
    </>
  );
}
