import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

const Fox = () => {
  const foxModel = useGLTF("./Fox/glTF/Fox.gltf");

  const animations = useAnimations(foxModel.animations, foxModel.scene);
  console.log(animations);

  // Controlling animations from leva
  const { animationName } = useControls({
    animationName: {
      options: animations.names,
    },
  });

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

  return (
    <primitive
      object={foxModel.scene}
      scale={0.02}
      position={[-3, 0, 3]}
      rotation-y={0.3}
    />
  );
};

export default Fox;
