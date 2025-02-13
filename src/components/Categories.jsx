import React from "react";
import { FaDrum, FaUtensils, FaMicrophone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate()
    const categories = [
        {
            title: "Category A : Food Relief",
            icon: <FaUtensils size={30} className="text-primary" />,
            description:
                "We provide ministers with food items to support them and their families for one month. Each package is valued at $150 and offers essential sustenance to ministers working in challenging conditions. Every minister supported in this category also receives access to a one-month foundational training program at the ISM Online School.",
            cta: "Support A Minister with Food Relief Today!",
        },
        {
            title: "Category B : Musical Instruments",
            icon: <FaDrum size={30} className="text-primary" />,
            description:
                "Music plays a vital role in worship and ministry. In this category, we provide ministers with essential musical equipment, including drum sets and keyboards, valued at $1,000. Ministers in this category will also receive a one-month foundational training program at the ISM Online School to enhance their ministry effectiveness.",
            cta: "Support A Minister with Musical Instruments Today!",
        },
        {
            title: "Category C : Custom Support",
            icon: <FaMicrophone size={30} className="text-primary" />,
            description:
                "Every minister's need is unique. While some require food relief, musical instruments, or multimedia equipment, others may have specific challenges that demand personalized support.With the Custom Support Category, you have the opportunity to sponsor a minister in a way that directly addresses their most urgent and specific needs—whether it’s helping with church infrastructure, ministry resources, transportation, or any other essential requirement that empowers them to continue their work in the Gospel.",
            cta: "Support A Minister with Multimedia and Sound!",
        },
        {
            title: "Category D : Multimedia and Sound Systems",
            icon: <FaMicrophone size={30} className="text-primary" />,
            description:
                "Modern ministry often relies on effective communication tools. This category provides ministers with multimedia and sound equipment, including microphones, speakers, projectors, and projector screens. Ministers supported here will also gain access to a one-month foundational training program at the ISM Online School, helping them maximize the impact of their ministry tools.",
            cta: "Support A Ministers Unique need",
        },
    ];

    return (
        <div className="bg-gray-100 py-10 px-4 md:px-12 lg:px-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-accent">Categories of Support</h2>
            <p className="text-center text-gray-600 mb-12">
                We've designed our support to meet specific needs, categorized into three impactful areas. Explore the categories below and see how you can make a difference:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-5 sm:px-10">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white shadow-md rounded-lg p-6 text-left flex flex-col justify-between "
                    >
                        {/* <div className="mb-4">{category.icon}</div> */}
                        <h3 className="text-xl font-bold mb-4 text-accent ">{category.title}</h3>
                        <p className="text-gray-600 mb-6 text-md">{category.description}</p>
                        <button className="bg-accent text-white py-2 px-4 rounded hover:bg-[#26688f] " onClick={() => navigate('/refer-minister')}>
                            {category.cta}
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
