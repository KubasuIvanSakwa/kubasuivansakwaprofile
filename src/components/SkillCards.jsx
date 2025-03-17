import { useOutletContext } from "react-router-dom"


function SkillCards({ logo, name, desc }) {

    const [tog] = useOutletContext()

    return (
        <div className={`${logo} h-[4rem] w-[5rem] bg-no-repeat relative`}></div>
    )
}

export default SkillCards