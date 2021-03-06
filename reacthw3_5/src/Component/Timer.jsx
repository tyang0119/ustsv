import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div>
                {seconds}s
        </div>
            <div className="row">
                <button className={`${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'STOP' : 'START'}
                </button>
                <button onClick={reset}>
                    RESET
        </button>
            </div>
        </div>
    );
};

export default Timer;