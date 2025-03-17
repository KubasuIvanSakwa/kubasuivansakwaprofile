import { Link } from "react-router-dom"
import close from '../assets/close.svg'
import rawlinzpage from '../assets/rawlinzpage.png'
import { useState } from "react"

function Workcard({ tog, background, bgLight, duration, company, position, hoverdark, hoverlight }) {
    const [show, setShow] = useState(false)

    return (
        <>
            <Link
                onClick={() => {
                    setShow(!show)
                }}
                className={`${tog === 'd' ? `${background} border-white/20 ${hoverdark}` : `${bgLight} border-black/20 ${hoverlight}`}  relative border flex flex-col w-[90%] p-4 rounded-[18px] min-h-fit cursor-pointer`}
            >
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-white/60 font-bold">{duration}</p>
                        <h1 className="lg:text-2xl text-xl font-extrabold">{company}</h1>
                        <p className="lg:text-xl text-lgfont-bold">{position}</p>
                    </div>
                    {!show && <p className="bg-white/80 absolute lg:relative bottom-1 right-1  rounded-full border-2 border-black/60 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] flex justify-center items-center text-black/60 lg:text-3xl text-xl font-bold">+</p>}
                    {show && <p className="bg-white/80 absolute lg:relative bottom-1 right-1  rounded-full border-2 border-black/60 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] flex justify-center items-center text-black/60 lg:text-2xl text-xl font-bold">x</p>}
                </div>

                {show && <div className="w-full min-h-fit p-3">
                    <div className="">
                        <div className="w-full flex justify-end p-2 relative top-[-1rem] right-[-1rem]">
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/rawlinz-designs/" target="_blank" className="inline-block lg:h-[200px] h-[70px] md:h-[200px] overflow-hidden rounded-t-[10px] mt-[1rem] mb-[1rem]">
                                <img src={rawlinzpage} />
                            </a>
                            <p className="lg:text-xl text-lg font-bold text-white/60">
                                At Rawlinz Designs, I played a key role in empowering organizations to
                                achieve their online presence and performance goals. As a React front-end
                                web developer, I contributed to creating and maintaining web applications
                                tailored to user needs, utilizing React, Redux, and other modern technologies
                                to deliver exceptional digital experiences.
                            </p>
                            <h5 className="mt-[1rem] lg:text-2xl text-xl font-bold">Projects</h5>
                            <ul className="ml-[1rem] font-bold text-white/80">
                                <li className="lg:text-lg">- <a href="https://sensationske.com/" target="_blank">contributed in creating of Sensations Kenya&apos;s website</a></li>
                                <li className="lg:text-lg">- <a href="https://kifaruproperties.com/" target="_blank">contributed to creating of Kifaru Properties&apos; website</a></li>
                            </ul>

                            <h5 className="mt-[1rem] lg:text-2xl text-xl font-bold">Key Contributions</h5>
                            <ul className="flex flex-col gap-2 text-white/80">
                                <li className="lg:text-lg">- Contributed to frontend web development using Laravel, enhancing functionality and user
                                    interface, leading to a 40% improvement in user engagement.</li>
                                <li className="lg:text-lg">- Managed and updated the company’s codebase on GitHub, streamlining version control
                                    and facilitating cross-team collaboration.</li>
                                <li className="lg:text-lg">- Debugged and resolved 50+ critical code issues, optimizing workflows and reducing
                                    manual entry errors by 30%.</li>
                                <li className="lg:text-lg">- Installed and customized user-specific applications like QuickBooks, ensuring smooth
                                    operations for clients.</li>
                            </ul>
                        </div>
                    </div>

                </div>}
            </Link>

        </>

    )
}

export default Workcard