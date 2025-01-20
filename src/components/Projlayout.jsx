import { Outlet, useOutletContext } from "react-router-dom"

function Projlayout() {

    const [ tog ] = useOutletContext()

    return (
        <section>
            <Outlet context={tog}/>
        </section>
    )
}

export default Projlayout