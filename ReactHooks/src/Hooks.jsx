import React, { useState } from 'react';

//hooks are special type of functional components that provides functionalities like state management to the React project

function Hooks() {
    
    // const [readable element, writable element] = useState(10)

    const [a, setA] = useState(10);
    const [user, setUser] = useState('Vaidika');

    const changeA = () => {
        setA(30)
    }

    return ( 
        <div class ="container">
            <h1>value of a is {a}</h1>
            <button onClick={changeA}>change a</button>
            <br /><br />
            <h1>user is {user}</h1>
            <button onClick={() => setUser('Gautam')}>change user</button>
        </div>

    );
}

export default Hooks;