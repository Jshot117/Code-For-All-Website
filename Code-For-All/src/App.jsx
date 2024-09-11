import { useRef } from "react";
import "./App.css";
import Header from "./HomeComponents/Header";
import Hero from "./HomeComponents/Hero";
import Board from "./HomeComponents/Board";
import Social from "./HomeComponents/Social";
import PastEvent from "./HomeComponents/PastEvent";
import LottieAnimation from "./HomeComponents/LottieAnimation";
import purpleblender from './assets/background blender purple.png';

function App() {
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const boardRef = useRef(null);
  // const eventRef = useRef(null);
  // const contactRef = useRef(null);

  // const sections = {
  //   home: homeRef,
  //   about: aboutRef,
  //   board: boardRef,
  //   event: eventRef,
  //   contact: contactRef
  // };

  return (
    <>
      <div className="">
        <LottieAnimation />
      </div>
      <div id="home">
        <Header />
      </div>
      <Hero className="mb-20" />
      <div id="about">
        {/* About section content */}
      </div>
      <div id="board" className="relative">
        <div className="absolute inset-x-0 -bottom-20 flex z-10 opacity-40 pointer-events-none">
          <img src={purpleblender} alt="Purple Blender" className="w-screen" />
        </div>
        <Board className="bg-custom-dark-blue" />
      </div>
      <div id="event" className="relative">
        <div className="absolute inset-x-0 -top-20 flex z-10 h-72 opacity-85">
          <img src={purpleblender} alt="Purple Blender" className="w-screen" />
        </div>
        <PastEvent />
      </div>
      <div id="contact">
        <Social />
      </div>
    </>
  );
}

export default App;