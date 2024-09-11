import React from "react";

export default function IncomingEvent({ images, title, description }) {
  return (
    <section id="second-section" className="flex md:p-20 bg-transparent">
      <div className="bg-gradient-to-tl from-white to- glow m-4 shadow-xl p-5 rounded-lg max-w-5xl mb-20">
        <div className="flex flex-col justify-center mb-4 text-left">
          <h1 className="text-2xl font-bold mb-4 text-center">Upcoming Event</h1>
        </div>
        <div className="md:flex justify-between space-y-3 md:p-5">
          <img className="object-contain md:max-w-md rounded-lg md:mr-10 md:w-5/12" src={images} alt="Latest Event" />
          <p className="text-lg font-mono items-center md:w-7/12">
            Hello everyone! Are you aiming for a career in Software Engineering or looking to dive into the Research Field or just looking for internships that could kickstart your journey in the tech industry? Don’t miss this unique opportunity to meet Allen Kim, a PhD Meta Research Scientist, on April 17th.
          </p>
        </div>
      </div>


    </section>
  );
}