import React, { useState, useEffect } from 'react';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Group from "../assets/group.png";
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

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
            <Nav textColor="black" />
            <section
                className="w-full py-12 px-6 text-white relative overflow-hidden"
                style={{ width: '100%' }} // Ensuring it is a square initially
            >
                {/* Content above the curve */}
                <div className="max-w-3xl mx-auto text-center z-20">
                    <h2 className="sm:text-4xl text-2xl  font-bold">Your Gift Makes Ministry Possible: Support Ministers in Need Today.</h2>
                    <p className="mt-4 text-gray-100 bg-primary sm:bg-none pb-10 sm:pb-0">
                        By giving to the ISM Ministers' Support Initiative, you are directly contributing to the wellbeing and sustainability of ministers around the world. Every gift helps us provide practical assistance, spiritual training, and mentorship to those who need it most.
                    </p>
                </div>

                {/* Curved Bottom (Animated on Scroll) */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-primary z-[-1]"
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

            {/* Why Give Section with Responsive Two Columns */}
            <section className="py-12 px-6 bg-gray-100">
                <h2 className="text-3xl text-center font-semibold mb-8 text-primary">Why Give?</h2>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
                    {/* Text Section */}
                    <div className="text-left md:text-left">
                        <h3 className="text-xl font-bold text-primary">Your donation helps</h3>
                        <ol className="list-disc pl-5 text-primary mb-3">
                            <li>Provide financial relief to ministers in critical need.</li>
                            <li>Deliver training and mentorship for lasting impact.</li>
                            <li>Strengthen churches and communities worldwide.</li>
                        </ol>
                        <h3 className="text-xl font-bold text-primary">Ways to Give</h3>
                        <ol className="list-disc pl-5 text-primary mb-4">
                            <li><span className='font-bold'>Sponsor a Minister :</span> Provide tailored support for a minister in need.</li>
                            <li><span className='font-bold'>General Donation :</span>  Contribute to our overall mission to reach as many ministers as possible.</li>
                            <li><span className='font-bold '>Recurring Giving : </span> Set up automatic monthly donations to sustain long-term impact.</li>
                        </ol>
                        <Link to="https://bit.ly/ISM-Ministers-Support" className='w-[300px] py-3 bg-primary text-white font-bold px-20'>Give Now</Link>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img src={Group} alt="Support Ministers" className="max-w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 px-6 text-center bg-transparent">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-primary">Transparency and Accountability</h2>
                    <p className="mt-4 text-gray-700">
                        We value your trust and ensure every contribution is used effectively. Regular updates and impact reports will keep you informed on how your giving is transforming lives.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default GiveSupport;
