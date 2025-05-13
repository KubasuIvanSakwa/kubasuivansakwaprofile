import { useState, useRef, useEffect } from "react";
import arrow_down from '../assets/arrow_down.svg';

function Workcard({ duration, company, position }) {
    const [show, setShow] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            if (show) {
                contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
            } else {
                contentRef.current.style.maxHeight = "0px";
            }
        }
    }, [show]);

    return (
        <>
            <div className="bg-[#141414] w-[90%] h-fit p-1 rounded-[0.8rem] border border-[#4B4B4B]">
                {/* Header */}
                <div className="flex items-center gap-1 w-full h-[6rem]">
                    <div className="w-[0.3rem] h-[90%] bg-[#1C1A1A] ml-1 border border-[#4B4B4B]/10"></div>
                    <div className="w-full flex justify-between items-center p-2 h-[90%] bg-gradient-to-r from-[#1C1A1A] to-transparent">
                        <div>
                            <p className='ml-1 font-bold'>{company}</p>
                            <p className='ml-1 font-light text-sm text-white/80'>{duration}</p>
                        </div>
                        <div
                            className='mr-3 rounded-full cursor-pointer w-[2rem] h-[2rem] flex justify-center items-center'
                            onClick={() => setShow(prev => !prev)}
                        >
                            <img src={arrow_down} className={`w-[1.7rem] h-[1.7rem] transition-transform duration-300 ${show ? 'rotate-180' : ''}`} />
                        </div>
                    </div>
                </div>

                {/*  Content */}
                <div
                    ref={contentRef}
                    className="w-[97%] ml-3 overflow-hidden transition-max-height duration-500 ease-in-out bg-gradient-to-b from-[#1C1A1A] via-transparent to-transparent rounded-[0.8rem]"
                    style={{ maxHeight: '0px' }}
                >
                    {company === 'West Kenya Company(Kabras)' && 
                        <div className="p-2 flex flex-col gap-2 text-white">

                            <p className="font-bold text-white/60">
                                As an {position} I Provided IT support by maintaining hardware, managing printers, and assisting in network setup and troubleshooting within the company’s infrastructure.
                            </p>
                        </div>
                    }

                    {company === 'Nima College' && 
                        <div className="p-2 flex flex-col gap-2 text-white">

                            <p className="font-bold text-white/60">
                                As an {position} Taught ICT, computer packages, and graphic design to students, helping them build foundational tech skills in a hands-on learning environment.
                            </p>
                        </div>
                    }

                    
                    {company === 'Rawlinz Designs Limited' && 
                        <div className="p-2 flex flex-col gap-2 text-white">

                            <p className="font-bold text-white/60">
                                As a {position} I empowered organizations to achieve their online presence and performance goals...
                            </p>
                            <h5 className="mt-[0.4rem] font-bold">Company Projects</h5>
                            <ul className="ml-[0.4rem] font-bold text-white/80">
                                <li className="lg:text-lg">
                                    <p>
                                        - Contributed to <a href="https://sensationske.com/" className="underline" target="_blank" rel="noreferrer">Sensations Kenya</a>
                                    </p>
                                </li>
                                <li className="lg:text-lg">
                                    <p>
                                        - Worked on <a href="https://kifaruproperties.com/" className="underline" target="_blank" rel="noreferrer">Kifaru Properties</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Workcard;
