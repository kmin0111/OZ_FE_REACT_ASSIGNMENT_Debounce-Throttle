import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [debounceInput, setDebounceInput] = useState('');
  const [throttleInput, setThrottleInput] = useState('');
  const time = useRef(new Date());
  const handleThrottleChange = (e) => {
    setThrottleInput(e.target.value);
    };
  const handleDebounceChange = (e) => {
  setDebounceInput(e.target.value);
  };

  useEffect(()=>{
    const newTime = new Date();

    const throttleTimer = setTimeout(()=>{
      throttleInput && console.log('검색 쿼리:',throttleInput);
      time.current = new Date();
    },1000 - (newTime - time.current));
    return ()=> clearTimeout(throttleTimer);
  }, [throttleInput]);


  useEffect(() => {
    const debounceTimer = setTimeout(() => {
        debounceInput && console.log('검색 쿼리:',debounceInput);
       }, 1000);

    return () => clearTimeout(debounceTimer);
  }, [debounceInput]);

  return (
    <div className="container">
      <h1>
        debounce와 throttle을
        <br />
        이용한 검색
      </h1>
      <div>
        <h2>Debounce</h2>
        <input
          type="text"
          placeholder="Debounce를 이용한 검색..."
          value={debounceInput}
          onChange={handleDebounceChange}
        />
      </div>
      <div>
        <h2>Throttle</h2>
        <input
          type="text"
          placeholder="Throttle을 이용한 검색..."
          onChange={handleThrottleChange}
        />
      </div>
    </div>
  );
}

export default App;
