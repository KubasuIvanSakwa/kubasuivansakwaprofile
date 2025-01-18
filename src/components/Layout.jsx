import { useEffect, useRef, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Nav from "./Nav"
import close from '../assets/close.svg'
import mutablepage from '../assets/mutpage.png'
import rawlinzpage from '../assets/rawlinzpage.png'
import Leftnav from "./Leftnav"
import Rightnav from "./Rightnav"
import UseRelaod from "../hooks/UseRelaod"

function Layout() {
    const [reload, reloading] = UseRelaod()
    const themeRef = useRef(null)
    const [tog, setTog] = useState('dark theme')
    const theme = useRef(null)
    const location = useLocation()
    const work = localStorage.getItem('work')

    
    function handleChange(){
        if(themeRef.current.checked) {
            // console.log('checked')
            setTog('dark theme')
        }else {
            // console.log('unchecked')
            setTog('light theme')
        }
    }

    useEffect(() => {
        if(tog === 'dark theme') {
            themeRef.current.checked = true
        }
        else if(tog === 'light theme') {
            themeRef.current.checked = false
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { 
            const newColorScheme = e.matches ? 'dark' : 'light'
            newColorScheme === 'dark' ? setTog('dark theme') : setTog('light theme')
        })
    })
    
    return (
        <section className={`${tog === 'dark theme' ? 'mainpgdark' : 'mainpglight'} ease-in w-full flex justify-center h-[100vh] overflow-hidden`} ref={theme}>
            <Leftnav tog={tog}/>
            <Rightnav tog={tog}/>

            {reloading ? null : <section className={`${work === 'Mutable Tech' ? '' : 'hidden'} w-full h-[100vh] absolute z-[100] top-0 backdrop-blur-md bg-white/30`}>
                <section className="bg-transparent flex w-full h-[100vh] p-2 lg:justify-center">
                    <div className="relative flex flex-col gap-4 items-center bg-blue-950/80 h-[35rem] lg:w-[70%] shadow-lg lg:p-7 p-4 top-[3rem] rounded-[1.5rem] text-white overflow-y-scroll">
                        <div className="w-full flex justify-end p-2 relative top-[-1rem] right-[-1rem]">
                            <div
                                onClick={() => {
                                    reload()
                                    localStorage.setItem('work', '')
                                }}
                                className="bg-gray-600 fixed cursor-pointer w-[2rem] h-[2rem] p-1 rounded-full flex justify-center items-center">
                                <img src={close} />
                            </div>
                        </div>
                        <div>
                            <h2 className="lg:text-xl text-lg font-bold">August 2023 - February 2024</h2>
                            <h1 className="lg:text-3xl text-xl text-blue-500 uppercase font-extrabold">Mutable Tech</h1>
                            <h1 className="lg:text-xl font-bold">Front-End Developer</h1>
                            <a href="https://mutabletech.co.ke/" target="_blank" className="inline-block lg:h-[200px] h-[70px] md:h-[200px] overflow-hidden rounded-t-[5px] mt-[1rem] mb-[1rem]">
                                <img src={mutablepage} />
                            </a>
                            <p className="lg:text-xl text-lg font-bold text-white/60">
                                I worked as a React front-end web developer at Mutable Tech, 
                                a software development company specializing in e-commerce and 
                                digital marketing. I developed and maintained various web applications
                                using React, Redux, and other technologies.
                            </p>
                            <h5 className="mt-[1rem] lg:text-2xl text-xl font-bold">Projects</h5>
                            <ul className="ml-[1rem] font-bold text-white/80">
                                <li className="lg:text-lg">- <a href="https://mutabletech.co.ke/" target="_blank">Company Website</a></li>
                                <li className="lg:text-lg">- Web Based POS System</li>
                            </ul>

                            <h5 className="mt-[1rem] lg:text-2xl text-xl font-bold">Key Contributions</h5>
                            <ul className="flex flex-col gap-2 text-white/80">
                                <li className="lg:text-lg">- Designed and developed a web-based POS system using React, Redux, and Node.js</li>
                                <li className="lg:text-lg">- Collaborated with design and development teams to ensure seamless integration of
                                custom applications, enhancing software stability.</li>
                                <li className="lg:text-lg">- Created a responsive and user-friendly company website using React, Next.js, and styled-components</li>
                                <li className="lg:text-lg">- Developed and optimized front-end components using React and Tailwind CSS, increasing
                                scalability and efficiency by 20%.</li>
                                <li className="lg:text-lg">- Wrote and executed over 10 comprehensive tests, improving software reliability and load
                                times by 25%.</li>
                                <li>- Resolved 80% of reported front-end issues, reducing bug reports by 60%.</li>
                            </ul>
                        </div>
                        </div>
                </section>
            </section>}

            {reloading ? null : <section className={`${work === 'Rawlinz Designs Limited' ? '' : 'hidden'} w-full h-[100vh] absolute z-[100] top-0 backdrop-blur-md bg-white/30 `}>
                <section className="bg-transparent flex w-full h-[100vh] p-2 lg:justify-center">
                    <div className="relative flex flex-col gap-4 items-center bg-green-950/80 h-[35rem] lg:w-[70%] shadow-lg lg:p-7 p-4 top-[3rem] rounded-[1.5rem] text-white overflow-y-scroll">
                        <div className="w-full flex justify-end p-2 relative top-[-1rem] right-[-1rem]">
                            <div 
                                onClick={() => {
                                    reload()
                                    localStorage.setItem('work', '')
                                }}
                                className="bg-gray-600 fixed cursor-pointer w-[2rem] h-[2rem] p-1 rounded-full flex justify-center items-center">
                                <img src={close} />
                            </div>
                        </div>
                        <div>
                            <h2 className="lg:text-xl text-lg font-bold">March 2024 - July 2024</h2>
                            <h1 className="lg:text-3xl text-xl text-green-500 uppercase font-extrabold">Rawlinz Designs</h1>
                            <h1 className="lg:text-xl font-bold">Front-End Developer</h1>
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
                </section>
            </section>}

            <section className="backdrop-blur-sm lg:shadow-xl lg:w-[65vw] w-full h-[100vh] overflow-y-scroll p-1 pt-3 mb-1 overflow-x-hidden">
                <svg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'
                    className={`lg:absolute  lg:block md:absolute top-[-3rem] hidden lg:opacity-[0.1] ${location.pathname === '/' ? 'h-[190vh]' : 'h-[190vh]'} `}
                >
                    <filter id='noiseFilter'>
                        <feTurbulence 
                        type='fractalNoise' 
                        baseFrequency='5.8' 
                        numOctaves='3' 
                        stitchTiles='stitch'/>
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
                </svg>
                <Nav tog={tog} themeref={themeRef} fn={handleChange}/>
                <Outlet context={tog} />
            </section>
        </section>
    )
}

export default Layout
