import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
    const imageDivRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                markers: true,
                start: "top 28%",
                end: "top -75%",
                pin: true,
                scrub: true,
            },
        });
    });

    const imageRef = useRef(null);

    return (
        <div>
            <div className="section1">
                <div
                    ref={imageDivRef}
                    className="h-[20vw] w-[15vw] absolute top-72 left-[30vw] rounded-[20px] overflow-hidden"
                >
                    <img
                        ref={imageRef}
                        className="h-full w-full object-cover"
                        src="./images/agency1.jpg"
                    ></img>
                </div>
                <div className="font-[font2] relative">
                    <div className="mt-[55vh]">
                        <h1 className="text-[19vw] uppercase leading-[17vw] text-center">
                            SEVEN7Y <br></br> TWO
                        </h1>
                    </div>
                    <div className="pl-[40%] font-[font1]">
                        <p className="text-6xl ">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            We’re inquisitive and open-minded, and we make sure
                            creativity crowds out ego from every corner. A brand
                            is a living thing, with values, a personality and a
                            story. If we ignore that, we can achieve short-term
                            success, but not influence that goes the distance.
                            We bring that perspective to every brand story we
                            help tell.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section2 h-screen">
                <div className="h-[20vw] w-[15vw] absolute top-72 left-[30vw] rounded-[20px] overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src="./images/agency1.jpg"
                    ></img>
                </div>
                <div className="font-[font2] relative">
                    <div className="mt-[55vh]">
                        <h1 className="text-[19vw] uppercase leading-[17vw] text-center">
                            SEVEN7Y <br></br> TWO
                        </h1>
                    </div>
                    <div className="pl-[40%] font-[font1]">
                        <p className="text-6xl ">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            We’re inquisitive and open-minded, and we make sure
                            creativity crowds out ego from every corner. A brand
                            is a living thing, with values, a personality and a
                            story. If we ignore that, we can achieve short-term
                            success, but not influence that goes the distance.
                            We bring that perspective to every brand story we
                            help tell.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agence;
