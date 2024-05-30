import logo from "../assets/logo.png";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="text-purple-500 p-4 rounded-lg font-mono">
            <div className="container mx-auto flex items-center">
                <img src={logo} alt="Code for All logo" className="max-w-20 hover:scale-105 ease-in-out duration-300"></img>
                <button onClick={toggleMenu} className={`z-20 text-purple-500 focus:outline-none md:hidden ml-auto }`}>
                    <FontAwesomeIcon icon={faBars} className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} />
                </button>
                <nav className={`z-10 mx-auto fixed top-0 left-0 w-full h-full bg-gray-800 pl-4 bg-opacity-75 transform ${isOpen ? 'translate-x-60' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:items-center md:bg-transparent md:w-auto md:h-auto md:space-x-4`}>
                    <ul className=" mx-auto md:flex  md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                        <button onClick={toggleMenu} className={`z-20 text-purple-500 focus:outline-none md:hidden ml-auto }`}>
                            <FontAwesomeIcon icon={faXmark} className={` ${isOpen ? 'block' : 'hidden'}`} />
                        </button>

                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">
                            Home
                        </li>
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">
                            About
                        </li>
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">
                            Board
                        </li>
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">
                            Events
                        </li>
                        <li className="p-2 px-4 border border-purple-500 rounded-full hover:scale-105 ease-in-out duration-300 no-underline cursor-pointer text-xl hover:glow">
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );




}
export default Header;