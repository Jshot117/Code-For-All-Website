import React from "react";

export default function IncomingEvent({ images, title, description }) {
  return (
    <section id="second-section" className="relative p-20 bg-transparent overflow-hidden">
    <div className="bg-gradient-to-tl from-white to- glow m-4 shadow-xl p-5 rounded-lg w-full max-w-5xl h-screen mb-20">
          <div className="flex flex-col justify-center mb-4 text-left w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">Upcoming Event</h1>
          </div>
          <div className="flex justify-between p-10">
            <img className="w-full max-w-md rounded-lg mr-10" src={images} alt="Latest Event" />
            <p className="text-lg font-mono items-center h-1/2">
              Hello everyone! Are you aiming for a career in Software Engineering or looking to dive into the Research Field or just looking for internships that could kickstart your journey in the tech industry? Don’t miss this unique opportunity to meet Allen Kim, a PhD Meta Research Scientist, on April 17th.
            </p>
          </div>
        </div>
        
      
    </section>
  );
}