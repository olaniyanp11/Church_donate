import React from 'react';
import { motion } from 'framer-motion';  // Import framer-motion
import Main from "../assets/about.jpg";
import { Nav } from '../components/Nav';
import { Link } from 'react-router-dom';
import { Mission } from '../components/Mission';
import Footer from '../components/Footer';
import { Button } from '../components/Button';

const About = () => {
  return (
    <>
      <Nav textColor='black' shadow={true} />
      <div className="px-5 py-5">
        <motion.div
          className="w-full back h-[20vh] bg-top rounded-3xl bg-cover flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-white font-bold text-[35px]'>About Us</h2>
        </motion.div>
      </div>

      <section className='bg-white w-full gap-4 pb-10'>
        <motion.h2
          className='text-[23px] sm:text-[35px] font-bold text-accent text-center py-10 leading-[1.2] px-4 sm:px-[20%]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Restoring Hope, <span className='text-primary font-bold'>Renewing Strength:</span> Transforming Ministers for Greater Impact.
        </motion.h2>

        <div className='flex flex-col-reverse sm:flex-row w-full items-center md:px-[100px] gap-8'>
          <motion.div
            className="flex flex-col px-5 items-start sm:w-1/2 gap-5"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className='text-[25px] font-bold text-accent text-center leading-[0.1]'>Who We Are?</h2>
            <p className='tracking-wider md:text-[18px] xl:text-[20px]'>
              The ISM Ministers’ Support Initiative is a global outreach program dedicated to supporting ministers of the gospel in dire need. We believe that every minister deserves the strength and resources to fulfill their divine calling. Through practical assistance, mentorship, and spiritual training, we stand with ministers facing challenging circumstances, ensuring they remain equipped to lead and inspire their congregations.
            </p>
          </motion.div>

          <motion.div
            className='px-5 sm:w-1/2'
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={Main} alt="" className='w-full rounded-[50px]' />
          </motion.div>
        </div>
      </section>

      <Mission />

      <section className="w-full px-8 py-12 bg-accent">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            What We Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">What We Do</h3>
              <ul className="space-y-2">
                <li>Providing tailored support through financial aid and resources.</li>
                <li>Offering foundational training with ISM’s specialized resources.</li>
                <li>Connecting ministers with experienced mentors in their regions.</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
              <ul className="space-y-2">
                <li>Reaching countless ministers with timely aid and guidance.</li>
                <li>Strengthening ministries and revitalizing communities.</li>
                <li>Facilitating partnerships that create lasting change.</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
              <ul className="space-y-2">
                <li>Standing with ministers in their time of need.</li>
                <li>Ensuring they experience the love and provision of Christ.</li>
                <li>Relying on the generosity of our supporters.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='bg-secondary w-full py-10 sm:px-24 px-5'>
        <div className='flex flex-col w-full items-center md:px-[100px] gap-8 text-center'>
          <motion.div
            className="flex flex-col px-5 items-center gap-4"
            initial={{ opacity: 0 }}

            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <h2 className='text-[25px] font-bold text-accent leading-[1.3]'>Join Us</h2>
            <p className='tracking-wider md:text-[18px] xl:text-[20px]'>
              Join us in making a difference. Whether you’re a minister seeking help, someone who knows a minister in need, or a supporter with a heart to give, you can play a part in this life-changing initiative.
            </p>
            <Link to="/register" className="inline-block bg-accent text-white px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all w-[300px]">
              Join Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
