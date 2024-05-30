import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PastEventCard from "./PastEventCard";
import { PASTEVENTSINFO } from "../PastEventsInfo";

function PastEvent() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 5,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {/* {PASTEVENTSINFO.map((paseveinfo) => (
        <PastEventCard key={paseveinfo.title} {...paseveinfo} />
      ))}*/}

      {PASTEVENTSINFO.map((event, index) => (
        <PastEventCard
          key={index}
          title={event.title}
          description={event.description}
          images={event.image}
        />
      ))}
    </Carousel>
  );
}

export default PastEvent;
