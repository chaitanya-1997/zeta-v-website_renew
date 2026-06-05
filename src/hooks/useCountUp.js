import { useEffect, useRef, useState } from 'react';

export function useCountUp(target, duration = 2000) {
    const ref = useRef(null);
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        const isDecimal = String(target).includes('.');
        const numericTarget = parseFloat(target);
        const steps = 60;
        const stepTime = duration / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            // easeOutCubic
            const progress = 1 - Math.pow(1 - step / steps, 3);
            current = numericTarget * progress;
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

            if (step >= steps) {
                clearInterval(timer);
                setCount(isDecimal ? numericTarget : Math.floor(numericTarget));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [started, target, duration]);

    return [ref, count];
}
