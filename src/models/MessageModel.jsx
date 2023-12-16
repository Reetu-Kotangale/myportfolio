import React, { useEffect, useRef } from "react";
import modelScene from "../assets/3d/floating_fox.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const MessageModel = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF(modelScene);
  const { actions, names } = useAnimations(animations, modelRef);

  useEffect(() => {
    actions[names[0]].play();
  }, [actions]);

  // Use useRef to hold the rotation angle
  const rotationAngle = useRef(0);

  // Rotate the model in a circular direction in each frame update
  useFrame(() => {
    // Change the rotation angle to update the rotation in each frame
    rotationAngle.current += 0.01; // Adjust the rotation speed here

    // Calculate circular motion (in this case, rotating on Y-axis)
    const x = Math.cos(rotationAngle.current) * 0; // Adjust the radius of the circular motion
    const z = Math.sin(rotationAngle.current) * 0; // Adjust the radius of the circular motion

    // Update the position of the model based on the circular motion
    modelRef.current.position.x = x;
    modelRef.current.position.z = z;

    // Rotate the model (optional: adjust the axis and speed)
    modelRef.current.rotation.y -= 0.006; // Adjust the rotation speed here
  });

  // rotation={[12.6, -0.6, 0]}
  return (
    <mesh
      ref={modelRef}
      position={[0.5, -0.1, 0]}
      rotation={[0, 0.005, 0]}
      scale={[0.55, 0.55, 0.55]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default MessageModel;
