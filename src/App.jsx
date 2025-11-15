import { useEffect, useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import Header from './components/Header'

function App() {
  // Lifting State Up
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }

  /* 
    useEffect RUNS for the First time,
      - AFTER THE FIRST RENDER OF THE COMPONENT
  
  */

  /* useEffect(() => {
    console.log('Component Mounted');
  }) */
  // In this case, useEffect will RUN IN EVERY RENDER OF THE COMPONENTS

  /* useEffect(() => {
    console.log('Component Mounted');
  }, [count]); */
  // In this case, useEffect will RUN ONLY AFTER FIRST RENDER OF THE COMPONENT

  return (
    <>
      <div className="app">
        <Header
          props={count}
        />
        {/* { props: initalValueOfState } */}
        <h1>
          React Warmup Application
        </h1>
      </div>
      {/* <Counter jaKhushi={count} /> */}

      <Counter props={count} />

      
      {/* <button className='increment' onClick={() => setCount(count + 1)}> */}
      <button
        className='increment'
        onClick={handleCount}
      >
        Increment Count
      </button>
    </>
  )
}

export default App;