import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BiMenu } from 'react-icons/bi';

export const Nav = () => {
    const [open, setOpen] = useState(false);

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
            <nav className='w-full h-[10vh] justify-between px-10 items-center text-white flex text-[14px] uppercase'>
                <h2 className='font-bold text-[20px]'>Logo</h2>
                <div className='gap-6 items-center hidden md:flex'>
                    <Link to='/' className='hover:text-accent'>Home</Link>
                    <Link to='/' className='hover:text-accent'>About</Link>
                    <Link to='/' className='hover:text-accent'>Support Us</Link>
                    <Link to='/' className='hover:text-accent'>Impact and Success Report</Link>
                    <Link to='/' className='hover:text-accent'>Register For Support</Link>
                    <Button text={"Donate"} bg={"bg-accent"} width={170} />
                </div>
                <BiMenu
                    className={`md:hidden text-[30px] flex text-white cursor-pointer`}
                    onClick={() => setOpen(true)}
                />
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] bg-trasparent backdrop-blur-md text-white shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} z-50`}
            >
                <div className="flex justify-end p-3 px-[15%]">
                    <button onClick={() => setOpen(false)} className="text-[35px]">&times;</button>
                </div>
                <div className='flex w-full items-center flex-col mt-[30%]'>
                    <Link to='/' className='block mb-4 text-white hover:text-accent'>Home</Link>
                    <Link to='/' className='block mb-4 text-white hover:text-accent'>About</Link>
                    <Link to='/' className='block mb-4 text-white hover:text-accent'>Support Us</Link>
                    <Link to='/' className='block mb-4 text-white hover:text-accent'>Impact and Success Report</Link>
                    <Link to='/' className='block mb-4 text-white hover:text-accent'>Register For Support</Link>
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
