import { useOutletContext } from "react-router-dom"
import Workcard from "./Workcard"


function WorkExperience() {
    const [ tog ] = useOutletContext()

    const Experience = [
        {
            id: 0, 
            company: 'West Kenya Company(Kabras)', 
            duration: 'Jan 2025 - Present · 5 mos', 
            position: 'Information Technology Intern', 
        },

        {
            id: 1, 
            company: 'Nima College', 
            duration: 'Sept 2024 – Dec 2024 · 4 mos', 
            position: 'IT Tutor', 
        },
        {
            id: 2, 
            company: 'Rawlinz Designs Limited', 
            duration: 'March 2024 - July 2024 · 5 mos', 
            position: 'Front-end Web Developer', 
        }
    ]

    return (
        <section
            className="text-white w-full min-h-fit mt-10 pb-[4.5rem] "
        >
            <h1 className={`lg:text-xl p-2 lg:ml-10 text-lg ${tog === 'd' ? 'text-white/60' : 'text-red-900/70'} font-extrabold  mb-3`}>work experience</h1>

            <section className="flex flex-col gap-2 items-center pb-4">
                {Experience.map((work, index) => (
                    <Workcard key={work.id} tog={tog} duration={work.duration} company={work.company} position={work.position} summary={work.summary} index={index} />
                ))}
            </section>
        </section>
    )
}

export default WorkExperience