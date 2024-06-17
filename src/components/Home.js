import React from 'react';
import { Element, scroller } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
    const scrollToContact = () => {
        scroller.scrollTo('contact', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <Element name="home" className="section">
            <div className="flex items-center justify-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${require('../images/gym.jpg')})`, backdropFilter: 'blur(8px)', paddingTop: '10%', paddingBottom: '10%', paddingLeft: '5%', paddingRight: '5%'}}>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Animation state when component mounts
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }} // Transition animation properties
                    className="text-white text-center z-10"
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} // Initial animation state
                        animate={{ opacity: 1, y: 0 }} // Animation state when component mounts
                        transition={{ delay: 0.7, duration: 0.8, type: 'spring', stiffness: 120, damping: 10 }} // Transition animation properties
                        className="text-4xl md:text-6xl lg:text-7xl font-bold"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            Welcome
                        </motion.span>
                        {' '}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            to
                        </motion.span>
                        {' '}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            GymForge
                        </motion.span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} // Initial animation state
                        animate={{ opacity: 1, y: 0 }} // Animation state when component mounts
                        transition={{ delay: 1, duration: 0.8, type: 'spring', stiffness: 120, damping: 10 }} // Transition animation properties
                        className="text-lg md:text-xl lg:text-2xl mb-8"
                    >
                        Get fit and stay healthy with us!
                    </motion.p>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} // Animation when hovering over the button
                        whileTap={{ scale: 0.95 }} // Animation when clicking the button
                        transition={{ duration: 0.2 }} // Transition animation properties
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={scrollToContact} // Scroll to Contact section when clicked
                    >
                        Contact Us!
                    </motion.button>
                </motion.div>
            </div>
        </Element>
    );
};

export default Home;
