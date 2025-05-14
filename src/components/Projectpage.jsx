import { Link } from "react-router-dom"
import github from "../assets/logos/github.svg"
import preview from "../assets/preview.svg"

function Projectpage() {

    return (
        <section className='p-2'>
            <div className="w-full bg-[#141414] h-fit p-1 mt-[3rem] rounded-[1.5rem]">
                <div className="flex items-center gap-1 w-full h-[4.5rem] mt-1 mr-1">
                        <div className="w-[0.3rem] rounded-full h-[4rem] bg-[#1C1A1A] ml-1 border border-[#4B4B4B]/10"></div>
                        <div className="w-full flex justify-between items-center p-2 h-[90%] bg-gradient-to-r from-[#1C1A1A] to-transparent">
                            <p className="ml-1 font-bold">Mobile Apps</p>
                            <div className="flex items-center gap-2">
                                <Link to={{
                                    pathname: ''
                                }} target="_blank">
                                    <img src={github} className="w-[2rem] opacity-50 hover:opacity-80"/>
                                </Link>

                                <Link to={{
                                    pathname: ''
                                }} target="_blank">
                                    <img src={preview} className="w-[2rem] opacity-50 hover:opacity-80"/>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="w-[97%] ml-3 h-[10rem] bg-gradient-to-b from-[#1C1A1A] via-transparent to-transparent rounded-[0.8rem]">

                </div>
            </div>
        </section>
    )
}

export default Projectpage
