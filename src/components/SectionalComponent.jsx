import React from 'react';
import { Link } from 'react-router-dom';

export const SectionalComponent = ({
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    buttonWidth,
    reverse = false,
}) => {
    return (
        <section className="bg-secondary w-full gap-4 pb-10">
            <h2 className="text-[30px] font-bold text-primary text-center py-7">{title}</h2>
            <div
                className={`flex flex-col sm:flex-row w-full items-center md:px-[100px] gap-8 ${
                    reverse ? 'sm:flex-row-reverse flex-col-reverse' : ''
                }`}
            >
                <div className="flex flex-col px-5 items-start sm:w-1/2 gap-1">
                    {/* Mapping description array */}
                    {Array.isArray(description) ? (
                        description.map((line, index) => (
                            <p key={index} className="tracking-wider md:text-[16px] xl:text-[18px]">
                                {line}
                            </p>
                        ))
                    ) : (
                        <p className="tracking-wider md:text-[16px] xl:text-[18px]">{description}</p>
                    )}
                    <Link
                        to={buttonLink}
                        className={`bg-accent p-2 text-white px-10 text-center w-[${
                            buttonWidth ? `${buttonWidth}` : `250`
                        }]`}
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
