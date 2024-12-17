import React, { useState } from "react";
import Main from "../assets/about.jpg";

export default function TestimonialsSlider() {
    // State to manage the current index of the displayed testimonial
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of testimonials
    const testimonials = [
        {
            quote: "“Your support came at a time when I had almost given up. Today, I stand stronger in faith and ministry.”",
            name: "Minister John",
            country: "Ghana",
        },
        {
            quote: "“The training I received was a game-changer. Thank you for giving me a second chance.”",
            name: "Pastor Sarah",
            country: "Nigeria",
        },
        {
            quote: "“Being part of this program helped me bring my vision to life. Forever grateful!”",
            name: "Rev. James",
            country: "Kenya",
        },
        {
            quote: "“The mentorship opened doors I never thought possible. Thank you for this gift.”",
            name: "Pastor Grace",
            country: "Uganda",
        },
    ];

    // Function to go to the next testimonial
    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    // Function to go to the previous testimonial
    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative backdrop-blur-md py-12 px-6 w-full lg:py-16 overflow-hidden">
            {/* Blurred Background */}
            <div>
                <img
                    src={Main}
                    alt="Background"
                    className="absolute top-0 w-full h-full object-cover blur-sm"
                />
            </div>
            <div className="w-full h-full absolute bg-[#00000065] top-0"></div>

            {/* Content */}
            <div className="relative max-w-6xl mx-auto text-center z-10">
                <h2 className="text-2xl font-bold text-white">Testimonials</h2>

                {/* Testimonial Slider */}
                <div className="mt-8 overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="min-w-full">
                                <blockquote className="text-lg text-white italic">
                                    {testimonial.quote}
                                </blockquote>
                                <p className="mt-2 text-white font-bold">
                                    – {testimonial.name}, {testimonial.country}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Left and Right Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
                    >
                        &#8250;
                    </button>
                </div>

                {/* Call to Action */}
                <button className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors">
                    Watch Video Testimonials
                </button>
            </div>
        </section>
    );
}
