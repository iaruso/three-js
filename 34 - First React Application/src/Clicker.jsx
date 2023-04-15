import { useRef, useEffect, useState } from "react";

export default function Clicker({ keyName, color = 'black', increment}) {
    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];
    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0));
    const buttonRef = useRef();

    useEffect(() => { 
        console.log('component mounted');
        buttonRef.current.style.color = 'red';
        console.log(buttonRef.current);
        return () => {
            localStorage.removeItem(keyName);
            console.log('component unmounted');
        }
    })

    useEffect(() => {
        localStorage.setItem(keyName, count);
    }, [count])

    const buttonClick = () => { 
        setCount(count => count + 1);
        increment();
    }

    return (
        <div>
            <p  style={ {color: color} }>Count: { count }</p>
            <button ref={ buttonRef } onClick={buttonClick}>Click Me</button>
        </div>
    );
}