import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>This is counter app</h1>
            <div id="counter-value">{counter}</div>
            <button id="increment-btn" onClick={() => { setCounter(counter+1) }}>Increment</button>
            <button id="decrement-btn" onClick={() => { setCounter(counter-1) }}>Decrement</button>
        </>
    )
}

export default Counter;