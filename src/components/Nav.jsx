import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BiMenu, BiChevronDown } from 'react-icons/bi'; // Import ChevronDown icon
import Logo from "/logo.png";
import { useNavigate } from 'react-router-dom';

export const Nav = ({ bgColor = "bg-transparent", textColor = "text-white", hoverColor = "hover:text-accent", shadow }) => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
    const navigate = useNavigate();

    // Block scroll when the sidebar is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = 'auto'; // Enable scroll
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    return (
        <>
            {/* Navigation Bar */}
            <nav className={`w-full h-[13vh] ${shadow ? "shadow-md" : ""} justify-between px-10 items-center ${textColor} flex text-[14px] uppercase ${bgColor}`}>
                <div className='font-bold w-[70px]'>
                    <img src={Logo} alt="Logo" className='ml-[-20px]' />
                </div>
                <div className='gap-6 items-center hidden md:flex'>
                    <Link to='/' className={`${hoverColor}`}>Home</Link>
                    <Link to='/about' className={`${hoverColor}`}>About</Link>

                    {/* Dropdown for Support */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className={`flex items-center ${hoverColor} focus:outline-none uppercase`}
                        >
                            Support Us
                            <BiChevronDown className="ml-1" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute top-full z-50 mt-5 w-52 bg-white text-black rounded-lg shadow-lg">
                                <Link
                                    to='/how-to-support'
                                    className="block px-4 py-2 hover:bg-accent hover:text-white"
                                >
                                    How to Support
                                </Link>
                                <Link
                                    to='/give-support'
                                    className="block px-4 py-2 hover:bg-accent hover:text-white"
                                >
                                    Give Support
                                </Link>
                                <Link
                                    to='/refer-minister'
                                    className="block px-4 py-2 hover:bg-accent hover:text-white"
                                >
                                    Refer a Minister in Need
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to='/impact' className={`${hoverColor}`}>Impact and Success Report</Link>
                    <Link to='/register' className={`${hoverColor}`}>Register For Support</Link>

                    {/* New "Contact Us" Link */}
                    <Link to='/contact' className={`${hoverColor}`}>Contact Us</Link>

                    <Button
                        text={"Donate"}
                        bg={"bg-accent"}
                        width={170}
                        onClick={() => {
                            window.location.href = "https://bit.ly/ISM-Ministers-Support";
                        }}
                    />
                </div>
                <BiMenu
                    className={`md:hidden text-[30px] flex ${textColor} cursor-pointer`}
                    onClick={() => setOpen(true)}
                />
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[86%] md:hidden bg-trasparent backdrop-blur-md text-white shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} z-50`}
            >
                <div className="flex justify-end p-3 px-[15%]">
                    <button onClick={() => setOpen(false)} className="text-[35px]">&times;</button>
                </div>
                <div className='flex w-full items-center flex-col mt-[30%]'>
                    <Link to='/' className='block mb-4 text-white hover:text-accent'>Home</Link>
                    <Link to='/about' className='block mb-4 text-white hover:text-accent'>About</Link>

                    {/* Dropdown for Sidebar */}
                    <div className="relative w-full text-center">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex justify-center items-center w-full text-white hover:text-accent mb-4"
                        >
                            Support Us
                            <BiChevronDown className="ml-1" />
                        </button>
                        {dropdownOpen && (
                            <div className="bg-transparent text-white rounded-lg shadow-lg">
                                <Link
                                    to='/how-to-support'
                                    className="block px-4 py-2 hover:bg-accent hover:text-white"
                                >
                                    How to Support
                                </Link>
                                <Link
                                    to='/give-support'
                                    className="block px-4 py-2 hover:bg-accent hover:text-white"
                                >
                                    Give Support
                                </Link>
                                <Link
                                    to='/refer-minister'
                                    className="block px-4 py-2 hover:bg-accent hover:text-white"
                                >
                                    Refer a Minister in Need
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to='/impact' className='block mb-4 text-white hover:text-accent'>Impact and Success Report</Link>
                    <Link to='/register' className='block mb-4 text-white hover:text-accent'>Register For Support</Link>

                    {/* New "Contact Us" Link in Sidebar */}
                    <Link to='/contact' className='block mb-4 text-white hover:text-accent'>Contact Us</Link>

                    <Button text={"Donate"} bg={"bg-accent"} width={170} />
                </div>
            </div>

            {/* Background Overlay */}
            {open && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
};
