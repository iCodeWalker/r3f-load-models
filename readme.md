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

    <Suspence fallback={}>

    In fallback we can put something that user will see while it's loading.

## GLTf loading with drei

    Drei has multiple loader like useGLTf and usefBX.

## Preloading

    Our models will start loading only when the component is instantiated or is being called to rendered.

    But if we had a conditional redering to display the component, and when the condition becomes true the user will first see the loader and than the model will get redered when the loading gets completed.

    By user perspective we need to load the model as soon as possible to avoid laoding delays.

    We can use the preload method on useGLTF.

## Multiple instances

    If we want ot have multiple models in the scene. We can use the Clone helper that Drei provides.

## GLTf to component

    If we want to manipulate or change the properties of different parts of the burger, we need to traverse the loaded model, search the right child, save it in some way, and apply whatever we need to do the changes to render properly.

    It would be very convinent if we have burger as component, with everything inside a simple JSX that we can manipulate easily.

    The GLTf -> React Three fiber does the same.
    https://gltf.pmnd.rs/

## Fixing Shadows

    The shadow seems to be a bit bluring and have strips on the surface due to a phenomena called shadow acne,
    it happens due to models casting shadows on itself.

    As the meshes are casting and receiving shadows, and the models have round shape. Due to this models casting shadows on itself.

    We can fix this using "shadow-normalBias"

## Animation

    We are going to create a Fox component, load any model from the public folder with useGLTf and add it to the scene.

    We have a drei helper for the animations called "useAnimations".

    We have animations inside the model in the array named "animations"

    useAnimations requires 2 arguments, one animations array and other is the scene of the model.

    accessing the animations after the first render so we use useEffect hook when we have to access the animations.

    Note : useAnimations helper and react three fiber will take care of updating the animation on each frame.

## Animation controls

    useEffect(() => {
    // const action = animations.actions.Run;

    // For using animations from the leva
    const action = animations.actions[animationName];
    // We need to play the animation the user choose from the leva so add the animationName in the dependency array
    console.log(action);
    // We need to remove or fade away the previous actions as if don't do this react three fiber will play all the
    // animations together and will give us an unwanted animation.

    // We are going to fade it in by adding fadeIn before the play.
    // add reset() to start the animation from starting
    action.reset().fadeIn(0.6).play();
    // action.play(); // To play the animation

    // We also need to dispose the previous action.

    return () => {
      action.fadeOut(0.6);
    };

    // ###################################################################################

    // If we want the fox to start walking after a few seconds we can use various methods available in
    // AnimationAction like crossfadeform which is going to fadeOut the Run and fadeIn the Walk.

    // setTimeout(() => {
    //   animations.actions.Walk.play();
    //   animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1);
    // }, 2000);

}, [animationName]);
