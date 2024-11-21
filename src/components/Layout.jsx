import { useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function Layout() {
    const themeRef = useRef(null)
    const [tog, setTog] = useState('dark theme')
    const theme = useRef(null)

    function handleChange(){
        if(themeRef.current.checked) {
            // console.log('checked')
            setTog('dark theme')
        }else {
            // console.log('unchecked')
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
            <section className="backdrop-blur-sm lg:shadow-xl lg:w-[65vw] w-full min-h-fit overflow-y-scroll p-1 pt-3 mb-1">
                <svg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'
                    className="lg:absolute hidden lg:block md:block md:absolute top-[-3rem] opacity-[0.1] h-[190vh]"
                >
                    <filter id='noiseFilter'>
                        <feTurbulence 
                        type='fractalNoise' 
                        baseFrequency='5.8' 
                        numOctaves='3' 
                        stitchTiles='stitch'/>
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
                </svg>
                <Nav tog={tog} themeref={themeRef} fn={handleChange}/>
                <Outlet context={tog} />
            </section>
        </section>
    )
}

export default Layout
