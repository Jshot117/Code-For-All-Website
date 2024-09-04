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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import UserLookup from "./components/UserLookup";
import Callback from "./components/Callback";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const homeSection = useRef(null);
  const boardSection = useRef(null);
  const aboutSection = useRef(null);
  const eventSection = useRef(null);
  const contactSection = useRef(null);
  const sections = [homeSection, aboutSection, boardSection, eventSection, contactSection];

  return (
    <Router>
        <Routes>
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route
            path="/userlookup"
            element={<ProtectedRoute component={UserLookup} />}
            />
            <Route path="/callback" element={<Callback />} />
            <Route path="/" element={
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
                          <div className="absolute inset-x-0 -top-20 flex z-10 h-72 opacity-85">
                              <img src={purpleblender} alt="Purple Blender" className="w-screen" />
                          </div>
                          <PastEvent ref={eventSection} />
                          <LatestEvent className="bg-custom-dark-blue" />

                      </div>
                  <Social ref={contactSection} /></>
            } />
        </Routes>
      
    </Router>
  );
}

export default App;
