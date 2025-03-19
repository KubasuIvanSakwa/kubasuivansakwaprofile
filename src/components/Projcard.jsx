
function Projcard({ title, desc, giturl, exturl }) {

    return (
        <section className="mt-5">
            <div className="opacity-[.9] hover:opacity-[1] relative border-2 hover:border-white/50 border-white/20 overflow-hidden lg:w-[25rem] md:w-[25rem] w-full h-[16rem] rounded-[1.5rem] bg-black/80 bg-cover bg-center">
                <div className="absolute w-full h-full bg-[url('/src/assets/codeedit.png')] bg-cover bg-no-repeat">

                </div>
                <div className="absolute w-[15rem] border-2 border-white/20 shadow-sm rounded-lg bottom-[0.6rem] right-[0.2rem] h-[10rem] bg-[url('/src/assets/selfsite.png')] bg-cover bg-no-repeat">

                </div>

                <div className="absolute z-20 w-full h-full flex justify-center items-center">
                    <button className="w-[13rem] border border-white/20 h-[2.5rem] bg-black/80 backdrop-blur-sm rounded-full flex justify-center items-center">
                        <p className="btn-shine">
                            codeshare
                        </p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Projcard