import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Nav } from "./Nav";

export const Hero = ({ isLoading }) => {
    return (
        <div className="main w-full bg-cover pb-10 bg-no-repeat bg-fixed bg-center">
            <Nav />
            <section className="w-full flex justify-start items-center h-screen sm:px-10">
                <div className="md:w-[60%] w-[90%] backdrop-blur-sm pl-5 text-white flex flex-col gap-3 sm:p-7 sm:px-10">
                    {/* Animated title */}
                    <motion.h2
                        className="font-bold sm:text-[56px] text-[30px] leading-[1.1] sm:leading-[1.1]"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: -50, opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
                    >
                        Supporting Ministers in Need, Empowering the Gospel
                    </motion.h2>

                    {/* Animated subtitle */}
                    <motion.h3
                        className="text-[20px]"
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: -50, opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
                    >
                        Join us in offering vital support to ministers worldwide—through donations, referrals, and more.
                    </motion.h3>

                    {/* Animated buttons */}
                    <div className="w-full flex gap-2 sm:gap-10 flex-wrap">
                        <motion.Link
                            to="/"
                            className="bg-accent p-2 text-white px-10 text-center w-full sm:w-[300px]"
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
                        >
                            Support now
                        </motion.Link>

                        <motion.Link
                            to="/"
                            className="bg-transparent border p-2 text-white px-10 text-center w-full sm:w-[300px]"
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
                        >
                            I am A Minister in Need
                        </motion.Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
