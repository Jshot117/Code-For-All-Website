import React from "react";
import Lottie from "react-lottie";
import Meet_a_scientist_event3 from "../assets/Meet_a_scientist_event3.jpg";
import Upcoming_event1 from "../assets/CurrentEvent.jpeg";
import animationData from "../assets/PurpleSpacev2.json";

function LatestEvent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section id="second-section" className="flex pt-20 pb-20 bg-transparent overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Add pointer-events-none class */}
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>
      <div className="relative z-10 flex flex-wrap justify-center">
        <div className="bg-gradient-to-tl from-white to- glow m-4 shadow-xl p-5 rounded-lg max-w-xs">
          <div className="flex flex-col justify-center mb-4 text-left w-full">
            <h1 className="text-2xl font-bold mb-4">Latest Past Event</h1>
            <p className="text-lg">Description of the event can go here.</p>
          </div>
          <div className="w-full">
            <img className="w-full h-auto rounded-lg" src={Meet_a_scientist_event3} alt="Latest Event" />
          </div>
        </div>

        <div className="bg-gradient-to-tl from-white to- glow m-4 shadow-xl p-5 rounded-lg max-w-xs">
          <div className="flex flex-col justify-center mb-4 text-left w-full">
            <h1 className="text-2xl font-bold mb-4">Latest Past Event2</h1>
            <p className="text-lg">Description of the event can go here.</p>
          </div>
          <div className="w-full">
            <img className="w-full h-auto rounded-lg" src={Meet_a_scientist_event3} alt="Latest Event" />
          </div>
        </div>

        <div className="bg-gradient-to-tl from-white to glow m-4 shadow-xl p-5 rounded-lg max-w-xs">
          <div className="flex flex-col justify-center mb-4 text-left w-full">
            <h1 className="text-2xl font-bold mb-4">Latest Past Event2</h1>
            <p className="text-lg">Description of the event can go here.</p>
          </div>
          <div className="w-full">
            <img className="w-full h-auto rounded-lg" src={Meet_a_scientist_event3} alt="Latest Event" />
          </div>
        </div>

        <div className="bg-gradient-to-tl from-white to- glow m-4 shadow-xl p-5 rounded-lg w-full max-w-5xl mb-20">
          <div className="flex flex-col justify-center mb-4 text-left w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">Upcoming Event</h1>
          </div>
          <div className="flex justify-between p-10">
            <img className="object-contain rounded-lg" src={Upcoming_event1} alt="Latest Event" />
            <p className="text-lg font-mono items-center h-1/2">
              Hello everyone! Are you aiming for a career in Software Engineering or looking to dive into the Research Field or just looking for internships that could kickstart your journey in the tech industry? Don’t miss this unique opportunity to meet Allen Kim, a PhD Meta Research Scientist, on April 17th.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestEvent;
