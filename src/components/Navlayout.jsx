import { Link, useLocation } from 'react-router-dom'

function Navlayout({ img0, img1, img2, url1, url2, tog, blog }) {
    const loaction = useLocation()

    return (
        <section className={`${tog === 'd' ? 'bg-[#1b1b1b]' : 'bg-[#1b1b1b]/80'} fixed border border-white/10 flex flex-col gap-[2rem] justify-center min-h-[8.8rem] w-[4%] rounded-full`}>
            {!url1.includes('http') && <Link
                to={url1}
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img1} alt=""/>
            </Link>}
            {url1.includes('http') && <a
                href={url1}
                target='_blank'
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img1} alt=""/>
            </a>}
            {!url2.includes('http') && <Link
                to={url2}
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                {location.pathname.includes('projects') ? <img src={img2} alt=""/> : <img src={img0} alt=""/>}
            </Link>}
            {blog && <Link to="blog" className='flex justify-center p-1'>
                    <p className="text-white rounded-full w-[2rem] h-[2rem] bg-black-500 border-2 flex p-1 text-lg pacifico-regular">blog</p>
            </Link>}
            {url2.includes('http') && <a
                href={url2}
                target='_blank'
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img2} alt=""/>
            </a>}
        </section>
    )
}

export default Navlayout
