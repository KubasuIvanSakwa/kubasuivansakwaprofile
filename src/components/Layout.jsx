import { useRef, useState } from "react"
import { Outlet } from "react-router-dom"

function Layout() {
    const [tog, setTog] = useState('dark theme')
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
            prevTog === 'dark theme' ?  'light theme' : 'dark theme'
        ))
        handleTheme()
    }


    return (
        <section className="mainpglight ease-in w-full flex justify-center h-[100vh] overflow-hidden" ref={theme}>
            <section className="backdrop-blur-sm  shadow-xl w-[65vw] h-[100vh] overflow-y-scroll">
                <section className='h-[200vh] w-full'>
                    <button
                        onClick={handleTog}
                        className=" border border-white bg-black text-white m-4 p-2 rounded-full w-fit"
                        ref={themeBtn}
                    >
                        {tog}
                    </button>
                </section>
            </section>
            <Outlet />
        </section>
    )
}

export default Layout
