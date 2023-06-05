import React from 'react';
import Counter from './components/Counter';
import { CounterProvider } from './context/CounterContext';
import Demo from './components/Demo';
import { NameProvider } from './context/NameContext';
import User from './components/User';

const App = () => {
  return (
    <>
      <CounterProvider>
        <Counter />
        <Demo />
      </CounterProvider>

      <NameProvider>
        <User />
      </NameProvider>
    </>
  );
};

export default App;
