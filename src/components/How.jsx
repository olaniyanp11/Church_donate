import { Link } from "react-router-dom";

export const How = () => {
    return (
        <section className="w-full py-20 back bg-no-repeat bg-cover">
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">How It Works</h2>
                <p className="text-lg sm:text-xl text-white opacity-90">
                    Follow these simple steps to help ministers in need and join our mission to make a difference.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12 px-5 sm:px-10">

                {/* How a Minister in Need Can Sign Up */}
                <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 transform hover:scale-105 transition-all duration-300 relative">
                    <h3 className="text-2xl font-semibold text-accent">How a Minister in Need Can Sign Up</h3>
                    <p className="text-lg text-primary flex flex-wrap">
                        Ministers facing challenges can share their story by sending a short video explaining their situation and why they need support. Email your video to
                        <span className="text-accent"> support@ismministers
                            support.org</span>
                    </p>
                    <p className="text-lg text-primary">
                        Once received, our team will carefully review and reach out for further instructions if approved.
                    </p>
                    <Link to="/register" className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all">
                        Register as a Minister in Need
                    </Link>
                </div>

                {/* How We Support Ministers in Need */}
                <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between gap-6 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-accent w-full">How We Support Ministers in Need</h3>
                    <p className="text-lg text-primary ">
                        We connect approved ministers with an ISM pastor in their region who will provide foundational training and specialized ISM resources to strengthen their ministry and support their specific needs.
                    </p>
                    <Link to="/impact-report" className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all">
                        See our Impact Report
                    </Link>
                </div>

                {/* Refer Ministers in Need */}
                <div className="bg-white p-8 rounded-2xl shadow-lg justify-between flex flex-col gap-6 transform hover:scale-105 transition-all duration-300 relative">
                    <h3 className="text-2xl font-semibold text-accent">Refer Ministers in Need</h3>
                    <p className="text-lg text-primary">
                        Do you know a minister who needs help? Record a video sharing their story and why they should receive support. Send the video to
                        <span className="text-accent"> support@ismministers
                            support.org</span>
                    </p>
                    <p className="text-lg text-primary">
                        Together, we can bring hope and relief to ministers in difficult situations.
                    </p>
                    <Link to="/refer" className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all">
                        Refer A Minister in Need
                    </Link>
                </div>

                {/* Give to Support Ministers in Need */}
                {/* <div className="bg-white p-8 rounded-2xl justify-between shadow-lg flex flex-col gap-6 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-accent">Give to Support Ministers in Need</h3>
                    <p className="text-lg text-primary">
                        Partner with us to make a difference. Your donations provide crucial support to ministers around the world. Visit our <a href="/donate" className="text-primary font-bold">donation page</a> to contribute securely and help us reach more ministers in need.
                    </p>
                    <p className="text-lg text-primary">
                        Every gift counts, and together, we can create lasting impact.
                    </p>
                    <Link to="/donate" className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all">
                        Get Involved
                    </Link>
                </div> */}

            </div>
        </section>
    );
};
