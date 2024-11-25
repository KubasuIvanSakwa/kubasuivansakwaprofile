import Navlayout from "./Navlayout"
import Home from '/src/assets/logos/home.svg'
import Projects from '/src/assets/logos/projects.svg'

function Leftnav() {

    return (
        <section className="fixed z-[100] left-4 top-[40%]">
            <Navlayout img1={Home} img2={Projects}/>
        </section>
    )
}

export default Leftnav