import React from 'react'
import { Nav } from '../components/Nav'
import Footer from '../components/Footer'
import Main from "../assets/chr.jpg"
import Money from "../assets/group.png"
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { SectionalComponent } from '../components/SectionalComponent'
import Pastor from "../assets/pastor.webp"

const HowToSupport = () => {
    return (
        <>
            <Nav textColor='black' />
            <div className="relative w-full py-10 flex justify-center items-center">
                <img src={Main} className='absolute top-0 object-cover h-full w-full' alt="" />
                <div className='w-full h-full absolute bg-[#00000065] top-0'></div>
                <div className=' backdrop-blur-md text-white sm:px-[20%]  py-8 pl-5 pr-2'>
                    <h2 className='text-[30px] sm:text-[30px] leading-[1.3] font-medium  sm:text-center text-left'>Together, We Can Make a Difference: Be the Light That Ministers Need.</h2>
                    <p className='text-left sm:text-center'>
                        Your support can transform the lives of ministers who are tirelessly serving their congregations but find themselves in dire need. Whether by giving financially or referring a minister in need, you play a vital role in restoring hope and strengthening ministries around the world.
                    </p>
                </div>
            </div>

            <section className="sm:w-[80%] w-[100%]  py-10 px-7 sm:pl-32 text-white bg-accent flex flex-col gap-4 items-start rounded-sm sm:rounded-r-full ">
                <h2 className="text-center text-white font-bold text-[29px] ">
                    Give to Support
                </h2>
                <p className='sm:w-[80%] w-full'>
                    Your financial contribution directly impacts ministers facing critical challenges. By giving, you enable us to provide essential resources, training, and mentorship that empower them to thrive in their calling.
                </p>
                <ol className='sm:w-[80%] w-full' start={1} type='circle'>
                    <li>Sponsor a minister in need.</li>
                    <li>Support outreach programs and training.</li>
                    <li>Make a one-time gift or set up recurring donations.</li>
                </ol>
                <Link to="#" className='bg-white text-accent p-2 px-7 font-medium'>Learn More & Give Now</Link>
            </section>
            <SectionalComponent
                title={"Refer a Minister in Need"}
                imageSrc={Pastor}
                buttonWidth={300}
                buttonText={"Learn More & Refer Now"}
                buttonLink={"#"}
                description={[
                    "Do you know a minister struggling to make ends meet?", " Your referral could be the lifeline they need. Help us identify those who could benefit from this initiative by sharing their story.",
                    "Record a short video highlighting their situation.",
                    "Submit their details via email to support@ismministerssupport.org."
                ]}
            />
            <section className="w-full py-10 sm:px-28 px-4 sm:pl-32 text-white bg-primary flex flex-col md:flex-row-reverse   items-center gap-24 rounded-md animate-fadeIn">
                {/* Text Column */}
                <div className="flex flex-col items-start md:w-1/2 gap-6">
                    <h2 className="text-center text-white font-bold text-[29px]">
                        Give to Support
                    </h2>
                    <p className="sm:w-[80%] w-full text-left">
                        Your financial contribution directly impacts ministers facing critical challenges. By giving, you enable us to provide essential resources, training, and mentorship that empower them to thrive in their calling.
                    </p>
                    <ol className="sm:w-[80%] w-full text-left" start={1} type="circle">
                        <li>Sponsor a minister in need.</li>
                        <li>Support outreach programs and training.</li>
                        <li>Make a one-time gift or set up recurring donations.</li>
                    </ol>
                    <Link to="#" className="bg-white text-accent p-2 px-7 font-medium">
                        Learn More & Give Now
                    </Link>
                </div>

                {/* Image Column */}
                <div className="md:w-1/2 transform transition-all duration-500 hover:scale-105">
                    <img
                        src={Money}
                        alt="Supporting Ministers"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </section>


            <Footer />
        </>
    )
}
export default HowToSupport
