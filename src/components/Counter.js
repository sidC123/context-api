import React from 'react';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';

const Counter = () => {
    return (
        <div>
            <h2>Counter</h2>
            <CounterDisplay />
            <CounterControls />
        </div>
    );
};

export default Counter;
