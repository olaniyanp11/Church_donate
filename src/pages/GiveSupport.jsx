import React, { useState, useEffect } from 'react';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const GiveSupport = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolling(true); // Trigger clip-path when scrolled
        } else {
            setScrolling(false); // Reset when scrolled back up
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>


            <Nav textColor='black'/>
            <section
                className="w-full py-12 px-6 text-white relative overflow-hidden"
                style={{  width: '100%' }} // Ensuring it is a square initially
            >
                {/* Content above the curve */}
                <div className="max-w-3xl mx-auto text-center z-20">
                    <h2 className="text-2xl font-bold">Your Gift Makes Ministry Possible: Support Ministers in Need Today.</h2>
                    <p className="mt-4 text-gray-200">
                        By giving to the ISM Ministers' Support Initiative, you are directly contributing to the wellbeing and sustainability of ministers around the world. Every gift helps us provide practical assistance, spiritual training, and mentorship to those who need it most.
 </p>
                    <ol className="text-left mt-6">
                        <li>Sponsor a minister in need.</li>
                        <li>Support outreach programs and training.</li>
                        <li>Make a one-time gift or set up recurring donations.</li>
                    </ol>
                    <a href="#" className="bg-white text-accent p-3 mt-4 inline-block rounded-lg">Learn More & Give Now</a>
                </div>

                {/* Curved Bottom (Animated on Scroll) */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full  bg-primary z-[-1]"
                    initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} // Initial state (square)
                    animate={{
                        clipPath: scrolling
                            ? 'polygon(0 0, 100% 0, 94% 100%, 10% 80%)' // Apply the curve when scrolled
                            : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Default square shape
                    }}
                    transition={{
                        type: 'spring', // Use spring for smooth transition
                        stiffness: 100, // Adjust stiffness for the bounce effect
                        damping: 25, // Adjust damping for smoother transitions
                        duration: 0.5, // Animation duration
                    }}
                />
            </section>
            <Footer />
        </>
    );
};

export default GiveSupport;
