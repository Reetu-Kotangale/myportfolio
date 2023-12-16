import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
// import MilkDelivery from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import LogCabin from "../models/LogCabin";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // const adjustIslandForScreenSize = () => {
  //   let screenScale = null;
  //   // [0, -6.5, -43]
  //   // let rotation = [0.1, 4.7, 0];
  //   //                    left    down  zoom
  //   let screenPosition = [-0.05, -0.01, 4.8];
  //   //            RDown
  //   let rotation = [-0.2, -1.7, -0.2];

  //   if (window.innerWidth < 768) {
  //     screenScale = [0.9, 0.9, 0.9];
  //   } else {
  //     screenScale = [1, 1, 1];
  //   }

  //   return [screenScale, screenPosition, rotation];
  // };

  const adjustCabinForScreenSize = () => {
    let screenScale = null;
    // [0, -6.5, -43]
    // let rotation = [0.1, 4.7, 0];
    //                    left down zoom
    let screenPosition = [0, -1.1, 0];
    //            RDown
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.0015, 0.0015, 0.0015];
    } else {
      screenScale = [0.0028, 0.0028, 0.0028];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      // screenScale = [1.5, 1.5, 1.5];
      // screenPosition = [0, -1.5, 0];
      screenScale = [0.2, 0.2, 0.2];
      screenPosition = [0, 0.15, 4];
    } else {
      screenScale = [1.0, 1.0, 1.0];
      screenPosition = [3, 2, 0];
    }

    return [screenScale, screenPosition];
  };

  const [cabinScale, cabinPosition, cabinRotation] = adjustCabinForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent
        ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 10]} intensity={4.5} />
          <ambientLight intensity={2.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          {/* <MilkDelivery
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}
          <LogCabin
            position={cabinPosition}
            scale={cabinScale}
            rotation={cabinRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, -1, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
