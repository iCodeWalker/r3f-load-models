import { useGLTF, Clone } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const Model = () => {
  // ############ Lazy Loading : Loading Bigger size models ###############
  //   const model = useLoader(
  //     GLTFLoader,
  //     "./FlightHelmet/glTF/FlightHelmet.gltf",
  //     (loader) => {
  //       const dracoLoader = new DRACOLoader();
  //       dracoLoader.setDecoderPath("./draco/");
  //       loader.setDRACOLoader(dracoLoader);
  //     }
  //   );

  // ############ Loading model using gltf loader of drei ###############
  const model = useGLTF("./hamburger.glb");

  return (
    // ################## for multiple instances of the models ###########
    // Just replace primitive component with clone component
    // <primitive object={model.scene} scale={6} position-y={-1} />
    <>
      <Clone object={model.scene} scale={0.3} position-y={-1} position-x={-4} />
      <Clone object={model.scene} scale={0.3} position-y={-1} position-x={0} />
      <Clone object={model.scene} scale={0.3} position-y={-1} position-x={4} />
    </>
  );
};

export default Model;

useGLTF.preload("./hamburger.glb");
