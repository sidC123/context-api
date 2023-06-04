import React from 'react';
import { CounterContext } from '../context/CounterContext';
import { useContext } from 'react';

const Demo = () => {
    const { increment, decrement } = useContext(CounterContext)
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Demo