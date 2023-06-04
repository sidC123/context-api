import React from 'react';
import Counter from './components/Counter';
import { CounterProvider } from './context/CounterContext';
import Demo from './components/Demo';
import { NameProvider } from './context/NameContext';
import { UserDisplay } from './components/UserDisplay';

const App = () => {
  return (
    <>
      <CounterProvider>
        <Counter />
        <Demo />
      </CounterProvider>
      <NameProvider>
        <UserDisplay />
      </NameProvider>
    </>
  );
};

export default App;
