import SkillCards from "./SkillCards"

function Skills() {

    const skills = [
        { id: 0, name: 'JavaScript', logo: `bg-[url('/src/assets/logos/javascript.svg')]`, description: 'Language with many Frameworks' },
        { id: 1, name: 'TypeScript', logo: `bg-[url('/src/assets/logos/typescript.svg')]`, description: 'JavaScript with types' },
        { id: 2, name: 'React', logo: `bg-[url('/src/assets/logos/react.svg')]`, description: 'JavaScript Framework' },
        { id: 3, name: 'Git', logo: `bg-[url('/src/assets/logos/git.svg')]`, description: 'Version Control Tool' },
        { id: 4, name: 'Flutter', logo: `bg-[url('/src/assets/logos/flutter.svg')]`, description: 'Dart Framework' },
        { id: 5, name: 'Tailwind', logo: `bg-[url('/src/assets/logos/tailwind.svg')]`, description: 'CSS Framework' },
        { id: 6, name: 'Firebase', logo: `bg-[url('/src/assets/logos/firebase.svg')]`, description: 'Cloud Non SQL Database' },
        { id: 7, name: 'Amazon Cloud', logo: `bg-[url('/src/assets/logos/amazon.svg')]`, description: 'Cloud Tool' },
        { id: 8, name: 'Figma', logo: `bg-[url('/src/assets/logos/figma.svg')]`, description: 'Design Tool' }
    ]

    return (
        <section
            className="h-fit p-2 mb-1 w-full overflow-hidden"
        >
            <section
                    style={{
                        maxWidth: '100%',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        scrollbarWidth: 'thin', /* For Firefox */
                        scrollbarColor: '#58585891 transparent', /* For Firefox */ // For IE and Edge
                    }}
                className="h-[90px] lg:pl-[5rem] p-2"
            >
                <ul className="flex flex-row w-full h-fit pb-3">
                    {skills.map((skill, index) => (
                        <li key={skill.id} className="lg:w-[30%] w-full">
                            <SkillCards logo={skill.logo} index={index}/>
                        </li>
                    ))}
                </ul>
            </section>

        </section>
    )
}

export default Skills


            {/* <div className={`lg:hidden flex justify-center items-center ${height === '60rem' ? 'bg-transparent' : `bg-gradient-to-t ${tog === 'd' ? 'from-black via-black' : 'from-white via-white'} to-transparent`} w-full h-[12rem] absolute bottom-[-3rem]`}>
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
                    className={`border-2 ${tog === 'd' ? 'border-white/30 text-white/80' : 'border-black/30 text-black/80'} p-1 flex justify-center items-center w-[6rem] h-[2rem] rounded-full`}
                >{btn}</button>
            </div> */}