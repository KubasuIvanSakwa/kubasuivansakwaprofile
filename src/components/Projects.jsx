import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { Octokit } from "octokit"
import eternal from '/src/assets/externallink.svg'
import reactlogo from '/src/assets/react.svg'
import flutter from '/src/assets/flutter.svg'
import python from '/src/assets/python.svg'

function Projects() {
    const [tog] = useOutletContext()
    const [windowload, setWindowLoad] = useState(false)
    const [bg, setBg] = useState(true)
    const [bg2, setBg2] = useState(false)
    const [user, setUser] = useState('kubasuIvanSakwa')
    const [userData, setUserData] = useState(undefined)
    const [repoData, setRepoData] = useState([])
    const [fload, setFload] = useState(false)
    const [error, setError] = useState(undefined)
    const [filteredRepos, setFilteredRepos] = useState([])
    const [sload, setSload] = useState(false)
    const [count, setCount] = useState([])

    const searchNames = ['shop', 'codeshare', 'The-Wall-of-Projects-React-', 'antiflimflam', 'kubasuivansakwaprofile']
    

    const octokit = new Octokit()

    window.addEventListener('load', () => {
        setWindowLoad(prev => !prev)
    })

    useEffect(() => {
        let Fetch = async () => {
            try {
                const username = user.trim()
                const repos = await octokit.request(`GET /users/${username}/repos`)
                const orgs = await octokit.request(`GET /users/${username}/orgs`)
                setRepoData(repos.data)
                setError(undefined)
                setFload(prevfload => !prevfload)
            }
            catch (ex) {
                if (ex instanceof Error) setError(ex)
                else console.error(ex)
            }
        }

        Fetch()
    }, [windowload])

    useEffect(() => {
        const result = repoData.filter(repo => searchNames.includes(repo.name));
        setFilteredRepos(result);
        setFload((prevfload) => !prevfload); // Optional if needed for loading states
    }, [repoData]);
    
    useEffect(() => {
        if (filteredRepos.length > 0) {
            const counts = {};
            filteredRepos.forEach(repo => {
                const language = repo.language || 'Unknown'; // Handle undefined language
                counts[language] = (counts[language] || 0) + 1;
            });
            setCount(counts);
            console.log("Counts updated:", counts);
        }
    }, [filteredRepos]);
    



    return (
        <section className="text-white pt-[5rem] w-full relative overflow-y-auto min-h-fit">
            <h1 className={`text-xl p-2 ${tog === 'l' ? 'text-black/70' : 'text-white/70'} font-extrabold   mb-3`}>Projects</h1>
            <div className="w-full flex items-center justify-center">
                <h1 className={`text-xl p-2 ${tog === 'l' ? 'text-black/70' : 'text-white/70'}  font-extrabold mb-3`}>Productivity Chart</h1>
            </div>
            <div className="h-fit bg-blue-40 flex flex-col items-center p-2">
                {
                    tog === 'l' &&
                    <figure style={{
                        maxWidth: '100%',
                        overflowX: 'auto',
                        scrollbarWidth: 'thin', /* For Firefox */
                        scrollbarColor: '#58585891 transparent', /* For Firefox */ // For IE and Edge
                    }}>
                        <embed src="https://wakatime.com/share/@kubasu_ivan/ab99cd69-c7e6-499c-ab99-19ac36ce2c0f.svg"></embed>
                    </figure>
                }

                {
                    tog === 'd' &&
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

            <div className="relative w-full h-fit mt-4 p-4 flex gap-10 flex-wrap">

                <Link
                    to="jsx"
                    state = {{data: filteredRepos}}
                    className="opacity-[.7] hover:opacity-[1] relative p-1 lg:border-none border-2 border-white/20 overflow-hidden lg:w-[20rem] md:w-[20rem] w-full h-[20rem] rounded-[1.5rem] bg-black/80 bg-cover bg-center">
                    {/* drop down for links */}
                    <div className="flex w-full justify-end p-1">

                        <div
                            className="border-2 border-white/50 flex justify-around items-center p-1 rounded-full w-[2rem] h-[2rem] "
                        >
                            <p className="inline-block">
                                <img src={eternal} alt="External link" className="w-[2rem]" />
                            </p>
                        </div>

                    </div>
                    <div className="absolute top-[2rem] left-[1.5rem] border-2 border-white/40 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
                        <p className="text-2xl pacifico-regular">{count.JavaScript || 0}</p>
                    </div>

                    <img src={reactlogo} alt="Logo" className="absolute w-[18rem] z-[60] bottom-[-6rem] opacity-[.8] left-[-5rem] bg-none" />
                    <p className="absolute text-2xl pacifico-regular top-[5rem] right-[10rem] w-[2rem]">React Projects</p>
                </Link>

                <Link
                    to="dart"
                    state = {{data: filteredRepos}}
                    className="opacity-[.7] hover:opacity-[1]  relative  p-1 lg:border-none border-2 border-white/20 overflow-hidden lg:w-[20rem] md:w-[20rem] w-full h-[20rem] rounded-[1.5rem] bg-black/80 bg-cover bg-center">
                    {/* drop down for links */}
                    <div className="flex w-full justify-end p-1">

                        <Link
                            to=""
                            className="border-2 border-white/50 flex justify-around items-center p-1 rounded-full w-[2rem] h-[2rem] "
                        >
                            <p className="inline-block">
                                <img src={eternal} alt="External link" className="w-[2rem]" />
                            </p>
                        </Link>

                    </div>
                    <div className="absolute top-[2rem] left-[1.5rem] border-2 border-white/40 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
                        <p className="text-2xl pacifico-regular">{count.Dart || 0}</p>
                    </div>

                    <img src={flutter} alt="Logo" className="absolute z-[60] w-[18rem] bottom-[-4rem] opacity-[.8] left-[-5rem] bg-none" />
                    <p className="absolute text-2xl pacifico-regular top-[5rem] right-[10rem] z-[65] w-[2rem]">Flutter <span className="text-slate-300">P</span>rojects</p>
                </Link>

                <Link
                    to="py"
                    state = {{data: filteredRepos}}
                    className="opacity-[.7] hover:opacity-[1] relative  p-1 lg:border-none border-2 border-white/20 overflow-hidden lg:w-[20rem] md:w-[20rem] w-full h-[20rem] rounded-[1.5rem] bg-black/80 bg-cover bg-center">
                    {/* drop down for links */}
                    <div className="flex w-full justify-end p-1">

                        <Link
                            to=""
                            className="border-2 border-white/50 flex justify-around items-center p-1 rounded-full w-[2rem] h-[2rem] "
                        >
                            <p className="inline-block">
                                <img src={eternal} alt="External link" className="w-[2rem]" />
                            </p>
                        </Link>

                    </div>
                    <div className="absolute top-[2rem] left-[1.5rem] border-2 border-white/40 w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
                        <p className="text-2xl pacifico-regular">{count.python || 0}</p>
                    </div>

                    <img src={python} alt="Logo" className="absolute z-[60] w-[18rem] bottom-[-4rem] opacity-[.8] left-[-5rem] bg-none" />
                    <p className="absolute text-2xl pacifico-regular top-[5rem] right-[10rem] w-[2rem] z-[65]">Python Projects</p>
                </Link>

            </div>
        </section>
    )
}

export default Projects