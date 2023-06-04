import React, { useState, createContext } from 'react';

// Create a new context
const CounterContext = createContext();

// Create a context provider component
const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    // Define functions to increment and decrement the count
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    // Pass the count and functions as values to the context provider
    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CounterProvider };
