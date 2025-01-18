import { useCallback, useEffect, useState } from "react";

function UseRelaod() {
        const [reloading, setReloading] = useState(false);
        const reload = useCallback(() => {
            setReloading(true)
        }, [setReloading])
    
        useEffect(() => {
            if (reloading) {
                setReloading(false)
            }
        }, [reloading, setReloading])
    
        return [reload, reloading]
}

export default UseRelaod