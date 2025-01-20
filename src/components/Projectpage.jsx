import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import reactlogo from '/src/assets/react.svg'
import flutter from '/src/assets/flutter.svg'
import python from '/src/assets/python.svg'
import Projcard from './Projcard'

function Projectpage() {
    const { id } = useParams()
    const location = useLocation()
    const [lang, setLang] = useState()
    const [filtered, setFiltered] = useState([]) // Initialize as an empty array
    console.log(location)
    const urlstate = location.state?.data // Ensure urlstate is properly fetched, using optional chaining

    useEffect(() => {
        // Set the language based on the path
        if(location.pathname.includes('jsx')) {
            setLang('Javascript')
        } else if(location.pathname.includes('dart')) {
            setLang('Dart')
        } else if(location.pathname.includes('py')) {
            setLang('Python')
        }
    }, [location.pathname]) // Re-run when the pathname changes

    useEffect(() => {
        // When the language or urlstate changes, filter the repositories
        if (urlstate && lang) {
            const result = urlstate.filter(repo => repo.language && repo.language.toLowerCase() === lang.toLowerCase())
            setFiltered(result)
        }
    }, [urlstate, lang])

    return (
        <section className='p-2'>
            <div className="mt-[2.9rem] opacity-[.7] relative p-1 overflow-hidden w-full h-[10rem] bg-black/80">
                {id === 'jsx' && <img src={reactlogo} alt="React Logo" className="absolute w-[18rem] z-[60] bottom-[-6rem] opacity-[.2] left-[-5rem] bg-none" />}
                {id === 'dart' && <img src={flutter} alt="Flutter Logo" className="absolute w-[13rem] z-[60] bottom-[-2rem] opacity-[.2] left-[-2rem] bg-none" />}
                {id === 'py' && <img src={python} alt="Python Logo" className="absolute w-[18rem] z-[60] bottom-[-6rem] opacity-[.2] left-[-5rem] bg-none" />}
            </div>
            
            {/* Render filtered repositories if available */}
            <div className='flex flex-wrap gap-3 lg:flex-row flex-col'>
                {urlstate && filtered.length > 0 ? (
                    filtered.map((repo) => (
                        <Projcard key={repo.id} title={repo.name} desc={repo.description} giturl={repo.html_url} exturl={''} /> // Ensure that each Projcard has a unique 'key' prop
                    ))
                ) : (
                    <p className='text-white'>Let Me Cook</p> // Display message if no repositories are available
                )}
            </div>
        </section>
    )
}

export default Projectpage
