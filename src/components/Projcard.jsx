import { useState } from 'react'
import homepagepng from '../assets/homepage.png'
import githubLogo from '../assets/logos/github.svg'

function Projcard({ title, desc, giturl, exturl }) {
    // window.addEventListener('resize', () => {
    //     console.log(window.innerWidth)
    // })

    

    return (
        <section className="mt-5 relative w-full min-h-fit p-2">
            {/* <h1 className='text-white text-xl text-center mb-3'>Personal Landing Page</h1> */}
            {/* image filler */}
            <div className="border border-white/20 rounded-t-sm flex lg:flex-row md:flex-row relative flex-col w-full h-[30rem]">
                <div className='relative bg-[url("/src/assets/homepage.png")] bg-cover bg-no-repeat lg:h-[30rem] md:h-[30rem] lg:w-[50rem] md:w-[50rem] w-full h-full'>

                </div>
                <div className='gr absolute z-10 top-0 w-[50rem] h-[30rem] right-0'>
                    <div className='w-full h-full flex justify-end p-1'>
                        <div className='border border-white/10 lg:top-1 md:top-1 top-[8rem] relative bg-[url("/src/assets/homepageview.png")] opacity-90 bg-no-repeat bg-cover rounded-2xl lg:h-[30rem] md:h-[30rem] lg:w-[18rem] md:w-[18rem] w-[12rem] h-[20rem]'>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* desc */}
            <div className='mt-[2rem]'>
            <div className='w-full mt-3 p-3 flex gap-3 mb-4 justify-center items-center z-[20]'>
                <button className='hov border-2 border-white/10 flex p-1 rounded-full'>
                    <img src={githubLogo} className='w-[1.5rem]'/>
                    <span className='text-white'>&nbsp;Github&nbsp;</span>
                </button>

                <button className='bg-red-400 p-1 rounded-full'>demo</button>
            </div>
                <div className='w-full flex justify-center mb-4'>
                    <div className='w-[10rem] h-[0.2rem] rounded-full bg-white/40'/>
                </div>
                <h4 className='text-white/50 text-xl'>description:</h4>
                <p className='text-white text-lg'>
                This landing page is my first project, built using React to showcase my skills and projects. I designed it with a clean, responsive layout using modern CSS techniques and deployed it via [your platform]. It reflects my ability to build and deploy real-world web apps independently, highlighting both technical and design skills.
                </p>
                <h4 className='text-white/50 text-xl mt-7'>Why it matters</h4>
                <p className='text-white text-lg'>
                This landing page isn&apos;t just a portfolio it&apos;s proof of my ability to take an idea from concept to deployment. It demonstrates my front-end development skills, my eye for design, and my ability to work independently on full-stack web solutions.
                </p>
            </div>

        </section>
    )
}

export default Projcard