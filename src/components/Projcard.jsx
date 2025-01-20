import eternal from '/src/assets/externallink.svg'
import Github from '/src/assets/logos/github.svg'

function Projcard() {

    return (
        <section className='mt-[2rem] flex justify-between flex-wrap'>
                <div className='relative text-gray-800 border border-gray-300 rounded-[1.4rem] w-[20rem] h-[15rem] p-4 flex flex-col gap-3'>
                    <p className='text-lg font-semibold'>Name</p>
                    <p className='text-sm text-gray-600'>Short description goes here</p>
                    <div className='absolute bottom-2 flex gap-2 p-2 w-full left-0 justify-end items-center'>
                        <div className="flex justify-around items-center p-1 rounded-full w-[2rem] h-[2rem]">
                            <p className="inline-block">
                                <img src={Github} alt="External link" className="w-[2rem]" />
                            </p>
                        </div>

                        <div className="border-2 border-white/50 flex justify-around items-center p-1 rounded-full w-[1.7rem] h-[1.7rem]">
                            <p className="inline-block">
                                <img src={eternal} alt="External link" className="w-[2rem]" />
                            </p>
                        </div>
                        {/* <Link className=''>more</Link> */}
                    </div>
                </div>
            </section>
    )
}

export default Projcard