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


function Board(){
    return(
        <div className = "mt-36 text-center">
            <h1 className="p-0 
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
                <BoardCard image={Justin} name="Justin Espinal" role = "President & Founder" description="I love to collect figures!"/>
                <BoardCard image={Thomas} name="Thomas Soupionis" role = "Vice-President" description="I like buying sneakers"/>
                <BoardCard image={Eric} name="Eric Salazar" role = "Treasurer" description="I have an orange cat named bibi"/>
                <BoardCard image={Amart} name="Andrew Martin" role = "Secretary & Advisor" description="I used to study theatre"/>
                <BoardCard image={Jonnathan} name="Jonnathan Saavedra" role = "Event Manager" description="I love to watch Justin collect figures!"/>
                <BoardCard image={Sophia} name="Sophia Yau" role = "Event Manager & Tutor" description="Blank for now"/>
                <BoardCard image={Mike} name="Ye Htut Maung" role = "Workshop Developer" description="I like Japanese BBQ"/>
                <BoardCard image={Romel} name="Vishal Romel Charran" role = "Workshop Developer" description="What No Internships Look Like!"/>
                <BoardCard image={Daniel} name="Daniel Jackson" role = "Workshop Developer" description="Like to travel, Gym, skateboard"/>
                <BoardCard image={Rakib} name="Rakib Shahid" role = "Workshop Developer & Tutor" description="I like playing guitar and watching F1"/>
                <BoardCard image={Yonghao} name="Yonghao Lin" role = "Tutor" description="I like cats, crocheting, video games (Minecraft), and the gym"/>
                <BoardCard image={Patryk} name="Patryk Stypulkowski" role = "Tutor" description="I hate front end!"/>
                <BoardCard image={Feng} name="Fengsheng Chen" role = "Tutor" description="Souls game enjoyer"/>
                <BoardCard image={Lauren} name="Lauren Mistretta" role = "Advisor" description="I enjoy playing video games and drawing!"/>
                <BoardCard image={Shaine} name="Shaine Lomenario" role = "Marketing" description="I like to play video games and the piano"/>
                <BoardCard image={Dennis} name="Dennis Do" role = "Marketing" description="I love working out, playing sports, and meeting new people"/>
                <BoardCard image={Athor} name="Andrew Thoral" role = "Marketing" description="Blank for now"/>
                <BoardCard image={Oliver} name="Oliver" role = "Mascot" description="Meow"/>
            </Carousel>
        </div>
        
    )
}

export default Board;