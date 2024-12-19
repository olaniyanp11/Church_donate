import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Video = ({
    videoSrc,
    heading,
    description,
    buttonText,
    buttonLink,
    overlayColor = '#000000cc'
}) => {
    return (
        <div className='flex justify-center w-full p-5'>
            <motion.div
                initial={{ z: 1000, y: 100 }}
                whileInView={{ z: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className='w-full max-w-[1200px] relative h-[75vh] md:h-screen rounded-2xl'>
                {/* Video */}
                <video
                    src={videoSrc}
                    loop
                    autoPlay
                    muted
                    className='w-full h-full absolute top-0 left-0 rounded-2xl object-cover'
                ></video>

                {/* Overlay */}
                <div
                    className={`absolute top-0 w-full h-full z-10 flex rounded-2xl`}
                    style={{ backgroundColor: overlayColor }}
                >
                    <div className='text-white z-30 text-center flex flex-col justify-center px-[10%] md:px-[20%] gap-3 items-center'>
                        {/* Heading */}
                        <motion.h2
                            className='font-bold text-[30px] md:text-[50px] leading-[1.2]'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{once:true}}
                            transition={{ duration: 0.8 }}
                        >
                            {heading}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className='text-[16px] md:text-[20px]'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{once:true}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {description}
                        </motion.p>

                        {/* Button */}
                        <Link
                            to={buttonLink}
                            className='bg-white py-2 px-4 w-auto md:w-[200px] text-black font-bold text-center rounded-md shadow-md hover:shadow-xl transition-all'
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
