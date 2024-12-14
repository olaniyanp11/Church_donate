import { Link } from "react-router-dom";
import React from "react";

export const Button = ({
    bg = "bg-blue-500",
    text,
    path = "/",
    textColor = "white",
    width,
    border,
    bcolor,
    onClick
}) => {
    return (
        <Link
            to={path}
            onClick={onClick}
            className={`${bg} text-${textColor} p-2 px-7 ${width ? `w-[${width}px]` : `w-full`} text-center rounded-sm ${border ? `border border-${bcolor}` : ""}`}
        >
            {text}
        </Link>
    );
};
