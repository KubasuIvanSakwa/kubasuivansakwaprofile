import useInView from "../hooks/useInView";

function SkillCards({ logo, index }) {
     const [ref, isVisible] = useInView();

    return (
        <div 
            ref={ref}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`${logo} transition-all duration-700 ease-out transform h-[4rem] w-[5rem] bg-no-repeat relative grayscale hover:grayscale-0  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        ></div>
    )
}

export default SkillCards