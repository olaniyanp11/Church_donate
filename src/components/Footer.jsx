import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-accent text-white py-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
                {/* MinsterComp Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold">MinsterComp</h3>
                </div>

                {/* Quick Links Section */}
                <div className="text-center md:text-left">
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="/donate" className="hover:text-yellow-400">Donate</a></li>
                        <li><a href="/refer-a-minister" className="hover:text-yellow-400">Refer a Minister</a></li>
                        <li><a href="/impact-stories" className="hover:text-yellow-400">Impact Stories</a></li>
                        <li><a href="/register-minister" className="hover:text-yellow-400">Register As a Minister in Need</a></li>
                        <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
                        <li><a href="/contact" className="hover:text-yellow-400">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="text-center md:text-left">
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-400">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-400">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-400">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Legal Section */}
                <div className="text-center md:text-left">
                    <ul className="space-y-2">
                        <li><a href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a></li>
                        <li><a href="/terms-conditions" className="hover:text-yellow-400">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
