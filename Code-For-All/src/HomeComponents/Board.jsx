import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BoardCard from './BoardCard';
import {BOARDINFO} from '../BoardInfo'
import { forwardRef, useEffect, useState } from 'react';

const Board = forwardRef((props, ref) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return(

        <div className = "mt-36 text-center" ref={ref}>
            <h1 className="p-0 
                            bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 
                            text-6xl md:text-7xl font-bold mb-4 font-mono">Our Board</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={!isMobile}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="flex justify-center"
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
                            min: 1500
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    smallDesktop: {
                        breakpoint: {
                            max: 1500,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 480,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                    largeMobile: {
                        breakpoint: {
                            max: 768,
                            min: 480
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 768
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
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
                {BOARDINFO.map((member) => (
                    <BoardCard image = {member.image} name = {member.name} role = {member.role} description={member.description} link = {member.link}/>
                ))}
            </Carousel>
        </div>
        
    )
})

export default Board;