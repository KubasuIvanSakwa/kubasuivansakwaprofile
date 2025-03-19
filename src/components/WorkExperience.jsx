import { useOutletContext } from "react-router-dom"
import Workcard from "./Workcard"
import rawlinz from "../assets/rawlinzpage.png"
import kabras from "../assets/kabras.png"


function WorkExperience() {
    const [ tog ] = useOutletContext()

    const Experience = [
        {
            id: 0, 
            company: 'West Kenya Company(Kabras)', 
            duration: 'Jan 2025 - Present · 3 mos', 
            position: 'Information Technology Intern', 
            background: 'bg-[#f1ee3c]/20',
            backgroundLight: 'bg-[#f1ee3c]/70',
            hoverDark: 'hover:bg-[#f1ee3c]/50',
            hoverLight: 'hover:bg-[#f1ee3c]/80',
            companyImage: `${kabras}`,
        },

        {
            id: 1, 
            company: 'Rawlinz Designs Limited', 
            duration: 'March 2024 - July 2024 · 5 mos', 
            position: 'React Front-end Web Developer', 
            background: 'bg-green-900/20',
            backgroundLight: 'bg-green-900/70',
            hoverDark: 'hover:bg-green-900/50',
            hoverLight: 'hover:bg-green-900/80',
            companyImage: `${rawlinz}`,
        }
    ]

    return (
        <section
            className="text-white w-full min-h-fit mt-10 "
        >
            <h1 className={`lg:text-xl p-2 lg:ml-10 text-lg ${tog === 'd' ? 'text-white/60' : 'text-red-900/70'} font-extrabold  mb-3`}>work experience</h1>

            <section className="flex flex-col gap-2 items-center">
                {Experience.map(work => (
                    <Workcard key={work.id} tog={tog} background={work.background} duration={work.duration} company={work.company} position={work.position} bgLight={work.backgroundLight} hoverdark={work.hoverDark} hoverlight={work.hoverLight} companyImage={work.companyImage} />
                ))}
            </section>
        </section>
    )
}

export default WorkExperience