import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
    return (
        <div className="font-[font1] pt-5 text-center ">
            <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8.5vw]">
                The spark for{" "}
            </div>
            <div className="text-[9.5vw] flex items-start justify-center uppercase leading-[8.5vw]">
                all
                <div className="h-[6.5vw] w-[16vw] mt-1 rounded-full overflow-hidden">
                    <Video />
                </div>
                things
            </div>
            <div className="text-[9.5vw] uppercase leading-[8.5vw] flex items-center justify-center">
                creative
            </div>
        </div>
    );
};

export default HomeHeroText;
