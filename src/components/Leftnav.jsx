import Navlayout from "./Navlayout"
import Home from '/src/assets/logos/home.svg'
import Projectsclosed from '/src/assets/logos/projectsclosed.svg'
import Projectsopen from '/src/assets/logos/projectsopen.svg'

function Leftnav({ tog }) {

    return (
        <section className={`fixed z-[100] left-4 top-[40%] md:hidden hidden lg:block`}>
            <Navlayout img1={Home} img2={Projectsopen} img0={Projectsclosed} url1="/" url2="projects" tog={tog} blog="1"/>
        </section>
    )
}

export default Leftnav
