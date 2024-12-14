import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lost from "../assets/404.gif"; // Replace with your actual GIF file path

const NotFound = () => {
    return (
        <div className="w-full h-screen px-8 flex flex-col items-center justify-center bg-accent text-white">
            {/* Animated GIF */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="mb-8"
            >

            </motion.div>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-6xl font-extrabold mb-4"
                >
                    404
                </motion.h1>

            {/* 404 Title */}

            {/* Message */}
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl mb-6"
            >
                Oops! The page you are looking for does not exist.
            </motion.p>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg mb-6"
            >
                It seems the page might have been moved or deleted.
            </motion.p>

            {/* Back to Home Button */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
            >
                <Link
                    to="/"
                    className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md shadow-md hover:shadow-xl transition-all"
                >
                    Go Back to Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
