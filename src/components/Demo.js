import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Demo = () => {
    const { increment, decrement } = useContext(CounterContext)
    return (
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Demo