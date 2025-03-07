import eternal from '/src/assets/externallink.svg'
import Github from '/src/assets/logos/github.svg'

function Projcard({ title, desc, giturl, exturl }) {

    return (
        <section className='mt-[2rem] flex justify-between flex-wrap'>
            <div className='relative bg-black/70 border-2 border-gray-300/50 hover:border-gray-300/70 rounded-[1.4rem] lg:w-[20rem] w-full h-[15rem] p-4 flex flex-col gap-3'>
                <p className='text-xl text-white font-extralight'>{title}</p>
                <div className='relative font-bold text-gray-600 h-[8rem] overflow-hidden'>
                    <p>{desc}</p>
                    <div className="bg-gradient-to-t from-black/90 via-black/90 to-transparent h-[10rem] w-full absolute bottom-[-4.5rem]"></div>
                </div>
                <div className='absolute bottom-2 flex gap-2 p-2 w-full left-0 justify-end items-center'>
                    <div className="flex justify-around items-center p-1 rounded-full w-[2rem] h-[2rem]">
                        <a href={giturl} target="_blank" className="inline-block">
                            <img src={Github} alt="External link" className="w-[2rem]" />
                        </a>
                    </div>

                    {/* <div className="border-2 border-white/50 flex justify-around items-center p-1 rounded-full w-[1.7rem] h-[1.7rem]">
                        <a href={exturl} target="_blank" className="inline-block">
                            <img src={eternal} alt="External link" className="w-[2rem]" />
                        </a>
                    </div> */}
                    {/* <Link className=''>more</Link> */}
                </div>
            </div>
        </section>
    )
}

export default Projcard