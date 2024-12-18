import React from 'react'
import { motion } from 'framer-motion'
import { Nav } from '../components/Nav'
import Footer from '../components/Footer'
import TestimonialsSlider from '../components/TestimonialSlider'
import One from "../assets/one.jpg"
import Two from "../assets/two.jpg"
import Three from "../assets/three.jpg"
import Four from "../assets/four.jpg"
import Five from "../assets/five.jpg"
import Six from "../assets/six.jpg"
import Before from "../assets/eight2.jpg"
import After from "../assets/eight.jpg"
import { Link } from 'react-router-dom'

const OurImpact = () => {
    return (
        <>
            <Nav textColor='black' />
            <div>
                {/* Hero Section */}
                <motion.section
                    className="relative bg-accent text-white py-16 px-6 lg:py-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            See the Difference We’re Making: Stories of Hope, Restoration, and Transformation.
                        </h1>
                    </div>
                </motion.section>

                {/* Intro Paragraph */}
                <motion.section
                    className="bg-gray-100 py-10 px-6 lg:py-14"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-5xl mx-auto">
                        <p className="text-lg text-gray-700 text-center">
                            Your support is creating a ripple effect of positive change in the lives of ministers and their communities. On this page, we showcase the impact of the ISM Ministers’ Support Initiative through inspiring stories, real-time updates, and transparent reports on how your contributions are being used.
                        </p>
                    </div>
                </motion.section>

                {/* Our Reach Section */}
                <motion.section
                    className="bg-secondary py-12 px-6 lg:py-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white">Our Reach</h2>
                        <p className="mt-4 text-accent font-medium">A snapshot of what we’ve accomplished so far:</p>

                        {/* Grid Layout */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Ministers Supported */}
                            <motion.div
                                className="bg-accent p-6 rounded-lg shadow-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-xl font-semibold text-white">Ministers Supported</h3>
                                <p className="mt-2 text-gray-300">Over [X] ministers helped in [Y] countries.</p>
                            </motion.div>

                            {/* Training Delivered */}
                            <motion.div
                                className="bg-accent p-6 rounded-lg shadow-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-xl font-semibold text-white">Training Delivered</h3>
                                <p className="mt-2 text-gray-300">
                                    Foundational training provided to [Z] ministers using ISM’s specialized resources.
                                </p>
                            </motion.div>

                            {/* Regional Support Networks */}
                            <motion.div
                                className="bg-accent p-6 rounded-lg shadow-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-xl font-semibold text-white">Regional Support Networks</h3>
                                <p className="mt-2 text-gray-300">[X] new mentorship connections established globally.</p>
                            </motion.div>
                        </div>

                        {/* Button */}
                        <button className="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:bg-blue-500 transition-colors">
                            See Full Statistics
                        </button>
                    </div>
                </motion.section>

                {/* Impact Stories Section */}
                <motion.section
                    className="bg-gray-50 py-12 px-6 lg:py-16"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-accent">Impact Stories</h2>
                        <div className="mt-8 space-y-8">
                            <div className="text-left">
                                <h3 className="text-xl font-semibold text-gray-900">Minister Peter’s Story (Kenya)</h3>
                                <p className="mt-2 text-gray-600">
                                    Once struggling to provide for his family, Peter now leads a thriving church community, thanks to mentorship and financial support.
                                </p>
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-semibold text-gray-900">Pastor Anita’s Story (India)</h3>
                                <p className="mt-2 text-gray-600">
                                    Facing ministry burnout, Anita received critical aid and guidance, enabling her to rebuild her church and impact more lives.
                                </p>
                            </div>
                        </div>
                        <button className="mt-8 px-6 py-2 bg-accent text-white rounded hover:bg-blue-500">
                            Read More Inspiring Stories
                        </button>
                    </div>
                </motion.section>

                {/* Testimonials Section */}
                <TestimonialsSlider />

                {/* Gallery Section */}
                        {/* Centering the grid and adjusting image sizes */}
                        <section className="bg-gray-100 py-12 px-6 lg:py-16 animate-zoom-in">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-2xl font-bold text-accent">Gallery</h2>
                                <p className="mt-4 text-gray-700">Browse through moments of transformation and impact:</p>

                                {/* Responsive Complex Grid Layout */}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
                                    {/* Image 1 */}
                                    <div className="relative group md:col-span-2">
                                        <img
                                            src={One}
                                            alt="Impact 1"
                                            className="w-full object-cover aspect-[16/9] rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Image 2 */}
                                    <div className="relative group">
                                        <img
                                            src={Two}
                                            alt="Impact 2"
                                            className="w-full object-cover aspect-square rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Image 3 */}
                                    <div className="relative group">
                                        <img
                                            src={Three}
                                            alt="Impact 3"
                                            className="w-full object-cover aspect-square rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Image 4 */}
                                    <div className="relative group md:col-span-1">
                                        <img
                                            src={Four}
                                            alt="Impact 4"
                                            className="w-full object-cover aspect-[4/5] rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Image 5 */}
                                    <div className="relative group md:col-span-2">
                                        <img
                                            src={Five}
                                            alt="Impact 5"
                                            className="w-full object-cover aspect-[16/9] rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Image 6 */}
                                    <div className="relative group">
                                        <img
                                            src={Six}
                                            alt="Impact 6"
                                            className="w-full object-cover aspect-square rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                {/* Before & After Section */}
                <motion.section
                    className="bg-gray-100 py-12 px-6 lg:py-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-accent">Before & After</h2>
                        <p className="mt-4 text-gray-700">See the transformation:</p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div
                                className="relative group transform transition-all duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={Before} alt="Before" className="w-full h-full object-cover rounded-lg shadow-md" />
                            </motion.div>

                            <motion.div
                                className="relative group transform transition-all duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={After} alt="After" className="w-full h-full object-cover rounded-lg shadow-md" />
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Join the Movement Section */}
                <motion.section
                    className="bg-secondary py-12 px-6 lg:py-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-accent">Join the Movement</h2>
                        <p className="mt-4 text-gray-700">Be a part of our continued success:</p>
                        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                            <Link to="https://bit.ly/ISM-Ministers-Support" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-500 transition-all">
                                Donate Now
                            </Link>
                            <Link to="/contact" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-500 transition-all">
                                Become a Volunteer
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </div>
            <Footer />
        </>
    )
}

export default OurImpact
