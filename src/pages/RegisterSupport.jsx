import React from 'react';
import { motion } from 'framer-motion';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import ChurchForm from '../components/ChurchForm';

const RegisterSupport = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    return (
        <>
            <Nav textColor='black' />

            {/* Hero Section */}
            <motion.section
                className="relative w-full py-10 flex justify-center items-center bg-primary text-white"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <div className="text-center px-4 sm:px-[20%]">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold mb-4"
                        variants={fadeInUp}
                    >
                        Your Journey to Restoration Starts Here.
                    </motion.h1>
                    <motion.p
                        className="text-lg"
                        variants={fadeInUp}
                    >
                        If you're a minister facing challenges and in need of support, we’re here to help. Share your story, and let us walk this path with you.
                    </motion.p>
                </div>
            </motion.section>
            <section class="py-12 bg-gray-50">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-xl font-bold text-primary mb-4">Eligibility Requirements</h3>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <h2>Before registering, ensure you meet the following criteria:
                                </h2>
                                <li>You are a minister actively serving in a church or ministry.</li>
                                <li>You are facing genuine challenges that affect your ability to minister effectively (Food and basic care challenges, musical instrument and multimedia equipment challenges).
                                </li>
                                <li>You are willing to share your story and participate in ISM foundational training.
                                </li>
                            </ul>
                        </div>


                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-xl font-bold text-primary mb-4">How to Apply</h3>
                            <ol class="list-decimal list-inside text-gray-700 space-y-3">
                                <li>
                                    <strong>Fill in Your Details:</strong> Complete the registration form below, providing accurate information about yourself and your ministry.
                                </li>
                                <li>
                                    <strong>Submit a Short Video:</strong> Upload  a short video (3-5 minutes) explaining:
                                    <ul class="list-disc pl-6 mt-2">
                                        <li>The challenges you’re facing.</li>
                                        <li>Why you need support.</li>
                                        <li>How this support will impact your ministry.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Attach Supporting Photos:</strong> Upload at least two recent photos of yourself in your ministry environment (e.g., preaching, counseling, community outreach).
                                </li>
                                <li>
                                    <strong>Submit Your Application:</strong> Once completed, click “Submit,” and our team will review your application.
                                </li>
                            </ol>
                        </div>


                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-xl font-bold text-primary mb-4">What Happens Next?</h3>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    <strong>Application Review:</strong> Our team will carefully review your application and verify the details provided.
                                </li>
                                <li>
                                    <strong>Approval Process:</strong> If approved, you’ll be contacted via email with further instructions.
                                </li>
                                <li>
                                    <strong>Training and Support:</strong> Once approved, you’ll undergo foundational training with ISM resources, followed by tailored support through our network of pastors.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-2xl font-bold text-accent">
                        Important Notes
                    </h2>
                    <ul className="mt-6 space-y-4 text-lg text-gray-700">
                        <li className="flex items-start">
                            <span className="mr-3 text-accent">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </span>
                            Applications are reviewed on a rolling basis. Please allow
                            [X] days
                            for feedback.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-accent">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </span>
                            Ensure your video clearly conveys your message.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-accent">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </span>
                            By submitting, you agree to participate in our foundational training if selected.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-accent">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </span>
                            Allow up to 14 Days for feedback.
                        </li>
                    </ul>
                </div>
            </section>
            <ChurchForm />

            <Footer />
        </>
    );
};
export default RegisterSupport