import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/PurpleComputer.json'; // Replace '../assets/PurpleComputer.json' with the path to your animation JSON file
import { forwardRef } from 'react';
const Hero = forwardRef((props, ref) => {
    function handleClick() {
        window.open('https://discord.gg/s8jwd4Es');
    }

    // Lottie options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, // The animation data
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="relative flex items-center" >
            <section className=" mt-0 mb-0  md:container md:mx-auto text-center rounded-lg p-8" style={{ backdropFilter: 'blur(2px)' }}>
                <Lottie options={defaultOptions} height={300} width={300} className="mx-auto mb-0" />
                <h1 className="hover:scale-105 ease-in-out duration-300 p-0 
                            bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 
                            text-6xl md:text-7xl font-bold mb-4 font-mono">
                    Welcome to Code For All
                </h1>
                <p className="text-2xl md:text-xl mb-8 mt-5 text-center font-mono" >
                <span className="text-red-500">Empowering</span>{" "}
                <span className="text-green-500">Coders,</span>{" "}
                <span className="text-blue-500">Building</span>{" "}
                <span className="text-orange-300">Futures</span>
                </p>
                <p className="text-lg md:text-xl mb-8 text-center font-mono opacity-100 " >


                {/* --Text with different colors, I didnt like the look but you can try it - Romel     */}

                {/* <span className="text-blue-500">Join</span>{" "} 
                <span className="text-orange-300">a community dedicated to</span>{" "}
                <span className="text-green-500">inclusive, learning, collaboration, and innovation.</span>{" "} 
                <span className="text-orange-300">Whether you're a seasoned developer</span>{" "} 
                <span className="text-blue-500">or</span>{" "} 
                <span className="text-orange-300">just getting</span>{" "} 
                <span className="text-red-500">started,</span>{" "} 
                <span className="text-orange-300">there's a place for you here.</span>{" "}   */}
                
                <span className="text-purple-500 textglow">The mission of Code for All is to empower students
                 of all backgrounds to excel in their problem-solving and coding classes. We strive to create 
                 a supportive and inclusive learning environment where everyone can deepen their understanding of 
                 code and develop the skills necessary to tackle complex challenges. Together, we will help each other 
                 achieve our full potential as coders and problem-solvers!</span>{" "} 

                                                                   </p>
                <button onClick={handleClick} className="bg-purple-500 p-3 px-8 border border-purple-500 rounded-full text-xl hover:scale-105 ease-in-out duration-300 text-white font-semibold font-mono hover:glow">Get Started</button>
            </section>
        </div>
    );
})

export default Hero;
