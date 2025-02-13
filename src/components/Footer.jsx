import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from "/logo.png"

const Footer = () => {
    return (
        <footer className="bg-accent text-white pt-20">
            <div className=" gap-8 grid grid-cols-1 sm:pb-28 sm:px-10 md:pb-32 px-10  pb-32  lg:px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-16 mx-auto container w-full ">
                {/* MinsterComp Section */}
                <div className="text-left md:text-left  mb-[-50px] sm:mb-0 flex flex-col gap-0   ">
                    <img src={Logo} className=" ml-[-17px] w-[200px] mb-[-40px] mt-[-34px]" />
                    <p>The Minister Support program helps ministers overcome financial and resource challenges to continue their vital work in spreading the gospel.</p>
                </div>
                <div className="text-left md:text-left  mt-14 sm:mt-0 ">
                    <h2 className="text-xl font-medium mb-2">Contact</h2>
                    <ul>
                        <li>+234 789 57485</li>
                        <li> info@ismministerssupport</li>
                    </ul>
                    <h4 className='pt-4'> Address</h4>
                    <ul>

                        <li>
                            Christ Embassy Healing School
                            21/23 Ize Iyamu
                            Off Billings Way
                            Oregun
                            Lagos
                            Nigeria
                        </li>
                    </ul>
                </div>
                {/* Quick Links Section */}
                <div className="text-left md:text-left ">
                    <h4 className="text-xl font-medium mb-2">Explore</h4>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link to="https://bit.ly/ISM-Ministers-Support" className="hover:text-blue-400">Donate</Link></li>
                        <li><Link to="/refer-minister" className="hover:text-blue-400">Refer a Minister</Link></li>
                        <li><Link to="/impact" className="hover:text-blue-400">Impact Stories</Link></li>
                        <li><Link to="/register" className="hover:text-blue-400">Register As a Minister in Need</Link></li>
                    </ul>
                </div>
                <div className="text-left md:text-left ">
                    <h4 className="text-xl font-medium mb-2">About</h4>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
                        <li><Link to="/how-to-support" className="hover:text-blue-400">How to Support Us </Link></li>
                        <li><Link to="/give-support" className="hover:text-blue-400">Give Support </Link></li>
                        <li><Link to="/refer-minister" className="hover:text-blue-400">Refer Minister in Need </Link></li>
                    </ul>
                </div>
                {/* Legal Section */}
            </div>
            <div className="text-center text-[16px] border-[#1a5a7a] border-t-[1px] justify-center p-5">
                <ul className=" flex justify-center items-center  gap-4">
                    <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy </Link>
                    <Link to="#" className="hover:text-blue-400">| </Link>
                    <Link to="/terms-conditions" className="hover:text-blue-400">Terms & Conditions</Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
