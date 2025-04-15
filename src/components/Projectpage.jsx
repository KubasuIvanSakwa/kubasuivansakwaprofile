import { useLocation, useOutletContext, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import reactlogo from '/src/assets/react.svg'
import flutter from '/src/assets/flutter.svg'
import python from '/src/assets/python.svg'
import Projcard from './Projcard'

function Projectpage() {
    const { id } = useParams()
    const location = useLocation()
    const [lang, setLang] = useState()
    const [filtered, setFiltered] = useState([
        {
            id: 0, name: 'js', 
        }
    ]) 
    const urlstate = location.state?.data

    const [tog] = useOutletContext()
    
    useEffect(() => {
        // Set the language based on the path
        if(location.pathname.includes('jsx')) {
            setLang('Javascript')
        } else if(location.pathname.includes('dart')) {
            setLang('Dart')
        } else if(location.pathname.includes('py')) {
            setLang('Python')
        }
    }, [location.pathname])


    // useEffect(() => {
    //     if (urlstate && lang) {
    //         const result = urlstate.filter(repo => repo.language && repo.language.toLowerCase() === lang.toLowerCase())
    //         setFiltered(result)
    //     }
    // }, [urlstate, lang])

    return (
        <section className='p-2'>
            <div className={`${tog === 'd' ? 'bg-black/80' : 'bg-white'} mt-[2.9rem] opacity-[.7] relative p-1 overflow-hidden w-full h-[10rem] bg-black/80`}>
                {id === 'jsx' && <img src={reactlogo} alt="React Logo" className={`${tog === 'd' ? 'opacity-[.2]' : 'opacity-[.7]'} absolute w-[18rem] z-[60] bottom-[-6rem] left-[-5rem] bg-none`} />}
                {id === 'dart' && <img src={flutter} alt="Flutter Logo" className={`${tog === 'd' ? 'opacity-[.2]' : 'opacity-[.7]'} absolute w-[18rem] z-[60] bottom-[-6rem] left-[-5rem] bg-none`} />}
                {id === 'py' && <img src={python} alt="Python Logo" className={`${tog === 'd' ? 'opacity-[.2]' : 'opacity-[.7]'} absolute w-[18rem] z-[60] bottom-[-6rem] left-[-5rem] bg-none`}  />}
            </div>
            
            {/* Render filtered repositories if available */}
            <div className='flex flex-wrap gap-3 lg:flex-row flex-col'>
                {
                    urlstate && filtered.length > 0 ? (
                    filtered.map((repo) => (
                        <Projcard key={repo.id} title={repo.name} desc={repo.description} giturl={repo.html_url} exturl={''} /> // Ensure that each Projcard has a unique 'key' prop
                    ))
                ) : (
                    <div className='text-white w-full flex justify-center items-center text-xl h-[10rem]'>
                        Let Me Cook...
                    </div> // Display message if no repositories are available
                )}
            </div>
        </section>
    )
}

export default Projectpage
