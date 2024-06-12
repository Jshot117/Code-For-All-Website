import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Lottie from "react-lottie";
import Meet_a_scientist_event3 from "../assets/Meet_a_scientist_event3.jpg";
import animationData from "../assets/PurpleSpacev2.json";

function PastEventCard({ title, description, images }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="second-section" className="relative p-0 bg-transparent overflow-hidden">
      <div className="bg-gradient-to-tl from-white to- glow m-4 shadow-xl p-5 rounded-lg max-w-xs">
        <div className="flex flex-col justify-center mb-4 text-left w-full">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className={`text-lg ${isExpanded ? 'max-h-none' : 'max-h-20 overflow-hidden'}`}>
            {description}
          </p>
          <button
            onClick={handleReadMore}
            className=" rounded-lg bg-zinc-900 mt-2 text-purple-600 font-mono no-underline cursor-pointer text-m hover:glow"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <div className="w-full">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={false}
          >
            {images.map((image, idx) => (
              <div key={idx}>
                <img
                  className="w-full h-auto rounded-lg"
                  src={image}
                  alt={`Slide ${idx + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default PastEventCard;
