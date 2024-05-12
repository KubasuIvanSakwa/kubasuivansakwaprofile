import { useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"

function Layout() {
    const [tog, setTog] = useState('dark theme')
    const theme = useRef(null)

    useEffect(() => {
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { 
            const newColorScheme = e.matches ? 'dark' : 'light'
            newColorScheme === 'dark' ? setTog('dark theme') : setTog('light theme')
        })
    })

    return (
        <section className={`${tog === 'dark theme' ? 'mainpgdark' : 'mainpglight'} ease-in w-full flex justify-center h-[100vh] overflow-hidden`} ref={theme}>
            <section className="backdrop-blur-sm shadow-xl w-[65vw] h-fit overflow-y-scroll p-2">
                <nav className='w-full rounded-full h-[3rem] pl-2 flex items-center relative border border-slate-500/20 justify-end relative'>
                    <div className="flex justify-between items-center w-full h-fit">
                        <div className="flex items-center h-fit justify-between w-[25%] relative left-[-0.7rem]">
                            <div className="bg-[url('/src/assets/me.png')] w-[2.5rem] h-[2.5rem] bg-cover rounded-full mr-2 ml-2 opacity-70"></div>
                            <a href="/src/assets/KubasuIvanSakwa.pdf" className={`button`} download>
                            <span className="button__text">Resume</span>
                                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                            </a>
                        </div>
                    </div>
                </nav>
                <Outlet context={tog}/>
            </section>
        </section>
    )
}

export default Layout
