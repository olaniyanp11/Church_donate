import React from 'react';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import Main from "../assets/chr.jpg";
import Money from "../assets/social.jpg";
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { SectionalComponent } from '../components/SectionalComponent';
import Pastor from "../assets/pastor.webp";
import { motion } from 'framer-motion';

const HowToSupport = () => {
    return (
        <>
            <Nav textColor='black' />
            <div className="relative w-full py-10 flex justify-center items-center">
                <img src={Main} className='absolute top-0 object-cover h-full w-full' alt="" />
                <div className='w-full h-full absolute bg-[#00000065] top-0'></div>
                <div className='backdrop-blur-md text-white sm:px-[20%] py-8 pl-5 pr-2'>
                    <motion.h2
                        className='text-[30px] sm:text-[30px] leading-[1.3] font-medium sm:text-center text-left'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Together, We Can Make a Difference: Be the Light That Ministers Need.
                    </motion.h2>
                    <motion.p
                        className='text-left sm:text-center'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Your support can transform the lives of ministers who are tirelessly serving their congregations but find themselves in dire need. Whether by giving financially or referring a minister in need, you play a vital role in restoring hope and strengthening ministries around the world.
                    </motion.p>
                </div>
            </div>

            <section className="sm:w-[80%] w-[100%] py-10 px-7 sm:pl-32 text-white bg-accent flex flex-col gap-4 items-start rounded-sm sm:rounded-r-full">
                <motion.h2
                    className="text-center text-white font-bold text-[29px]"
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Give to Support
                </motion.h2>
                <motion.p
                    className='sm:w-[80%] w-full'
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Your financial contribution directly impacts ministers facing critical challenges. By giving, you enable us to provide essential resources, training, and mentorship that empower them to thrive in their calling.
                </motion.p>
                <motion.ol
                    className='sm:w-[80%] w-full'
                    start={1} type='circle'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}

                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <li>Sponsor a minister in need.</li>
                    <li>Support outreach programs and training.</li>
                    <li>Make a one-time gift or set up recurring donations.</li>
                </motion.ol>
                <Link
                    to="/give-support"
                    className='bg-white text-accent p-2 px-4 font-medium'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}

                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Learn more & Give Now
                </Link>
            </section>

            <SectionalComponent
                title={"Refer a Minister in Need"}
                imageSrc={Pastor}
                buttonWidth={300}
                buttonText={"Learn More & Refer Now"}
                buttonLink={"/refer-minister"}
                description={[
                    "Do you know a minister struggling to make ends meet?",
                    "Your referral could be the lifeline they need. Help us identify those who could benefit from this initiative by sharing their story.",
                    "Record a short video highlighting their situation.",
                    "Submit their details via email to support@ismministerssupport.org."
                ]}
            />

            <motion.section
                className="w-full py-10 sm:px-28 px-4 sm:pl-32 text-white bg-primary flex flex-col md:flex-row-reverse items-center gap-24 rounded-md"
                initial={{ opacity: 0 }}
                viewport={{ once: true }}

                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                {/* Text Column */}
                <div className="flex flex-col items-start md:w-1/2 gap-6">
                    <h2 className="text-center text-white font-bold text-[29px]">
                        Spread the Word
                    </h2>
                    <p className="sm:w-[80%] w-full text-left">
                        Be an advocate for ministers in need by sharing this initiative with your network. Together, we can reach even more people and extend our support further.
                    </p>
                    <Link to="/contact" className="bg-white text-accent p-2 px-7 font-medium">
                        Share on Social Media
                    </Link>
                </div>

                {/* Image Column */}
                <motion.div
                    className="md:w-1/2 transform transition-all duration-500 hover:scale-105"
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img
                        src={Money}
                        alt="Supporting Ministers"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </motion.div>
            </motion.section>

            <Footer />
        </>
    );
};

export default HowToSupport;
