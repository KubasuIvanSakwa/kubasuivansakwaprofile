import { useEffect, useRef, useState } from 'react';

function useInView(options = {}) {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect(); // animate once
            }
        }, { threshold: 0.2, ...options });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}

export default useInView;
