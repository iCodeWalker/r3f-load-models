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

## Lazy Loading

    Initially the r3f is holding the rendering of the Experience.js file as long as everything isn't ready in our scene, this also includes the loading of the external models.
    So if we have a large model that takes a bit time to load than in that user will see a white screen for the time being the model is being loaded.

    To implement lazy loading in r3f we use "Suspence".
    <Suspence> is a React component that will wait for the process to be done before rednering the component.

    To implement this we have to create a different component and shift the model loading part inside this new component, so that the suspence component will wait for the component to laod and after loading is comlete it will render the componet inside the Experience. The other meshes, and lights will be loaded before hand.

    One feature about using Suspence is "fallback", fallback is what the user will see if the component is not ready or when it is not loaded completely. It's a type of placeholder.

    <Supence fallback={}>

    In fallback we can put something that user will see while it's loading.
