import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <section className="bg-red-400 w-full flex justify-center h-[100vh] overflow-y-scroll">
            <section className="bg-black w-[65vw] h-[200vh]">
                
            </section>
            <Outlet />
        </section>
    )
}

export default Layout
