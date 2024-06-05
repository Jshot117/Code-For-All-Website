import { useRef } from "react";
import "./App.css";
import Header from "./HomeComponents/Header";
import Hero from "./HomeComponents/Hero";
import Board from "./HomeComponents/Board";
import Social from "./HomeComponents/Social";
import PastEvent from "./HomeComponents/PastEvent";
import LottieAnimation from "./HomeComponents/LottieAnimation"; // Lottie component
import purpleblender from './assets/background blender purple.png';
import LatestEvent from "./HomeComponents/LatestEvent";

function App() {
  const homeSection = useRef(null);
  const boardSection = useRef(null);
  const aboutSection = useRef(null);
  const eventSection = useRef(null);
  const contactSection = useRef(null);
  const sections = [homeSection, aboutSection, boardSection, eventSection, contactSection];

  return (
    <>
      <div className="">
        <LottieAnimation />
      </div>
      <Header sections={sections} />
      <Hero className="mb-20" ref={{ homeSection, aboutSection }} />
      <div className="relative">
        <div className="absolute inset-x-0 -bottom-20 flex z-10 opacity-40 pointer-events-none">
          <img src={purpleblender} alt="Purple Blender" className="w-screen" />
        </div>
        <Board className="bg-custom-dark-blue" ref={boardSection} />
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 -top-20 flex z-0">
          <img src={purpleblender} alt="Purple Blender" className="w-screen" />
        </div>
        <LatestEvent className="bg-custom-dark-blue" />
        <PastEvent ref={eventSection} />
      </div>
   
      <Social ref={contactSection} />
    </>
  );
}

export default App;
