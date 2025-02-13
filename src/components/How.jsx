import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export const How = () => {
    return (
        <section className="w-full py-20 back bg-no-repeat bg-cover">
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6"> How To Get Involved </h2>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-5 sm:px-10">

                {/* How a Minister in Need Can Sign Up */}
                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 transform hover:scale-105 transition-all duration-300 relative"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-2xl font-semibold text-accent">Register for Support</h3>
                    <p className="text-lg text-accent flex flex-wrap">
                        Are you a minister in need of support? Follow these steps:
                    </p>
                    <ol class=" list-inside text-gray-700 space-y-3">
                        <li>
                            <strong>Step 1 :</strong>  Visit our website and select the category of support you need:
                            <ul class="list-disc pl-6 mt-2">
                                <li><strong>Food Relief :</strong> One month’s essential food supplies.
                                </li>
                                <li><strong>Musical Instruments :</strong>Tools like keyboards or drum sets to enhance worship.
                                </li>
                                <li><strong>Multimedia & Sound Equipment :</strong>  Microphones, speakers, projectors, and more for impactful ministry.
                                </li>

                            </ul>
                        </li>
                        <li>
                            <strong>Step 2 :</strong>  Complete the application form, detailing your current challenges and ministry needs.
                        </li>
                        <li>
                            <strong>Step 3 :</strong>  Once approved, you’ll receive:
                            <ul class="list-disc pl-6 mt-2">
                                <li>Support in your chosen category.
                                </li>
                                <li>A one-month foundational training program in the ISM Online School to empower your ministry.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <Link to="/register" className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all">
                        Apply Now
                    </Link>
                </motion.div>
                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 transform hover:scale-105 transition-all   duration-300 relative"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-2xl font-semibold text-accent">Refer a Minister</h3>
                    <div>
                        <p className="text-lg text-accent flex flex-wrap">
                            Do you know a minister in need? Here’s how you can help:
                        </p>
                        <ol class=" list-inside text-gray-700 space-y-3">
                            <li>
                                <strong>Step 1 :</strong>   Go to our website and click on <strong>Refer a Minister.</strong>
                            </li>
                            <li>
                                <strong>Step 2 :</strong>  Fill out the referral form with the minister’s details and the challenges they’re facing.
                            </li>
                            <li>
                                <strong>Step 3 :</strong>   Our team will contact the minister, evaluate their needs, and provide the appropriate support if approved.

                            </li>
                        </ol>
                        <p>Referring a minister is a simple yet powerful way to make an impact in the life of a gospel minister.
                        </p>
                    </div>
                    <Link to="/register" className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all">
                        Refer A Minister
                    </Link>
                </motion.div>

                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 transform hover:scale-105 transition-all   duration-300 relative"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-2xl font-semibold text-accent">Support Ministers in Need</h3>
                    <div>
                        <p className="text-lg text-accent flex flex-wrap">
                            Join us in uplifting ministers globally. Here’s how you can contribute :
                        </p>
                        <ol class=" list-inside text-gray-700 space-y-3">
                            <li>
                                <strong>Step 1 :</strong>    Choose how you want to give:
                                <ul class="list-disc pl-6 mt-2">
                                    <li>Make a one-time donation.

                                    </li>
                                    <li>Pledge monthly contributions.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Step 2 :</strong>   Select the category you’d like to support:
                                <ul class="list-disc pl-6 mt-2">
                                    <li>Food Relief


                                    </li>
                                    <li>Musical Instruments
                                    </li>
                                    <li>Multimedia & Sound Equipment
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Step 3 :</strong>   Your support will directly fund resources for ministers and provide them with access to a one-month ISM Online School training.
                            </li>
                        </ol>
                        <p>Your generosity ensures that ministers around the world continue their calling with strength and purpose.
                        </p>
                    </div>
                    <Link to="https://bit.ly/ISM-Ministers-Support" className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all">
                     Donate Now
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
