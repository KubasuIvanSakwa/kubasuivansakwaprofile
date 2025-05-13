import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

// import UseRelaod from "../hooks/UseRelaod"; //self hook
import Leftnav from "./Leftnav";
import Nav from "./Nav";
import Rightnav from "./Rightnav";

function Layout() {
    const themeRef = useRef(null);
    const [tog, setTog] = useState("dark theme");
    const theme = useRef(null);

    function handleChange() {
        if (themeRef.current.checked) {
            setTog("dark theme");
        } else {
            setTog("light theme");
        }
    }

    return (
        <section
            className={`${tog === "dark theme" ? "mainpgdark" : "mainpglight"
                } ease-in w-full flex justify-center h-[100vh] overflow-hidden`}
            ref={theme}
        >
            <Leftnav tog={tog} />
            <Rightnav tog={tog} />
            <section // for chatgpt I want this section to have a min-h-fit so that it is dynamic but to also scroll, when I add the min-h-fit, it refuss to scroll
                className={`backdrop-blur-sm lg:shadow-xl lg:w-[65vw] w-full min-h-screen overflow-y-auto scroll-smooth p-1 overflow-x-hidden`}
            >
                <div className={`${tog === "dark theme" ? "center-piece-dark" : "center-piece-light" } relative min-h-fit`}>
                    <Nav tog={tog} themeref={themeRef} fn={handleChange} />
                    <Outlet context={tog} />
                </div>
            </section>
        </section>
    );
}

export default Layout;


    // useEffect(() => {
    //     if (tog === "dark theme") {
    //         themeRef.current.checked = true;
    //     } else if (tog === "light theme") {
    //         themeRef.current.checked = false;
    //     }

    //     window
    //         .matchMedia("(prefers-color-scheme: dark)")
    //         .addEventListener("change", function (e) {
    //             const newColorScheme = e.matches ? "dark" : "light";
    //             setTog(newColorScheme === "dark" ? "dark theme" : "light theme");
    //         });
    // }, [tog]);
