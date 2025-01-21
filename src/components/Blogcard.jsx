import { Link } from 'react-router-dom'
import nextarrow from '/src/assets/nextarrow.svg'

function Blogcard({ title, image, content, url, state}) {

    console.log(state)

    return (
        <Link to={url} state={{info: state}} className='mt-[2rem] flex justify-between flex-wrap'>
                <div className='relative bg-black/70 border-2 border-gray-300/50 hover:border-gray-300/70 rounded-[1.4rem] lg:w-[20rem] w-full h-[15rem] p-4 flex flex-col gap-3'>
                    <p className='text-xl text-white font-extralight'>{title}</p>
                    <div className='relative font-bold text-gray-600 h-[8rem] overflow-hidden'>
                        <p>{content}</p>
                        <div className="bg-gradient-to-t from-black/90 via-black/90 to-transparent h-[10rem] w-full absolute bottom-[-4.5rem]"></div>
                    </div>
                    <div className='absolute bottom-2 flex gap-2 p-2 w-full left-0 justify-end items-center'>

                        <div className="border-2 border-white/50 flex justify-around items-center p-1 rounded-full w-[1.7rem] h-[1.7rem]">
                            <p className="inline-block">
                                <img src={nextarrow} alt="External link" className="w-[2rem]" />
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
    )
}

export default Blogcard