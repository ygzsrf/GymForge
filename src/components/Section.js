import React from 'react';
import { Link } from 'react-scroll';
import icon from '../images/logo.png';

const Section = () => {
    return (
        <div className="bg-gray-800 text-white py-8 lg:py-12">
            <div className="flex justify-center items-center mb-4 lg:mb-8">
                {/* Animated logo */}
                <div className="rounded-full p-2 animate-bounce">
                    <img src={icon} alt="Logo" className="w-24 lg:w-32" />
                </div>
            </div>
            <div className="flex justify-center">
                <nav className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    {/* Animated navigation links */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-white cursor-pointer lg:mb-0 transform hover:scale-110 transition-transform"
                    >
                        Home
                    </Link>
                    <Link
                        to="exercise"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-white cursor-pointer lg:mb-0 transform hover:scale-110 transition-transform"
                    >
                        Exercises
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-white cursor-pointer lg:mb-0 transform hover:scale-110 transition-transform"
                    >
                        About
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-white cursor-pointer lg:mb-0 transform hover:scale-110 transition-transform"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Section;
