import React from 'react';
import { Button } from '../Button';
import About from "../../assets/one.jpg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AboutSec = () => {
    return (
        <section className='bg-secondary w-full gap-4 pb-10'>
            {/* Animated title */}
            <motion.h2
                className='text-[30px] font-bold text-primary text-center py-7'
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                About the Initiative
            </motion.h2>

            <div className='flex flex-col sm:flex-row w-full items-center md:px-[100px] gap-8'>
                {/* Animated text section */}
                <motion.div
                    className="flex flex-col px-5 items-start sm:w-1/2 gap-5"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <p className='tracking-wider md:text-[18px] xl:text-[20px]'>
                        The ISM Ministers’ Support Program is dedicated to providing ministers of the gospel in dire need worldwide with essential support, including food relief, musical instruments, and multimedia equipment, along with a one-month ISM Online School training to equip them for impactful ministry. With your support, we can provide critical resources, training, and financial aid to help these ministers overcome their challenges and continue their divine calling effectively.
                    </p>
                    <Link to='/about' className="bg-accent p-2 text-white px-10 text-center w-[250px]">
                        Learn more
                    </Link>
                </motion.div>

                {/* Animated image */}
                <motion.div
                    className='px-5 sm:w-1/2'
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <img src={About} alt="About the initiative" className='w-full' />
                </motion.div>
            </div>
        </section>
    );
};
