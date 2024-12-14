import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Nav } from "./Nav";

export const Hero = () => {
    return (
        <>
            <div className="main w-full bg-cover pb-10 bg-no-repeat bg-fixed bg-center">
                <Nav />
                <section className="w-full flex justify-start items-center h-screen sm:px-10">
                    <div className="md:w-[60%] w-[90%] backdrop-blur-sm pl-5 text-white flex flex-col gap-3 sm:p-7 sm:px-10">
                        <h2 className="font-bold sm:text-[56px] text-[30px] leading-[1.1] sm:leading-[1.1]">
                            Supporting Ministers in Need, Empowering the Gospel
                        </h2>
                        <h3 className="text-[20px]">
                            Join us in offering vital support to ministers worldwide—through donations, referrals, and more.
                        </h3>
                        <div className="w-full flex gap-2 sm:gap-10 flex-wrap">

                            <Link to='/' className=" bg-accent p-2 text-white px-10 text-center w-full sm:w-[300px] ">Support now</Link>
                            <Link to='/' className=" bg-transparent border p-2 text-white px-10 text-center  w-full sm:w-[300px]  ">I am A Minister in Need </Link>


                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
