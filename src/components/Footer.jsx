import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from "/logo.png"

const Footer = () => {
    return (
        <footer className="bg-accent text-white py-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-left md:items-start space-y-6 md:space-y-0">
                {/* MinsterComp Section */}
                <div className="text-left md:text-left w-[200px] mb-[-50px] sm:mb-0 ">
                    <img src={Logo} className="w-full ml-[-17px]" />
                </div>

                {/* Quick Links Section */}
                <div className="text-left md:text-left">
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link to="https://bit.ly/ISM-Ministers-Support" className="hover:text-blue-400">Donate</Link></li>
                        <li><Link to="/refer-minister" className="hover:text-blue-400">Refer a Minister</Link></li>
                        <li><Link to="/impact" className="hover:text-blue-400">Impact Stories</Link></li>
                        <li><Link to="/register" className="hover:text-blue-400">Register As a Minister in Need</Link></li>
                        <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="text-left md:text-left">
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex justify-left md:justify-start space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Legal Section */}
                <div className="text-left md:text-left">
                    <ul className="space-y-2">
                        <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
                        <li><Link to="/terms-conditions" className="hover:text-blue-400">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
