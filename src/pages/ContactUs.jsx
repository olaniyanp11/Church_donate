import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import IMAGE from '../assets/Contact.jpg'

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
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
                <Nav textColor='black' />
                <section className="bg-gradient-to-r from-blue-800 to-accent py-16 text-white">
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl sm:text-5xl font-bold">We’re Here to Help.</h1>
                        <p className="mt-4 text-lg sm:text-xl">Have questions, need more information, or want to get involved? Reach out to us today—we’d love to hear from you.</p>
                    </div>
                </section>

                <section className="py-16 px-8 sm:px-16">
                    <div className="container mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-accent">Contact Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-semibold">General Inquiries</h3>
                                <p>Email: <a href="mailto:info@ismministerssupport.org" className="text-accent">info@ismministerssupport.org</a></p>
                                <p>Phone: [+X XXX XXX XXXX]</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Support Applications</h3>
                                <p>Email: <a href="mailto:support@ismministerssupport.org" className="text-accent">support@ismministerssupport.org</a></p>
                                <p>Phone: [+X XXX XXX XXXX]</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Donor and Sponsor Inquiries</h3>
                                <p>Email: <a href="mailto:donor@ismministerssupport.org" className="text-accent">donor@ismministerssupport.org</a></p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Office Address</h3>
                                <p>[Your Organization’s Address, City, Country]</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-8 sm:px-16 bg-accent text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Contact Form</h2>

                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">

                            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-medium text-white">Full Name</label>
                                    <div className="mt-2">
                                        <input
                                            id="full-name"
                                            name="full-name"
                                            type="text"
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number (Optional)</label>
                                    <div className="mt-2">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                                    <div className="mt-2">
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="4"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                            placeholder="Write your message here"
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-white px-4 py-3 text-accent text-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none"
                                    >
                                        Send Message
                                    </button>
                                </div>
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
                                <div className={`text-gray-600 mt-2 ${activeIndex === 0 ? 'block' : 'hidden'}`}>
                                    Details about applying for support...
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
                                <div className={`text-gray-600 mt-2 ${activeIndex === 1 ? 'block' : 'hidden'}`}>
                                    Details about referring a minister...
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
                                <div className={`text-gray-600 mt-2 ${activeIndex === 2 ? 'block' : 'hidden'}`}>
                                    Details about giving support...
                                </div>
                            </div>

                            <div>
                                <button
                                    className="w-full text-left text-lg font-semibold text-accent flex justify-between items-center"
                                    onClick={() => toggleVisibility(3)}
                                >
                                    How do I get updates on the program’s progress?
                                    {activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                <div className={`text-gray-600 mt-2 ${activeIndex === 3 ? 'block' : 'hidden'}`}>
                                    Details about updates...
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        );
    }

    return <FAQSection />;
}

export default ContactUs;
