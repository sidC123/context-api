import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterDisplay = () => {
    const { count } = useContext(CounterContext);

    return <p>Count: {count}</p>;
};

export default CounterDisplay;
