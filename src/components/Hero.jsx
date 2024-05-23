import { Link, useOutletContext } from "react-router-dom"

function Hero() {
    const [ tog ] = useOutletContext()
    
    return (
        <section className={`${tog === 'd' ? 'text-white' : 'text-black'} mt-10`}>
            <section className="flex justify-end">
                <section className="flex w-[15rem] h-[6.4rem] rounded-[18px] p-2 m-2 bg-[#A9A9A9]/40">
                    <div className=" rounded-[18px] w-[2.5rem] flex justify-center items-center ">
                        <p className={`${tog === 'l' ? 'text-[#252525]' : 'text-[#dad5d5]'} text-4xl pacifico-regular`}>
                            I
                            <span className="text-sm">ntro</span>
                        </p>
                    </div>
                    <div className="ml-3 flex-col h-[4rem] w-[10rem] top-[0.1rem] relative pacifico-regular">
                        <p className={`${tog === 'l' ? 'text-[#252525]' : 'text-[#dad5d5]'} text-[0.875rem] leading-3 `}>Software engineer</p>
                        <p className="leading-6 text-[2rem] text-[#a5a5a5] relative z-10">Kubasu</p>
                        <p className="leading-6 text-[2rem] text-[#b36464] relative z-30">Ivan</p>
                        <p className="leading-6 text-[2rem] text-[#a5a5a5] relative z-40">Sakwa</p>
                    </div>
                </section>
            </section>
            <section className="flex flex-col justify-center mt-10 items-center w-full ">
                <hr className={`${tog === 'd' ? 'border-white/20 bg-[#080808]/90' : 'border-black/20 bg-[#afaeae]'} border w-[10rem]`}/>
            </section>
            <section className="flex mt-10 justify-center relative">
                <div className={`${tog === 'd' ? 'border-white/20 bg-[#080808]/90' : 'border-black/20 bg-[#afaeae]'} card-1 border-t border-l border-b w-[15rem] h-[18rem] ml-2 rounded-[20px] relative z-10 left-[2rem] top-4 flex justify-center items-center`}>
                    <div className="w-[20rem] mr-[2rem] p-3 h-[15rem] flex flex-col justify-center items-center">
                        <h1>Previous Company</h1>
                        <h1>MutableTech</h1>
                    </div>
                </div>
                <div className={`${tog === 'd' ? 'border-white/20 bg-[#080808]/90' : 'border-black/20 bg-[#afaeae]'} border w-[15rem] h-[21rem] bottom-3 ml-2 rounded-[20px] relative z-20 backdrop-blur-3xl overflow-hidden card-2`}style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>
                    <div className="w-[full] p-3 h-[20rem] mt-2 flex flex-col justify-center items-center">
                        <h1>Currently At</h1>
                        <h1>Rawlinz Designs</h1>
                    </div>
                </div>
                <div className={`${tog === 'd' ? 'border-white/20 bg-[#080808]/90' : 'border-black/20 bg-[#afaeae]'} card-3 overflow-hidden border-r border-t border-b  w-[15rem] h-[18rem] ml-2 rounded-[20px] relative z-10 top-4 right-[2rem] flex justify-center items-center`}>
                    <div className="w-[20rem] ml-[2rem] p-3 h-[15rem] flex flex-col justify-center items-center">
                        <h1>Previous Company</h1>
                        <h1>MutableTech</h1>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center mt-4 items-center w-full ">
                <hr className={`${tog === 'd' ? 'border-white/20 bg-[#080808]/90' : 'border-black/20 bg-[#afaeae]'} border w-[10rem]`}/>
            </section>
        </section>
    )
}

export default Hero