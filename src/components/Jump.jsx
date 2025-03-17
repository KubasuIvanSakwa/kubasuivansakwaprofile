import { Analytics } from "@vercel/analytics/react"
import Hero from "./Hero"
import Skills from "./Skills"
import WorkExperience from "./WorkExperience"

function Jump() {

    return (
        <section  className="m-h-fit pt-5">
            <Hero />
            <WorkExperience/>
            <Skills />
            <Analytics />
        </section>
    )
}

export default Jump