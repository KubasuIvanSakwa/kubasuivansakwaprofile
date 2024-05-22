import { useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"

function Layout() {
    const themeRef = useRef(null)
    const [tog, setTog] = useState('dark theme')
    const theme = useRef(null)

    function handleChange(){
        if(themeRef.current.checked) {
            console.log('checked')
            setTog('dark theme')
        }else {
            console.log('unchecked')
            setTog('light theme')
        }
    }

    useEffect(() => {
        if(tog === 'dark theme') {
            themeRef.current.checked = true
        }
        else if(tog === 'light theme') {
            themeRef.current.checked = false
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { 
            const newColorScheme = e.matches ? 'dark' : 'light'
            newColorScheme === 'dark' ? setTog('dark theme') : setTog('light theme')
        })
    })

    return (
        <section className={`${tog === 'dark theme' ? 'mainpgdark' : 'mainpglight'} ease-in w-full flex justify-center h-[100vh] overflow-hidden`} ref={theme}>
            <section className="backdrop-blur-sm shadow-xl w-[65vw] min-h-fit overflow-y-scroll p-2">
                <nav className='w-full rounded-full h-[3rem] pl-2 flex items-center border border-slate-500/20 justify-end'>
                    <div className="flex justify-between items-center w-full h-fit">
                        <div className="flex items-center h-fit justify-between w-full relative left-[-0.7rem]">
                            <div className="bg-[url('/src/assets/me.png')] w-[2.5rem] h-[2.5rem] bg-cover rounded-full mr-2 ml-2 opacity-70"></div>
                            <div className="flex justify-between w-[11rem]">
                                <input title="change-theme" type="checkbox" onClick={handleChange} className="l cursor-pointer" ref={themeRef}></input>
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
                <Outlet context={tog}/>
            </section>
        </section>
    )
}

export default Layout
