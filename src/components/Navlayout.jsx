import { Link } from 'react-router-dom'
import Home from '/src/assets/logos/home.svg'
import Projects from '/src/assets/logos/projects.svg'

function Navlayout({ img1, img2, url1, url2}) {

    return (
        <section className="fixed bg-[#1b1b1b] border border-white/10 flex flex-col gap-[2rem] justify-center h-[8.8rem] w-[4%] rounded-full">
            <Link
                to="#"
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img1} alt=""/>
            </Link>
            <Link
                to="#"
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img2} alt=""/>
            </Link>
        </section>
    )
}

export default Navlayout