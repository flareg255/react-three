import React, { useState } from 'react';
import './App.css';

const Count = ({initialCount}) => {
    const [count, setCount] = useState(initialCount);

    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => Number(prevCount) - 1)}>-</button>
            <button onClick={() => setCount(prevCount => Number(prevCount) + 1)}>+</button>
        </>
    );
}

export default Count;
