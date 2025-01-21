import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Blogcontent() {
    const location = useLocation()
    const [Info, setInfo] = useState([])
    console.log(location?.state.info[0])

    useEffect(() => {
        if(location.pathname === 'dart1') {
            setInfo(location.state.info[0])
            console.log(Info)
        }
    },[])



    return (
        <section className="text-white">
        </section>
    )
}

export default Blogcontent