import { useState, useMemo } from "react";
import Clicker from "./Clicker";
import People from "./People";

export default function App( { clickersCount, children } ) {
    const [ hasClicker, setHasClicker ] = useState(true);
    const [count, setCount] = useState(0);
    const toggleClickerClick = () => { 
        setHasClicker(hasClicker => !hasClicker);
    }

    const increment = () => { 
        setCount(count + 1);
    }
    
    const colors = useMemo(() => {
        const colors = []
        for (let i = 0; i < clickersCount; i++) {
            colors.push(`hsl(${ Math.random() * 360}deg, 100%, 40%, 1)`);
        }
        return colors;
    }, [clickersCount])

    return (
        <div>
            { children }
            <h1>Clickers</h1>
            <div>Total count: { count }</div>
            <button onClick={ toggleClickerClick }>{hasClicker ? 'Hide clicker' : 'Show clicker'}</button>
            {/* { hasClicker ? <Clicker/> : null } */}
            { hasClicker && <>
                { [...Array(clickersCount)].map((value, index) => 
                    <Clicker
                    key= { index }
                    keyName= { `count${index}` } 
                    increment = { increment } 
                    color={ colors[index] } 
                />) }            
                {/* <Clicker keyName='countA' increment = { increment } color={ `hsl(${ Math.random() * 360}deg, 100%, 40%, 1)`} />
                <Clicker keyName='countB' increment = { increment } color={ `hsl(${ Math.random() * 360}deg, 100%, 40%, 1)`} />
                <Clicker keyName='countC' increment = { increment } color={ `hsl(${ Math.random() * 360}deg, 100%, 40%, 1)`} /> */}
            </> }
            <People/>
        </div>
    );
}