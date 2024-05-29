import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BoardCard from './BoardCard';
import justin from '../assets/justin.jpg';
import thomas from '../assets/thomas.jpeg';
import Jonnathan from '../assets/Jonnathan.jpg'
import Romel from '../assets/Romel.jpg'

function Board(){
    return(
        <div className = "mt-36 text-center">
            <h1 className="hover:scale-105 ease-in-out duration-300 p-0 
                            bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 
                            text-6xl md:text-7xl font-bold mb-4 font-mono">Our Board</h1>
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
                        min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
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
                <BoardCard image={justin} name="Justin Espinal" role = "President & Founder" description="I love to collect figures!"/>
                <BoardCard image={Jonnathan} name="Jonnathan Saavedra" role = "Event Manager" description="I love to watch Justin collect figures!"/>
                <BoardCard image={justin} name="Justin Espinal" role = "President & Founder" description="I love to collect figures!"/>
                <BoardCard image={Romel} name="Vishal Romel Charran" role = "Workshop Developer" description="What No Internships Look Like!"/>
                <BoardCard image={justin} name="Justin Espinal" role = "President & Founder" description="I love to collect figures!"/>
                <BoardCard image={justin} name="Justin Espinal" role = "President & Founder" description="I love to collect figures!"/>
                <BoardCard image={justin} name="Justin Espinal" role = "President & Founder" description="I love to collect figures!"/>

            </Carousel>
        </div>
        
    )
}

export default Board;