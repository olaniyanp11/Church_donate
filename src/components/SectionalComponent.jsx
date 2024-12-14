import React from 'react';
import { Link } from 'react-router-dom';

export const SectionalComponent = ({
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    reverse = false,
}) => {
    return (
        <section className="bg-secondary w-full gap-4 pb-10">
            <h2 className="text-[30px] font-bold text-primary text-center py-7">{title}</h2>
            <div
                className={`flex flex-col sm:flex-row w-full items-center md:px-[100px] gap-8 ${reverse ? 'sm:flex-row-reverse flex-col-reverse' : ''
                    }`}
            >
                <div className="flex flex-col px-5 items-start sm:w-1/2 gap-5">
                    <p className="tracking-wider md:text-[18px] xl:text-[20px]">{description}</p>
                    <Link
                        to={buttonLink}
                        className="bg-accent p-2 text-white px-10 text-center w-[250px]"
                    >
                        {buttonText}
                    </Link>
                </div>
                <div className="px-5 sm:w-1/2">
                    <img src={imageSrc} alt={imageAlt} className="w-full" />
                </div>
            </div>
        </section>
    );
};
