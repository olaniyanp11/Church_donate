import React from 'react';
import { motion } from 'framer-motion';

export const Mission = () => {
    return (
        <section className='bg-secondary w-full py-10 sm:px-24 px-5'>
            <div className='flex w-full items-center justify-center md:px-[100px] gap-8 text-center'>
                <div className='flex flex-col sm:flex-row w-full gap-8'>
                    <motion.div
                        className='flex flex-col items-center'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-[25px] font-bold text-accent leading-[1.3]'>Our Mission</h2>
                        <p className='tracking-wider md:text-[18px] xl:text-[20px]'>
                            To restore hope and provide essential support to ministers of the gospel in critical need, enabling them to continue their divine mandate with strength and confidence.
                        </p>
                    </motion.div>
                    <motion.div
                        className='flex flex-col items-center'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-[25px] font-bold text-accent leading-[1.3]'>Our Vision</h2>
                        <p className='tracking-wider md:text-[18px] xl:text-[20px]'>
                            To create a global community where no minister of the gospel is left without the support and resources needed to thrive and fulfill their calling.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
