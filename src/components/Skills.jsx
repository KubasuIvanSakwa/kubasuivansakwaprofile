import { useOutletContext } from "react-router-dom"
import SkillCards from "./SkillCards"
import { useState } from "react"

function Skills() {

    const [ tog ] = useOutletContext()
    const [height, setHeight] = useState('28rem')
    const [btn, setBtn] = useState('more')

    const skills = [
        {id: 0, name: 'JavaScript', logo: `bg-[url('/src/assets/logos/javascript.svg')]`, description:'Language with many Frameworks' },
        {id: 1, name: 'TypeScript', logo: `bg-[url('/src/assets/logos/typescript.svg')]`, description:'JavaScript with types' },
        {id: 2, name: 'React', logo: `bg-[url('/src/assets/logos/react.svg')]`, description:'JavaScript Framework' },
        {id: 3, name: 'Git', logo: `bg-[url('/src/assets/logos/git.svg')]`, description:'Version Control Tool' },
        {id: 4, name: 'Flutter', logo: `bg-[url('/src/assets/logos/flutter.svg')]`, description:'Dart Framework' },
        {id: 5, name: 'Tailwind', logo: `bg-[url('/src/assets/logos/tailwind.svg')]`, description:'CSS Framework' },
        {id: 6, name: 'Firebase', logo: `bg-[url('/src/assets/logos/firebase.svg')]`, description:'Cloud Non SQL Database' },
        {id: 7, name: 'Amazon Cloud', logo: `bg-[url('/src/assets/logos/amazon.svg')]`, description:'Cloud Tool' },
        {id: 8, name: 'Figma', logo: `bg-[url('/src/assets/logos/figma.svg')]`, description:'Design Tool' }
    ]

    const isMobileOrTablet = window.innerWidth <= 900; 

    return (

        <section
            style={isMobileOrTablet ? { height } : {}}
            className="lg:h-[90vh] p-2 mb-1 w-full overflow-hidden relative">
            <h1 className={`lg:text-xl p-2 lg:ml-10 mt-7 text-lg ${tog === 'd' ? 'text-white/60' : 'text-red-900/70'} font-extrabold mb-3`}>Skills</h1>
            <section
                className="h-[100px] lg:pl-[5rem] p-2 lg:ml-[2rem] flex gap-2 flex-wrap"
            >
                <ul className="flex flex-wrap w-full h-fit pb-3 gap-2">
                    {skills.map(skill => (
                        <li key={skill.id} className="lg:w-[40%] w-full lg:last:ml-[10rem]">
                            <SkillCards logo={skill.logo} desc={skill.description} name={skill.name}/>
                        </li>
                    ))}
                </ul>
            </section>
            <div className={`lg:hidden flex justify-center items-center ${height === '60rem' ? 'bg-transparent' : 'bg-gradient-to-t from-black via-black to-transparent'} w-full h-[12rem] absolute bottom-[-3rem]`}>
                <button 
                    onClick={() => {
                        if (btn === 'more') {
                            setHeight('60rem')
                            setBtn('less')
                        } else {
                            setHeight('28rem')
                            setBtn('more')
                        }
                    }}
                    className="border-2 border-white/30 text-white/80 p-1 flex justify-center items-center w-[6rem] h-[2rem] rounded-full"
                >{btn}</button>
            </div>
        </section>
    )
}

export default Skills
