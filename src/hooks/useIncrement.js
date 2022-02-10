import { useEffect, useState } from "react";


export const useIncrement = (interval) => {
    const [increment, setIncrement] = useState(0);
    const lastIncrementTimestamp = new Date().getTime();
    useEffect(() => {
        let frameId;
        const doEachFrame = () => {
            const currTimestamp = new Date().getTime();
            if (currTimestamp - lastIncrementTimestamp >= interval) {
                setIncrement(increment+1);
            }
            frameId = requestAnimationFrame(doEachFrame);
        };
        requestAnimationFrame(doEachFrame);
        return () => cancelAnimationFrame(frameId);
    }, [])
    return increment;
}