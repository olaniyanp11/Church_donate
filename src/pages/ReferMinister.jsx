import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Nav } from '../components/Nav';
import Pastor from '../assets/pastor.webp';
import { FaHeart, FaPaperPlane, FaVideo } from 'react-icons/fa';
import Footer from '../components/Footer';

const ReferMinister = () => {
    return (
        <>
            <Nav bgColor='bg-accent ' shadow={true} />
            <section className="w-full py-12 px-6 text-white bg-accent">
                {/* Hero Title */}
                <div className="max-w-3xl mx-auto text-center z-20">
                    <motion.h2
                        className="text-2xl sm:text-4xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Know a Minister in Need? Help Us Reach Them Today.
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Your referral can make a life-changing difference. If you know a minister facing serious challenges, don’t hesitate to act. By sharing their story, you are helping us provide the support they urgently need.
                    </motion.p>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full border-b-2 border-gray-300"></div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: How to Refer a Minister */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-accent">How to Refer a Minister</h2>
                        <div className="text-lg mb-4">
                            <p>Follow these simple steps to refer a minister in need:</p>
                            <ul className="list-decimal pl-6 mt-2">
                                <li>Record a short video explaining the minister's situation and why they need support.</li>
                                <li>Include their name, location, and your contact information.</li>
                                <li>Email the video to <a href="mailto:support@ismministerssupport.org" className="text-accent">support@ismministers<br />support.org</a>.</li>
                            </ul>
                        </div>
                        <FaVideo className="text-accent text-3xl" />
                    </motion.div>

                    {/* Column 2: What Happens Next */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-accent">What Happens Next?</h2>
                        <div className="text-lg mb-4">
                            <p>Our team reviews the video and verifies the details.</p>
                            <p>If approved, the minister will receive foundational training, mentorship, and the necessary support to address their needs.</p>
                            <p>You’ll be notified once your referral is processed.</p>
                        </div>
                        <FaPaperPlane className="text-accent text-3xl" />
                    </motion.div>

                    {/* Column 3: Be a Lifeline */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-accent">Be a Lifeline</h2>
                        <div className="text-lg mb-4">
                            <p>Your action could be the turning point in someone’s life. Take the first step today and help us bring hope to a minister in need.</p>
                        </div>
                        <Link to="/register" className="text-white bg-accent px-4 py-2 rounded-full hover:bg-blue-600 transition">
                            <FaHeart className="inline-block mr-2 text-accent" />
                            Submit Your Referral
                        </Link>
                    </motion.div>
                </div>
            </div>
            {/* Image Section */}
            <section className="w-full py-12 px-6 bg-light-gray text-center">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={Pastor} // Add an actual image URL here
                        alt="Support a Minister"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>
            </section>
            <Footer />
        </>
    );
};

export default ReferMinister;
