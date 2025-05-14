import { useState } from "react";
import useInView from "../hooks/useInView";
import { Link } from "react-router-dom";

function Projects() {
    const [ref1, isVisible1] = useInView();
    const [ref2, isVisible2] = useInView();
    const [hoveredId, setHoveredId] = useState(null);
    const [chartRef, isChartVisible] = useInView();


    const projectz = [
        { id: 0, projName: 'The Wall of projects(react)', type: 'web', url: 'thewall' },
        { id: 1, projName: 'Loncy', type: 'web', url: 'loncy' },
        { id: 2, projName: 'ToDoList', type: 'web', url: 'todo' },
        { id: 3, projName: 'Portfolio', type: 'web', url: 'portfolio' },

        { id: 4, projName: 'Book-Review-App', type: 'mobile', url: 'bookreview' },
        { id: 5, projName: 'Greenthumb', type: 'mobile', url: 'thumb' },
    ]

    const Projitems = ({ project, hovered }) => (
        <div className="flex justify-between items-center mt-2">
            <div></div>
            <div className="flex items-center gap-1">
                <p>{project}</p>
                {!hovered && <div className="w-[0.3rem] mr-3 rounded-full h-[2rem] bg-[#2c2a2a] ml-1 border border-[#4B4B4B]/10"></div>}
                {hovered && <div className="w-[0.5rem] mr-3 rounded-full h-[2rem] bg-[#2c2a2a] ml-1 border border-[#4B4B4B]/10"></div>}
            </div>
        </div>
    )

    return (
        <section className="text-white pt-[5rem] w-full relative overflow-y-auto min-h-fit h-[100vh]">
            <div className="w-full flex items-center justify-center">
                <h1 className={`text-xl p-2  'text-white/70'  font-extrabold mb-3`}>Productivity Chart</h1>
            </div>
            <div ref={chartRef} className={`h-fit flex flex-col items-center p-2 transition-all duration-700 ease-out
                        ${isChartVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
                {
                    <figure style={{
                        maxWidth: '100%',
                        overflowX: 'auto',
                        scrollbarWidth: 'thin', /* For Firefox */
                        scrollbarColor: '#58585891 transparent', /* For Firefox */ // For IE and Edge
                    }}>
                        <embed src="https://wakatime.com/share/@kubasu_ivan/0d285719-253c-4c03-85e0-583379d97134.svg"></embed>
                    </figure>
                }
            </div>

            <div className="relative w-full h-fit mt-4 p-4 flex gap-10 flex-wrap justify-center">

                {/* Card 1 */}
                <div
                    ref={ref1}
                    className={`w-[20rem] bg-[#141414] rounded-[1.2rem] h-[16rem] p-1 flex flex-col gap-1 items-center
                    transition-all duration-700 ease-out transform
                    ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                    <div className="flex items-center gap-1 w-full h-[4.5rem] mt-1">
                        <div className="w-[0.3rem] rounded-full h-[3.2rem] bg-[#1C1A1A] ml-1 border border-[#4B4B4B]/10"></div>
                        <div className="w-full flex justify-between items-center p-2 h-[90%] bg-gradient-to-r from-[#1C1A1A] to-transparent">
                            <p className="ml-1 font-bold">Web Pages</p>
                        </div>
                    </div>
                    <div className="w-[95%] ml-3 h-full bg-gradient-to-r from-[#1C1A1A] via-transparent to-transparent rounded-[0.8rem]">
                        {projectz.map((item, index) => (
                            item.type === 'web' && (
                                <Link
                                    to={`${item.url}`}
                                    key={item.id}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className={`cursor-pointer transition-all duration-700 ease-out transform
                    ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <Projitems project={item.projName} hovered={hoveredId === item.id} />
                                </Link>
                            )
                        ))}
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    to=""
                    ref={ref2}
                    className={`w-[20rem] bg-[#141414] rounded-[1.2rem] h-[16rem] p-1 flex flex-col gap-1 items-center
                    transition-all duration-700 ease-out transform delay-300
                    ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                    <div className="flex items-center gap-1 w-full h-[4.5rem] mt-1">
                        <div className="w-[0.3rem] rounded-full h-[3.2rem] bg-[#1C1A1A] ml-1 border border-[#4B4B4B]/10"></div>
                        <div className="w-full flex justify-between items-center p-2 h-[90%] bg-gradient-to-r from-[#1C1A1A] to-transparent">
                            <p className="ml-1 font-bold">Mobile Apps</p>
                        </div>
                    </div>
                    <div
                        className={`w-[95%] ml-3 h-full bg-gradient-to-r from-[#1C1A1A] via-transparent to-transparent 
                    rounded-[0.8rem]`}
                    >
                        {projectz.map((item, index) => (
                            item.type === 'mobile' && (
                                <Link
                                    to={`${item.url}`}
                                    key={item.id}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className={`cursor-pointer transition-all duration-700 ease-out transform
                    ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <Projitems project={item.projName} hovered={hoveredId === item.id} />
                                </Link>
                            )
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects

// const [tog] = useOutletContext()
// const [windowload, setWindowLoad] = useState(false)
// const [bg, setBg] = useState(true)
// const [bg2, setBg2] = useState(false)
// const [user, setUser] = useState('kubasuIvanSakwa')
// const [userData, setUserData] = useState(undefined)
// const [repoData, setRepoData] = useState([])
// const [fload, setFload] = useState(false)
// const [error, setError] = useState(undefined)
// const [filteredRepos, setFilteredRepos] = useState([])
// const [sload, setSload] = useState(false)
// const [count, setCount] = useState([])


// const searchNames = ['shop', 'codeshare', 'The-Wall-of-Projects-React-', 'antiflimflam', 'kubasuivansakwaprofile']


// const octokit = new Octokit()

// window.addEventListener('load', () => {
//     setWindowLoad(prev => !prev)
// })

// useEffect(() => {
//     let Fetch = async () => {
//         try {
//             const username = user.trim()
//             const repos = await octokit.request(`GET /users/${username}/repos`)
//             const orgs = await octokit.request(`GET /users/${username}/orgs`)
//             setRepoData(repos.data)
//             setError(undefined)
//             setFload(prevfload => !prevfload)
//         }
//         catch (ex) {
//             if (ex instanceof Error) setError(ex)
//             else console.error(ex)
//         }
//     }

//     Fetch()
// }, [windowload])

// useEffect(() => {
//     const result = repoData.filter(repo => searchNames.includes(repo.name));
//     setFilteredRepos(result);
//     setFload((prevfload) => !prevfload); // Optional if needed for loading states
// }, [repoData]);

// useEffect(() => {
//     if (filteredRepos.length > 0) {
//         const counts = {};
//         filteredRepos.forEach(repo => {
//             const language = repo.language || 'Unknown'; // Handle undefined language
//             counts[language] = (counts[language] || 0) + 1;
//         });
//         setCount(counts);
//         console.log("Counts updated:", counts);
//     }
// }, [filteredRepos]);

// console.log(repoData)