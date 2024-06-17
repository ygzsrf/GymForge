import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import exercisesData from '../data.json';
import { Element } from 'react-scroll';

// Dynamically import all images in the images directory
const gifImages = require.context('../images/exercises', false, /\.gif$/); // GIF images for modal
const pngImages = require.context('../images/exercises', false, /\.png$/); // PNG images for cards

const Exercise = () => {
    const exercises = exercisesData.exercises; // Access the "exercises" array

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState({});
    const [filters, setFilters] = useState({
        weight: '',
        type: '',
        muscle: '',
    });

    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const pageSize = 12;
    const totalPages = Math.ceil(exercises.length / pageSize);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const filteredExercises = exercises.filter((exercise) => {
        return (
            (filters.weight === '' || exercise.weight === filters.weight) &&
            (filters.type === '' || exercise.type === filters.type) &&
            (filters.muscle === '' || exercise.muscle.includes(filters.muscle))
        );
    });

    return (
        <Element name="exercise"> {/* Wrap content in Element */}
            <div className="bg-gray-900 text-white p-4" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <h1 className="text-5xl font-bold text-center mb-4 font-sans" style={{ paddingBottom: '10px' }}>Exercises</h1>
                <div className="flex justify-center mb-4">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4" style={{ paddingBottom: '10px' }}>
                        <select
                            name="weight"
                            value={filters.weight}
                            onChange={handleFilterChange}
                            className="bg-gray-800 text-white p-2 rounded-md"
                        >
                            <option value="">All Weights</option>
                            <option value="barbell">Barbell</option>
                            <option value="dumbbell">Dumbbell</option>
                            <option value="bodyweight">Bodyweight</option>
                            <option value="machine">Machine</option>
                            <option value="cable">Cable</option>
                        </select>
                        <select
                            name="type"
                            value={filters.type}
                            onChange={handleFilterChange}
                            className="bg-gray-800 text-white p-2 rounded-md"
                        >
                            <option value="">All Types</option>
                            <option value="compound">Compound</option>
                            <option value="isolated">Isolated</option>
                        </select>
                        <select
                            name="muscle"
                            value={filters.muscle}
                            onChange={handleFilterChange}
                            className="bg-gray-800 text-white p-2 rounded-md"
                        >
                            <option value="">All Muscles</option>
                            {Array.from(new Set(exercises.flatMap((exercise) => exercise.muscle))).map((muscle) => (
                                <option key={muscle} value={muscle}>
                                    {muscle}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <SwipeableViews index={currentPage} onChangeIndex={handlePageChange} enableMouseEvents>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredExercises
                                .slice(index * pageSize, (index + 1) * pageSize)
                                .map((exercise, exerciseIndex) => {
                                    const  imagePath = pngImages(`./item_${exercise.name.toLowerCase().replace(/\s+/g, '_')}.png`);
                                    return (
                                        <div
                                            key={exerciseIndex}
                                            className="bg-gray-800 p-4 rounded-md cursor-pointer hover:bg-gray-700 relative bg-cover bg-center"
                                            style={{ backgroundImage: `url(${imagePath})` }}
                                            onClick={() => handleExerciseClick(exercise)}
                                            onDragStart={(e) => e.preventDefault()} // Disable text selection on drag start
                                            onContextMenu={(e) => e.preventDefault()} // Disable text selection on right click
                                            onMouseDown={(e) => e.preventDefault()} // Disable text selection on mouse down
                                            onTouchStart={(e) => e.preventDefault()} // Disable text selection on touch start
                                        >

                                            <div className="relative bg-opacity-40 p-2 rounded-md w-1/2">
                                                <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-transparent transform skew-x-[-31.5deg] w-10/12"></div>
                                                    <div className="relative">
                                                        <h2 className="text-2xl font-bold mb-2 text-shadow">{exercise.name}</h2>
                                                        <p className="text-gray-300 text-shadow capitalize">{exercise.weight}</p>
                                                    </div>
                                            </div>

                                        </div>
                                    );
                                })}
                        </div>
                    ))}
                </SwipeableViews>

                {/* Modal */}
                {modalOpen && (
                    <div
                        className="fixed inset-0 flex justify-center items-center z-50 w-full h-full overflow-y-auto bg-black bg-opacity-35"
                        onClick={closeModal}
                    >
                        <div
                            className="relative bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg w-full sm:w-10/12 md:w-8/12 lg:w-6/12 max-w-3xl sm:h-auto md:h-auto lg:h-auto"
                            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicked inside
                        >
                            {/* Modal content */}
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                {/* Left - Image */}
                                <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
                                    <img
                                        src={gifImages(`./${selectedExercise.item_name}.gif`)}
                                        alt={selectedExercise.name}
                                        className="w-full h-auto md:w-full rounded-md max-w-full sm:w-5/12 xs:w-3/4 xxs:w-1/2"
                                    />
                                </div>

                                {/* Right - Target Muscles */}
                                <div className="w-full md:w-1/2 md:pl-6">
                                    <h2 className="text-2xl font-bold mb-2">Target Muscles</h2>
                                    <ul className="list-disc text-gray-300 pl-5">
                                        {selectedExercise.targetMuscles.map((muscle, index) => (
                                            <li key={index}>{muscle}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Middle Part - Exercise Info */}
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold mb-2">{selectedExercise.name}</h2>
                                <p className="text-gray-300">{selectedExercise.exerciseInfo}</p>
                            </div>

                            {/* Bottom Part */}
                            <div className="flex justify-between items-center">
                                {/* Optimal Range */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Optimal Range</h2>
                                    <p className="text-gray-300">{selectedExercise.optimalRange}</p>
                                </div>
                                {/* Close Button */}
                                <a
                                    href="#_"
                                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-gray-400 rounded-full shadow-md group"
                                    onClick={closeModal}
                                >
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-400 group-hover:translate-x-0 ease">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-gray-100 transition-all duration-300 transform group-hover:translate-x-full ease">
                                        Close
                                    </span>
                                    <span className="relative invisible">Close</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {/* End of Modal */}

                <div className="flex justify-center mt-4">
                    <div className="flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${currentPage === index ? 'bg-white' : 'bg-gray-500'}`}
                                onClick={() => handlePageChange(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Exercise;
