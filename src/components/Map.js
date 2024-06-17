import React from 'react';

const Map = () => {
    return (
        <div className="w-full h-96 dark:bg-gray-900">
            <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197388960245!2d-122.42191318468365!3d37.77492957975957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2a5f7c1%3A0x4e0cbb43d5f37c08!2sSan%20Francisco%2C%20CA%2094122%2C%20USA!5e0!3m2!1sen!2sin!4v1633008741687!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                title="Google Maps"
            ></iframe>
        </div>
    );
};

export default Map;
