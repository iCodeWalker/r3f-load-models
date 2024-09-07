import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const Model = () => {
  // ############ Lazy Loading : Loading Bigger size models ###############
  const model = useLoader(
    GLTFLoader,
    "./FlightHelmet/glTF/FlightHelmet.gltf",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  return <primitive object={model.scene} scale={6} position-y={-1} />;
};

export default Model;
