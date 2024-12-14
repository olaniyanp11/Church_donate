import React from 'react'
import { Button } from '../Button'
import About from "../../assets/group.jpg"
import { Link } from 'react-router-dom'

export const AboutSec = () => {
    return (
        <>

            <section className='bg-secondary w-full  gap-4 pb-10'>
                <h2 className='text-[30px] font-bold text-primary text-center py-7'> About the Initiative</h2>
                <div className='flex flex-col sm:flex-row w-full items-center md:px-[100px] gap-8 '>
                    <div className="flex flex-col px-5 items-start sm:w-1/2 gap-5">
                        <p className='tracking-wider md:text-[18px] xl:text-[20px]'>The Ministers Support Program is dedicated to helping ministers facing financial challenges, lack of resources, or other challenges, so they can continue their important work in spreading the gospel. With your support, we provide resources, training, and financial aid to help ministers thrive and be effective in ministry.</p>
                        <Link to='/' className=" bg-accent p-2 text-white px-10 text-center w-[250px] ">Learn more</Link>
                    </div> 
                    <div className='px-5 sm:w-1/2'>
                        <img src={About} alt="" className='w-full' />
                    </div>
                </div>
            </section>

        </>
    )
}
