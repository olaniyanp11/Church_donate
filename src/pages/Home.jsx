import React from 'react'
import { Hero } from '../components/Hero'
import { AboutSec } from '../components/AboutSec/AboutSec'
import Footer from '../components/Footer'
import { How } from '../components/How'
import { SupportCard } from "../components/SupportCard"
import { Video } from "../components/Video"
import Vid from "../assets/hold.mp4"
import { SectionalComponent } from "../components/SectionalComponent"
import ReferralImage from "../assets/second.jpg";
import Categories from '../components/Categories'
const Home = () => {
    return (
        <>

            <Hero />
            <AboutSec />
            <Categories />
            <How />
            <SupportCard
                title="Give to Support Ministers in Need"
                description="Partner with us to make a difference. Your donations provide crucial support to ministers around the world. Visit our donation page to contribute securely and help us reach more ministers in need."
                extraText="Every gift counts, and together, we can create lasting impact."
                linkText="Get Involved"
                linkUrl="https://bit.ly/ISM-Ministers-Support"
                reverse={true}
            />
            <Video
                videoSrc={Vid}
                heading="Donate Today, Empower a Minister"
                description="Your generous donation will help ministers in need with essential resources such as training, financial support, and more. Together, we can empower them to spread the gospel without limitations."
                buttonText="Donate Now"
                buttonLink="https://bit.ly/ISM-Ministers-Support"
                overlayColor="#000000cc"
            />
            <SectionalComponent
                title="Know a Minister in Need? Refer Them Today"
                description="If you know a minister facing challenges, help us support them by referring them to the program. We will provide the resources they need to continue their work."
                buttonText="Refer a Minister"
                buttonLink="/refer-minister"
                imageSrc={ReferralImage}
                imageAlt="Minister referral"
                reverse={true} />
            <Footer />

        </>
    )
}
export default Home