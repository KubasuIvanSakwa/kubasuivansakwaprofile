import homepagepng from '../assets/homepage.png'
import homepageview from '../assets/homepageview.png'

function Projcard({ title, desc, giturl, exturl }) {

    return (
        <section className="mt-5 relative w-full min-h-1h-fit p-2">
            <div className="flex flex-wrap relative w-full bg-red-400 h-[30rem]">
                <div className='relative bg-[url("/src/assets/homepage.png")] bg-cover bg-no-repeat h-[30rem] w-[50rem]'>

                </div>
                <div className='gr absolute z-10 top-0 w-[50rem] h-[30rem] right-0'>
                    <div className='w-full h-full flex justify-end p-1'>
                        <div className='border border-white/10 top-1 relative bg-[url("/src/assets/homepageview.png")] opacity-70 bg-no-repeat rounded-2xl h-[30rem] w-[18rem]'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projcard