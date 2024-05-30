// LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/PurpleSpace.json'; // JSon fILE pATH

const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
            <Lottie options={defaultOptions} />
        </div>
    );
};

export default LottieAnimation;