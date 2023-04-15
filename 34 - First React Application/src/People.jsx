import { useEffect, useState } from "react";

export default function People() {
    const [people, setPeople] = useState([
        { id: 1, name: 'John'},
        { id: 2, name: 'Jane'},
        { id: 3, name: 'Jack'},
        { id: 4, name: 'Jill'}
    ]);

    const getPeople = async () => { 
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setPeople(data);
            // .then(response => response.json())
            // .then(data => setPeople(data))
    }
    

    useEffect(() => { 
        getPeople()
    }, [])

    return (
        <div>
            <h2>People</h2>
            <ul>
                { people.map((person) => <li key={ person.id }>{ person.name }</li>) }
            </ul>
        </div>
    );
}