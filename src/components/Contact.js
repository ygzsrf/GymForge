import React from 'react';
import Map from './Map';
import { Element } from 'react-scroll';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const requestInput = document.getElementById('request');
        const name = nameInput.value;
        const email = emailInput.value;
        const request = requestInput.value;
    
        if (name && email && request) {
            // Send the form data to the server
            // Display success message
            alert('Your message has been received. Our team should return to you within 24 hours.');
    
            // Reset the form fields
            nameInput.value = '';
            emailInput.value = '';
            requestInput.value = '';
        } else {
            // Display error message
            alert('Please fill in all the necessary fields.');
        }
    };
    

    return (
        <Element name="contact" className="section bg-gray-900 text-white py-16 px-4 md:px-10 lg:px-20 font-inter">
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4">Our Information</h2>
                    <p className="mb-4">Address: 123 Main St, City, State, ZIP</p>
                    <Map />
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input type="text" id="name" className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-purple-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input type="email" id="email" className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-purple-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="request" className="block mb-2">Describe your request</label>
                            <textarea id="request" className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-purple-500" />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </Element>
    );
};

export default Contact;
