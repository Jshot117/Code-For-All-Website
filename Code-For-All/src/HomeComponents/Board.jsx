import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BoardCard from './BoardCard';
import Justin from '../assets/justin.jpg';
import Thomas from '../assets/thomas.jpeg';
import Jonnathan from '../assets/Jonnathan.jpg'
import Romel from '../assets/Romel.jpg'
import Mike from '../assets/mike.jpeg'
import Eric from '../assets/eric_img.jpeg'
import Amart from '../assets/amart.jpg'
import Sophia from '../assets/sophia.png'
import Daniel from '../assets/daniel.jpg'
import Rakib from '../assets/rakib.jpg'
import Yonghao from '../assets/yonghao.png'
import Patryk from '../assets/patryk.jpg'
import Lauren from '../assets/lauren.jpg'
import Feng from '../assets/feng.jpeg'
import Shaine from '../assets/shaine.jpeg'
import Dennis from '../assets/dennis.jpeg'
import Oliver from '../assets/oliver.jpg'
import Athor from '../assets/athor.png'
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
                <BoardCard image={Justin} name="Justin Espinal" role = "President & Founder" description="I love to collect figures!" link="https://www.linkedin.com/in/justinespinal/"/>
                <BoardCard image={Thomas} name="Thomas Soupionis" role = "Vice-President" description="I like buying sneakers" link="https://www.linkedin.com/in/thomas-soupionis/"/>
                <BoardCard image={Eric} name="Eric Salazar" role = "Treasurer" description="I have an orange cat named bibi" link = "https://www.linkedin.com/in/eric-salazar04/"/>
                <BoardCard image={Amart} name="Andrew Martin" role = "Secretary & Advisor" description="I used to study theatre" link = "https://www.linkedin.com/in/andrew-martin72/"/>
                <BoardCard image={Jonnathan} name="Jonnathan Saavedra" role = "Event Manager" description="I love to watch Justin collect figures!" link="https://www.linkedin.com/in/jonnathan-saavedra/"/>
                <BoardCard image={Sophia} name="Sophia Yau" role = "Event Manager & Tutor" description="I love cats" link="https://www.linkedin.com/in/sophiayau/"/>
                <BoardCard image={Mike} name="Ye Htut Maung" role = "Workshop Developer" description="I like Japanese BBQ" link="https://www.linkedin.com/in/ye-htut-maung/"/>
                <BoardCard image={Romel} name="Vishal Romel Charran" role = "Workshop Developer" description="What No Internships Look Like!" link="https://www.linkedin.com/in/vishal-charran-36b1221bb/"/>
                <BoardCard image={Daniel} name="Daniel Jackson" role = "Workshop Developer" description="Like to travel, Gym, skateboard" link="https://www.linkedin.com/in/danieljac/"/>
                <BoardCard image={Rakib} name="Rakib Shahid" role = "Workshop Developer & Tutor" description="I like playing guitar and watching F1" link="https://www.linkedin.com/in/rakib-shahid/"/>
                <BoardCard image={Yonghao} name="Yonghao Lin" role = "Tutor" description="I like cats, crocheting, video games (Minecraft), and the gym" link="https://www.linkedin.com/in/yonghao-lin-b6027b242/"/>
                <BoardCard image={Patryk} name="Patryk Stypulkowski" role = "Tutor" description="I hate front end!" link="https://www.linkedin.com/in/pstypulk/"/>
                <BoardCard image={Feng} name="Fengsheng Chen" role = "Tutor" description="Souls game enjoyer" link="https://www.linkedin.com/in/fengsheng-chen/"/>
                <BoardCard image={Lauren} name="Lauren Mistretta" role = "Advisor" description="I enjoy playing video games and drawing!" link="https://www.linkedin.com/in/lauren-mistretta-9027aa253/"/>
                <BoardCard image={Shaine} name="Shaine Lomenario" role = "Marketing" description="I like to play video games and the piano" link="https://www.linkedin.com/in/shaine-lomenario-955168216/"/>
                <BoardCard image={Dennis} name="Dennis Do" role = "Marketing" description="I love working out, playing sports, and meeting new people" link="https://www.linkedin.com/in/dennis-do-coding/"/>
                <BoardCard image={Athor} name="Andrew Thoral" role = "Marketing" description="Blank for now"/>
                <BoardCard image={Oliver} name="Oliver" role = "Mascot" description="Meow"/>
            </Carousel>
        </div>
        
    )
})

export default Board;