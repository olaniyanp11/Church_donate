import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaChevronDown, FaChevronUp, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import IMAGE from '../assets/Contact.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        const url = './send_info.php';
        setLoading(true);

        // Show loading popup
        setLoading(true);

        axios.post(url, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then((response) => {
                setIsSubmitted(true);
                console.log("sent");
                setSubmissionStatus("success");
                reset();
            })
            .catch(error => {
                setIsSubmitted(true);
                setSubmissionStatus("failed");
                setErrorMessage(error.response.data.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const closePopup = () => {
        setIsSubmitted(false);
        setSubmissionStatus(null);
        setErrorMessage("");
    };
    function FAQSection() {
        const [activeIndex, setActiveIndex] = useState(null);

        const toggleVisibility = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
        };

        useEffect(() => {
            const handleScroll = () => {
                const elements = document.querySelectorAll('.animate-on-scroll');
                elements.forEach((element) => {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom >= 0) {
                        element.classList.add('animate__fadeInUp');
                    } else {
                        element.classList.remove('animate__fadeInUp');
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return (
            <>
                <Nav textColor="black" />
                <section className="bg-gradient-to-r from-blue-800 to-accent py-16 text-white">
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl sm:text-5xl font-bold">We’re Here to Help.</h1>
                        <p className="mt-4 text-lg sm:text-xl">Have questions, need more information, or want to get involved? Reach out to us today—we’d love to hear from you.</p>
                    </div>
                </section>

                <section className="py-16 px-8 sm:px-16 bg-accent text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Contact Form</h2>

                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-medium text-white">Full Name</label>
                                    <input
                                        id="full-name"
                                        {...register("fullName", { required: "Full name is required" })}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                        placeholder="Enter your full name"
                                    />
                                    {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
                                    <input
                                        id="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                                message: "Invalid email address",
                                            },
                                        })}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number (Optional)</label>
                                    <input
                                        id="phone"
                                        {...register("phone")}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                                    <textarea
                                        id="message"
                                        {...register("message", { required: "Message is required" })}
                                        rows="4"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                        placeholder="Write your message here"
                                    ></textarea>
                                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-white px-4 py-3 text-accent text-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        <div>
                            <img
                                src={IMAGE}
                                alt="Image Description"
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </section>
                <section className="py-16 px-8 sm:px-16 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Follow Us</h2>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-accent hover:text-blue-800"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-accent hover:text-blue-800"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-accent hover:text-blue-800"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-accent hover:text-blue-800"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-8 sm:px-16 bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <button
                                    className="w-full text-left text-lg font-semibold text-accent flex justify-between items-center"
                                    onClick={() => toggleVisibility(0)}
                                >
                                    How do I apply for support?
                                    {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                <div className={`text-gray-600 text-left mt-2 ${activeIndex === 0 ? 'block' : 'hidden'}`}>
                                    Submit a short video explaining your situation and why you need support.
                                    Email your video to support@ismministerssupport.org.
                                    Once received, our team will carefully review it and contact you with further instructions if your application is approved.
                                </div>
                            </div>

                            <div>
                                <button
                                    className="w-full text-left text-lg font-semibold text-accent flex justify-between items-center"
                                    onClick={() => toggleVisibility(1)}
                                >
                                    How do I refer a minister in need?
                                    {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                <div className={`text-left text-gray-600 mt-2 ${activeIndex === 1 ? 'block' : 'hidden'}`}>
                                    Record a video sharing their story and explaining why they should receive support.
                                    Send the video to support@ismministerssupport.org.
                                </div>
                            </div>

                            <div>
                                <button
                                    className="w-full text-left text-lg font-semibold text-accent flex justify-between items-center"
                                    onClick={() => toggleVisibility(2)}
                                >
                                    How can I give to support the initiative?
                                    {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                <div className={`text-gray-600 text-left mt-2 ${activeIndex === 2 ? 'block' : 'hidden'}`}>
                                    Click <Link to=" https://bit.ly/ISM-Ministers-Support" className='text-blue-500'>here</Link> to make your donation.
                                    We appreciate your generosity and support in helping us continue our work.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <FAQSection />
            {loading && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-xl font-semibold">Sending your message...</p>
                        <div className="mt-4">
                            <div className="animate-spin rounded-full border-t-4 border-blue-600 h-16 w-16 mx-auto"></div>
                        </div>
                    </div>
                </div>
            )}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                        {submissionStatus === "success" ? (
                            <>
                                <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
                                <p className="text-gray-700">
                                    Your application has been successfully submitted. Our team will
                                    review it and get back to you shortly.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-red-500 mb-4">Submission Failed</h2>
                                <p className="text-gray-700">
                                    {errorMessage || "Something went wrong. Please try again."}
                                </p>
                            </>
                        )}
                        <button
                            onClick={closePopup}
                            className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactUs;
