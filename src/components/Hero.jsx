import { useOutletContext } from "react-router-dom"

function Hero() {
    const [ tog ] = useOutletContext()

    return (
        <section className={`${tog === 'd' ? 'text-white' : 'text-black'} flex justify-end mt-10`}>
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
    )
}

export default Hero