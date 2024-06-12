import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PastEventCard from "./PastEventCard";
import { PASTEVENTSINFO } from "../PastEventsInfo";
import Lottie from "react-lottie";
import Meet_a_scientist_event3 from "../assets/Meet_a_scientist_event3.jpg";
import animationData from "../assets/PurpleSpacev2.json";
import React from "react";
import { INCOMINGEVENTSINFO } from "../IncomingEventsInfo";
import IncomingEvent from "./IncomingEvent";
function PastEvent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      id="second-section"
      className="relative p-20 bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none   bg-transparent overflow-hidden">
        {" "}
        {/* Add pointer-events-none class */}
        <Lottie options={defaultOptions}  />
      </div>
    
      <div className="relative z-10 flex flex-wrap justify-center">
        {PASTEVENTSINFO.map((event, index) => (
          <PastEventCard
            key={index}
            title={event.title}
            description={event.description}
            images={event.image}
          />
        ))}
     

      
        <IncomingEvent
          title={INCOMINGEVENTSINFO[0].title}
          description={INCOMINGEVENTSINFO[0].description}
          images={INCOMINGEVENTSINFO[0].image}
        ></IncomingEvent>
       </div>
    </section>
  );
}

export default PastEvent;