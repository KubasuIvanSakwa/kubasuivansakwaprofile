import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { Octokit } from "octokit"

function Projects() {
    const [tog] = useOutletContext()
    const [bg, setBg] = useState(true)
    const [bg2, setBg2] = useState(false)
    const [user, setUser] = useState('kubasuIvanSakwa')
    const [userData, setUserData] = useState(undefined)
    const [repoData, setRepoData] = useState([])
    const [error, setError] = useState(undefined)

    const octokit = new Octokit();

    const updateUserData = async () => {
        try {
            const username = user.trim();
            const response = await octokit.request(`GET /users/${username}`);
            setUserData(response.data);
            setError(undefined);
        }
        catch (ex) {
            if (ex instanceof Error) setError(ex);
            else console.error(ex);
        }
    }

    return (
        <section className="text-white pt-[5rem] w-full relative overflow-y-auto">
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

            <div className="w-full flex justify-center p-2 relative z-20 mt-4">
                <div className="bg-gray-800/50  rounded-full flex justify-center items-center gap-2 p-[0.2rem]">
                    <button
                        className={`${bg ? 'bg-white/80 text-black/70' : 'bg-tranparent hover:bg-white/60 text-white/70 hover:text-black/70'} rounded-full p-1 pl-3 pr-3`}
                        onClick={() => {
                            setBg(true)
                            setBg2(false)
                        }}
                    >Completed Projects</button>
                    <button
                        className={`${bg2 ? 'bg-white/80 text-black/70' : 'bg-transparent hover:bg-white/60 text-white/70 hover:text-black/70'}  rounded-full p-1 pl-3 pr-3`}
                        onClick={() => {
                            updateUserData()
                            setBg(false)
                            setBg2(true)
                        }}
                    >Upcoming Projects</button>
                </div>
            </div>

            <div className="relative border w-full h-fit mt-4 p-3 flex justify-center">
                <div className="flex justify-between p-1 flex-col w-[20rem] h-[24rem] rounded-2xl bg-red-500 ">
                    {/* top items */}
                    <div className="w-full flex flex-col items-end p-2 rounded-t-2xl">
                        <p>Months</p>

                        {/* drop down for links */}
                        <p>links</p>
                    </div>

                    {/* bottom items */}
                    <div>
                        {/* project name */}
                        <h4>VerityCore Labs</h4>

                        {/* project description */}
                        <div>
                            <p>Total Volume</p>
                            <p>Progress bar %6.5</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects