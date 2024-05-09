import { useRef, useState } from "react"
import { Outlet } from "react-router-dom"

function Layout() {
    const [tog, setTog] = useState('light theme')
    const theme = useRef(null)
    const themeBtn = useRef(null)
    
    function handleTheme() {
        if(tog === 'dark theme') {
            theme.current.classList.remove('mainpglight')
            theme.current.classList.add('mainpgdark')
        }else {
            theme.current.classList.remove('mainpgdark')
            theme.current.classList.add('mainpglight')
        }
    }

    function handleTog() {
        setTog((prevTog) => (
            prevTog === 'light theme' ?  'dark theme' : 'light theme'
        ))
        handleTheme()
    }


    return (
        <section className="mainpgdark ease-in w-full flex justify-center h-[100vh] overflow-hidden" ref={theme}>
            <section className="backdrop-blur-sm shadow-xl w-[65vw] h-fit overflow-y-scroll p-2">
                <nav className='w-full rounded-full h-[3rem] pl-2 flex items-center relative border border-slate-500/20 justify-end relative'>
                    <div className="flex justify-between items-center w-full h-fit">
                        <div className="flex items-center h-fit justify-between w-[14%] relative left-[-0.7rem]">
                            <div className="bg-[url('/src/assets/me.png')] w-[2.5rem] h-[2.5rem] bg-cover rounded-full mr-2 ml-2 opacity-70"></div>
                            <button className={`${tog  === 'dark theme' ?  'text-black' : 'text-white'}`}>resume</button>
                        </div>
                        <div className="toggle-switch mr-2 opacity-70 relative right-[-0.3rem]">
                            <label className="switch-label">
                                <input type="checkbox" className="checkbox" onClick={handleTog} ref={themeBtn}/>
                                    <span className="slider"></span>
                            </label>
                        </div> 
                    </div>
                </nav>
            </section>
            <Outlet />
        </section>
    )
}

export default Layout
