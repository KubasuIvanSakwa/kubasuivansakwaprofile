
function Nav({ tog, fn, themeref}) {

    return (
        <nav className='w-[99%] rounded-full h-[3rem] pl-2 flex items-center border border-slate-500/20 justify-end fixed z-50'>
            <div className="flex justify-between items-center w-full h-fit">
                <div className="flex items-center h-fit justify-between w-full relative left-[-0.7rem]">
                    <div className="bg-[url('/src/assets/me.png')] w-[2.5rem] h-[2.5rem] bg-cover rounded-full mr-2 ml-2 opacity-70"></div>
                    <div className="flex justify-between w-[11rem]">
                        <input title="change-theme" type="checkbox" onClick={fn} className="l cursor-pointer" ref={themeref}></input>
                        <a  href="/src/assets/KubasuIvanSakwa.pdf" 
                            className={`border ${tog === 'dark theme' ? 'border-white/50 text-white/50' : 'border-black/50 text-black/50'} relative resume w-[6rem] rounded-r-full right-[-0.4rem] h-[2.4rem] flex items-center justify-center p-1 rounded`} 
                            download
                        >   
                            <span className="">resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav