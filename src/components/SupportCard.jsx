import React from 'react';
import { Link } from 'react-router-dom';

export const SupportCard = ({ title, description, extraText, linkText, linkUrl }) => {
    return (
        <div className="bg-accent text-center px-5 sm:px-[25%] py-6 shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-lg text-white mb-2">{description}</p>
            {extraText && <p className="text-lg text-white mb-6">{extraText}</p>}
            <Link
                to={linkUrl}
                className="inline-block animate-bounce bg-white text-accent px-8 py-3 text-lg font-semibold rounded-md text-center shadow-md hover:shadow-xl transition-all"
            >
                {linkText}
            </Link>
        </div>
    );
};

