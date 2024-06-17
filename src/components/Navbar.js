import React, { useState } from 'react';
import { Link } from 'react-scroll';
import icon from '../images/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img className="h-12 w-12" src={icon} alt="Logo" />
                    </div>
                    <div className="hidden md:block">
                        {/* Links for desktop view */}
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="exercise"
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Exercises
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={toggleMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`hidden h-6 w-6 ${isMenuOpen ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu content */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out transform origin-top relative w-full bg-gray-900`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {/* Links for mobile view */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="exercise"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                        onClick={toggleMenu}
                    >
                        Exercises
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
