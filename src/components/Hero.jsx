import { useOutletContext } from "react-router-dom"

function Hero() {
    const [ tog ] = useOutletContext();
    console.log(tog)

    return (
        <section className={`${tog === 'd' ? 'text-white' : 'text-black'} bg-blue-300/40`}>
            Hero
        </section>
    )
}

export default Hero