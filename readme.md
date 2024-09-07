## Load Models

    We have multiple of models available in the /publiv folder.

    We have two versions of the models. One is .glb and other one is draco.glb (a compressed one).

    r3f provides a hook named useLoader that abstract loading.
    import { useLoader } from "@react-three/fiber";

    We need to provide what type of loader should this useLoader hook use.
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

    const model = useLoader(GLTFLoader, "./hamburger.glb");

    Now, we need to add the model to the scene. To do this we have to use a <primitive />

    Primitive, is a type of holder for whatever we want to put in. It's not a real object, but it's a type of container supported by the R3f that will handle and display whatever we put in it's object attribute.
      <primitive object={model.scene} />

      Note : we can reduce the size and other parameter using the attributes.

    To use draco models we need to use, DRACOLoader() class, and add it to GLTfLoader instance with setDRACOLoader().
    To do this we need to pass 3rd argument to the useLoader() and send it a function that will give us access to the loader instance.
