import Navlayout from "./Navlayout"
import Github from '/src/assets/logos/github.svg'
import Linkedin from '/src/assets/logos/linkedin.svg'

function Rightnav() {

    return (
        <section className="text-red-400 fixed z-[100] right-[4rem] top-[40%]">
            <Navlayout img1={Github} img2={Linkedin} />
        </section>
    )
}

export default Rightnav