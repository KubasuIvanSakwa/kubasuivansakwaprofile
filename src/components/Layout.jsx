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
            <section className="backdrop-blur-sm  shadow-xl w-[65vw] h-[100vh] overflow-y-scroll">
                <section className='h-[200vh] w-full'>
                    <div className="toggle-switch">
                        <label className="switch-label">
                            <input type="checkbox" className="checkbox" onClick={handleTog} ref={themeBtn}/>
                                <span className="slider"></span>
                        </label>
                    </div> 
                </section>
            </section>
            <Outlet />
        </section>
    )
}

export default Layout
