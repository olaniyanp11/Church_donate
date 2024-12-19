import React, { useState } from "react";
import { useForm } from "react-hook-form"; // Import react-hook-form
import axios from "axios";
import Logo from "/logo.png";

const ChurchForm = () => {
    // State for form submission status
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loading state

    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Handle form submission
    const onSubmit = async (data) => {
        setIsLoading(true); // Set loading state immediately when form is being submitted

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === "photos" && value.length > 0) {
                Array.from(value).forEach((file) => formData.append(key, file));
            } else {
                formData.append(key, value);
            }
        });

        try {
            const response = await axios.post("./support.php", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Handle file upload
                },
            });

            if (response.status === 200) {
                setSubmissionStatus("success");
                reset(); // Reset the form on successful submission
            }
        } catch (error) {
            setSubmissionStatus("error");
            setErrorMessage(error.response ? error.response.data.message : "Something went wrong");
        }

        setIsLoading(false);
        setIsSubmitted(true); // Trigger popup after submission
    };

    const closePopup = () => {
        setIsSubmitted(false);
        setSubmissionStatus(null);
        setErrorMessage("");
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
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="full-name"
                                    name="fullName"
                                    type="text"
                                    {...register("fullName", { required: "Full Name is required" })}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                    placeholder="Enter your full name"
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="ministry-name" className="block text-sm font-medium text-gray-900">
                                Ministry Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="ministry-name"
                                    name="ministryName"
                                    type="text"
                                    {...register("ministryName", { required: "Ministry Name is required" })}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                    placeholder="Enter your ministry name"
                                />
                                {errors.ministryName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.ministryName.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                    placeholder="Enter your email"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="challenges" className="block text-sm font-medium text-gray-900">
                                Challenges Faced
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="challenges"
                                    name="challenges"
                                    {...register("challenges", { required: "Challenges are required" })}
                                    rows="4"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primary"
                                    placeholder="Briefly describe the challenges you are facing"
                                ></textarea>
                                {errors.challenges && (
                                    <p className="text-red-500 text-xs mt-1">{errors.challenges.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="video" className="block text-sm font-medium text-gray-900">
                                Video URL (Optional)
                            </label>
                            <input
                                id="video"
                                name="video"
                                type="text"
                                {...register("video")}
                                className="block w-full text-gray-900"
                                placeholder="Enter the URL to your video"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="photos" className="block text-sm font-medium text-gray-900">
                                Upload Photos
                            </label>
                            <div className="mt-2">
                                <input
                                    id="photos"
                                    name="photos"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    {...register("photos")}
                                    className="block w-full text-gray-900"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading} // Disable the button when loading
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-3 text-white text-sm font-semibold shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                {isLoading ? "Loading..." : "Submit Application"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Loading Popup */}
            {isLoading && (
                <div className="fixed inset-0 bg-primary bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-xl font-semibold">Sending your message...</p>
                        <div className="mt-4">
                            <div className="animate-spin rounded-full border-t-4 border-primary h-16 w-16 mx-auto"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirmation Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                        {submissionStatus === "success" ? (
                            <>
                                <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
                                <p className="text-gray-700">
                                    Your application has been successfully submitted. Our team will
                                    review it and get back to you shortly.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-red-500 mb-4">Submission Failed</h2>
                                <p className="text-gray-700">
                                    {errorMessage || "Something went wrong. Please try again."}
                                </p>
                            </>
                        )}
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
