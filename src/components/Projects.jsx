import { useOutletContext } from "react-router-dom"

function Projects() {
    const [tog] = useOutletContext()

    return (
        <section className="text-white pt-[5rem] w-full">
            <h1 className={`text-xl p-2 ${tog === 'l' ? 'text-black/70' : 'text-white/70'} font-extrabold underline decoration-wavy mb-3`}>Projects</h1>
            <div className="w-full flex items-center justify-center">
                <h1 className={`text-xl p-2 ${tog === 'l' ? 'text-black/70' : 'text-white/70'}  font-extrabold mb-3`}>Wakatime Chart</h1>
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
        </section >
    )
}

export default Projects