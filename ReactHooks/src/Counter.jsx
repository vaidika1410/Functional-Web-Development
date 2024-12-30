import React, { useState } from 'react';

function Counter() {

    const [num, changeNum] = useState(0);
    
    return ( 
        <div class="main">
            <h1>the number is {num}</h1>
            <button onClick={() => changeNum(num+10)}>increment</button>
            <button onClick={() => changeNum(num-10)}>decrement</button>
        </div>
     );
}

export default Counter;