import { useParams } from 'react-router-dom'

import reactlogo from '/src/assets/react.svg'
import flutter from '/src/assets/flutter.svg'
import python from '/src/assets/python.svg'
import Projcard from './Projcard'

function Projectpage() {
    const { id } = useParams()

    return (
        <section className='p-2'>
            <div className="mt-[2.9rem] opacity-[.7] relative p-1 overflow-hidden w-full h-[10rem] bg-black/80">
            {id === 'jsx' && <img src={reactlogo} alt="Logo" className="absolute w-[18rem] z-[60] bottom-[-6rem] opacity-[.2] left-[-5rem] bg-none" />}
            {id === 'dart' && <img src={flutter} alt="Logo" className="absolute w-[13rem] z-[60] bottom-[-2rem] opacity-[.2] left-[-2rem] bg-none" />}
            {id === 'py' && <img src={python} alt="Logo" className="absolute w-[18rem] z-[60] bottom-[-6rem] opacity-[.2] left-[-5rem] bg-none" />}
            </div>

            <Projcard />

        </section>
    )
}

export default Projectpage