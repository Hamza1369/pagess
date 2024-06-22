import React from "react";
const hg = [
    "https://paranoize.otomeserver.com/AllFrames/e001-1.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-2.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-3.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-4.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-5.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-6.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-7.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-8.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-9.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-10.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-11.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-12.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-13.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-14.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-15.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-16.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-17.png",
    "https://paranoize.otomeserver.com/AllFrames/e001-18.png",
];
const SecondPage = () => {
    return (
        <div className="flex justify-center flex-col items-center w-full gap-5">
            {hg.map((link) => (
                <img src={link} alt="" className="min-w-[375px]  object-contain mx-auto" />
            ))}
        </div>
    );
};

export default SecondPage;
