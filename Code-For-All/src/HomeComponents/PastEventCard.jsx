import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PastEventCard({ title, description, images }) {
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
    <div>
      <div
        className="bg-gradient-to-r from-white to-purple-200 mt-20 mb-10 ml-20 shadow-xl p-5 rounded-lg max-w-4xl"
        style={{ height: "30vw", width: "30vw" }}
      >
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col justify-center items-stretch md:mr-10 mb-4 md:mb-0 w-full md:w-1/2 h-auto">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
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
      </div>
    </div>
  );
}
export default PastEventCard;
