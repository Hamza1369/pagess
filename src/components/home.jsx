import React, { useEffect, useState } from "react";
import Bg from "../img/bg.jpg";
import Cookies from "js-cookie";

const Home = (props) => {
    const [selectedChapter, setSelectedChapter] = useState("");
    useEffect(() => {
        const storedChapter = Cookies.get("selectedChapter");
        if (storedChapter) {
            setSelectedChapter(storedChapter);
        }
    }, []);
    const handleChapterClick = (chapter, ind) => {
        // Set the selected chapter in state and cookies
        setSelectedChapter(ind);
        props?.setSelec(chapter);
        Cookies.set("selectedChapter", chapter, { expires: 7 }); // Store the chapter in cookies for 7 days
    };
    return (
        <div className="MAIN">
            <div className="BGimg">
                <div className="parad">
                    <h1 className="parad1">PARANOIZE</h1>
                </div>
            </div>
            <div
                className={`flex justify-start items-center gap-7 flex-wrap max-w-[70%] mx-auto `}
            >
                <h1 className="chapt">10 Chapters</h1>
            </div>
            <div className="">
                {props?.data && props?.data?.map((d, index) => (
                    <div
                        className={`flex justify-start items-center gap-7 flex-wrap max-w-[70%] mx-auto my-[20px] ${selectedChapter === d?.Title ? "active" : ""
                            }`}
                        onClick={() => handleChapterClick(d?.Title, index)}
                    >
                        <img src={d?.image} alt="" className="w-[150px] h-[70px] rounded-lg " />{" "}
                        <div>{d?.Tittle}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
