import React, { useState } from "react";
import Logo from "/logo.png"

const ChurchForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); // Trigger the popup on successful submit
    };

    const closePopup = () => {
        setIsSubmitted(false);
    };

    return (
        <>
            {/* Main Form Section */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                    <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-primary">
                        Church Minister Support Form
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="full-name"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="full-name"
                                    name="full-name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="ministry-name"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Ministry Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="ministry-name"
                                    name="ministry-name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                    placeholder="Enter your ministry name"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="challenges"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Challenges Faced
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="challenges"
                                    name="challenges"
                                    required
                                    rows="4"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                    placeholder="Briefly describe the challenges you are facing"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="photos"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Upload Photos
                            </label>
                            <div className="mt-2">
                                <input
                                    id="photos"
                                    name="photos"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="block w-full text-gray-900"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-3 text-white text-sm font-semibold shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Confirmation Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                        <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
                        <p className="text-gray-700">
                            Your application has been successfully submitted. Our team will
                            review it and get back to you shortly.
                        </p>
                        <button
                            onClick={closePopup}
                            className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChurchForm;
