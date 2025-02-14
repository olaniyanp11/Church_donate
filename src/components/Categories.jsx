import React from "react";
import { FaDrum, FaUtensils, FaMicrophone } from "react-icons/fa";
import Food from "../assets/two.jpg";
import Music from "../assets/five.jpg";
import Custom from "../assets/seven.jpg";
import Speak from "../assets/mixer.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Categories = () => {
    const navigate = useNavigate();
    const categories = [
        {
            title: "Category A : Food Relief",
            icon: <FaUtensils size={30} className="text-primary" />,
            description:
                "We provide ministers with food items to support them and their families for one month. Each package is valued at $150 and offers essential sustenance to ministers working in challenging conditions. Every minister supported in this category also receives access to a one-month foundational training program at the ISM Online School.",
            cta: "Support A Minister with Food Relief Today!",
            image:Food
        },
        {
            title: "Category B : Musical Instruments",
            icon: <FaDrum size={30} className="text-primary" />,
            description:
                "Music plays a vital role in worship and ministry. In this category, we provide ministers with essential musical equipment, including drum sets and keyboards, valued at $1,000. Ministers in this category will also receive a one-month foundational training program at the ISM Online School to enhance their ministry effectiveness.",
            cta: "Support A Minister with Musical Instruments Today!",
            image: Music,
        },
        {
            title: "Category C : Custom Support",
            icon: <FaMicrophone size={30} className="text-primary" />,
            description:
                "Every minister's need is unique. While some require food relief, musical instruments, or multimedia equipment, others may have specific challenges that demand personalized support.With the Custom Support Category, you have the opportunity to sponsor a minister in a way that directly addresses their most urgent and specific needs—whether it’s helping with church infrastructure, ministry resources, transportation, or any other essential requirement that empowers them to continue their work in the Gospel.",
            cta: "Support A Minister with Multimedia and Sound!",
            image: Custom
        },
        {
            title: "Category D : Multimedia and Sound Systems",
            icon: <FaMicrophone size={30} className="text-primary" />,
            description:
                "Modern ministry often relies on effective communication tools. This category provides ministers with multimedia and sound equipment, including microphones, speakers, projectors, and projector screens. Ministers supported here will also gain access to a one-month foundational training program at the ISM Online School, helping them maximize the impact of their ministry tools.",
            cta: "Support A Ministers Unique need",
            image: Speak
        },
    ];

    return (
        <>
            <div className="bg-gray-100 pt-10 px-4 md:px-12 lg:px-10 flex-col flex justify-center items-center">
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-3xl font-bold text-center mb-2 text-accent"
                >
                    Categories of Support
                </motion.h2>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center text-gray-600 mb-12 w-[80%]"
                >
                    We've designed our support to meet specific needs, categorized into four impactful areas. Explore the categories below and see how you can make a difference:
                </motion.p>
            </div>

            {categories.map((category, index) => (
                <section
                    key={index}
                    className={`sm:px-20 px-4 py-8 ${index % 2 !== 0 ? "bg-accent text-white" : ""}`}
                >
                    <motion.div
                     
                        
                        className={`sm:flex-row${index % 2 !== 0 ? "-reverse" : ""} flex justify-center relative w-full gap-10 items-center flex-col`}
                    >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                            className="sm:w-1/2 w-full py-5">
                            <img src={category.image} alt={category.title} className="sm:w-[90%] w-full rounded-md" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="sm:w-1/2 w-full text-lg tracking-normal">
                            <h1 className={`font-bold text-2xl mb-2 px-4 border-l-4 ${index % 2 !== 0 ? "border-l-white" : "border-l-accent text-accent"}`}>
                                {category.title}
                            </h1>
                            {category.description}
                            <br />
                            <button
                                onClick={() => navigate("/refer-minister")}
                                className={`px-8 py-2 rounded-md mt-3 transition-all duration-300 ${index % 2 !== 0
                                        ? "bg-white text-accent font-bold hover:bg-accent hover:text-white hover:border"
                                        : "bg-accent text-white"
                                    }`}
                            >
                                {category.cta}
                            </button>
                        </motion.div>
                    </motion.div>
                </section>
            ))}
        </>
    );
};

export default Categories;
