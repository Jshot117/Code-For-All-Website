import { useRef } from "react";
import "./App.css";
import Header from "./HomeComponents/Header";
import Hero from "./HomeComponents/Hero";
import Board from "./HomeComponents/Board";
import Social from "./HomeComponents/Social";
import PastEvent from "./HomeComponents/PastEvent";
import LottieAnimation from "./HomeComponents/LottieAnimation"; // Lottie component


function App() {
  const homeSection = useRef(null)
  const boardSection = useRef(null)
  const aboutSection = useRef(null)
  const eventSection = useRef(null)
  const contactSection = useRef(null)
  const sections = [homeSection, aboutSection, boardSection, eventSection, contactSection]
  return (
    <>
      <div className="">
        <LottieAnimation />
      </div>
      <Header sections = {sections} />
      <Hero className="mb-20" ref={{homeSection, aboutSection}}/>
      <Board className="" ref={boardSection} />
      <PastEvent ref={eventSection}/>
      <Social ref={contactSection} />
    </>
  );
}

export default App;
