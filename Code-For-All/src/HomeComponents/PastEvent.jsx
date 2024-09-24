import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PastEventCard from "./PastEventCard";
import { PASTEVENTSINFO } from "../PastEventsInfo";
import Lottie from "react-lottie";
import Meet_a_scientist_event3 from "../assets/Meet_a_scientist_event3.jpg";
import animationData from "../assets/PurpleSpacev2.json";
import React, { forwardRef } from "react";
import { INCOMINGEVENTSINFO } from "../IncomingEventsInfo";
import IncomingEvent from "./IncomingEvent";

const PastEvent = forwardRef((props, ref) => {
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
      className="relative md:p-20 bg-transparent overflow-hidden" 
      
    >
      <div className="absolute inset-0 z-0 pointer-events-none   bg-transparent overflow-hidden" >
        {" "}
        {/* Add pointer-events-none class */}
        <Lottie options={defaultOptions} />
      </div>

      <div className="relative z-10 flex-col"  >
        <div className="flex flex-wrap justify-center">{PASTEVENTSINFO.map((event, index) => (
          <PastEventCard
            key={index}
            title={event.title}
            description={event.description}
            images={event.image}

          />
        ))}
        </div>

        <div className="flex flex-wrap justify-center " ref={ref}>
          <IncomingEvent
            title={INCOMINGEVENTSINFO[0].title}
            description={INCOMINGEVENTSINFO[0].description}
            images={INCOMINGEVENTSINFO[0].image}
          ></IncomingEvent>
        </div>
      </div>
    </section>
  );
})

export default PastEvent;