import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
    return (
        <div className = "flex-row">
            <div className="flex items-center justify-between p-4 bg-white border-t border-gray-200">
                {/* Logo Section */}
                <div className="flex items-center mr-28">
                    <img src="src/assets/logo.png" alt="Code For All Logo" className="h-8" />
                    <span className="ml-2 text-xl font-bold">CODE FOR ALL</span>
                </div>

                <div className="flex space-x-4 mr-auto">
                    <a href="https://www.linkedin.com/company/code-for-all-qc/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-gray-600 hover:text-blue-600" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="lg" className="text-gray-600 hover:text-pink-600" />
                    </a>
                </div>
            </div>
            <div className="flex items-center p-4">
                <h1 className = "font-bold text-xl" >Contact Us:</h1>
                <p className = "pl-2">emailcodeforall@gmail.com</p>
            </div>
        </div>
    );
};

export default Social;