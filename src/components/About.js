import React from 'react';
import { Element } from 'react-scroll';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
    return (
        <Element name="about" className="section bg-gray-800 text-white py-16 px-4 md:px-10 lg:px-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                    <img src={require('../images/man.jpg')} alt="Man" className="w-3/4 md:w-2/3 rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <div className="flex items-center mb-4 text-gray-300">
                        <FaQuoteLeft className="text-2xl mr-2" />
                        <p className="text-lg">"I'll be back" - Arnold Schwarzenegger</p>
                    </div>
                    <p className="text-lg mb-8">
                        At GymForge, we are dedicated to empowering individuals on their fitness journey. We believe that everyone has the potential to achieve their health and wellness goals, and we're here to provide the support and resources needed to make that happen.    
                    </p>
                    <p className="text-lg mb-8">
                        Our mission is to inspire, educate, and motivate our community to live a healthier lifestyle. Whether you're just starting out or you're a seasoned fitness enthusiast, GymForge offers a wide range of resources, from expertly curated workout plans to nutritional guidance, to help you reach your full potential.
                    </p>
                    <p className="text-lg">
                        Join us today and start your journey to a healthier, stronger you!
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default About;
