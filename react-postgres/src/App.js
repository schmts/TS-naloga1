import React, {useState, useEffect} from 'react';
function App() {
  const RUNTIME_ENV_KEY = window?._env_?.REACT_APP_RUNTIME_PROD_KEY 
  ? window._env_.REACT_APP_RUNTIME_PROD_KEY : window?._env_?.REACT_APP_RUNTIME_PREPROD_KEY;
  const [words, setWords] = useState(false);
  useEffect(() => {
    getWord();
  }, []);
  function getWord() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setWords(data);
      });
  }
  function createWord() {
    let word = prompt('Enter word name');    
    fetch('http://localhost:3001/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({word}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getWord();
      });
  }
  return (
    <div>
      <h1>Pozdravljen, {RUNTIME_ENV_KEY} !</h1>
      {words ? words : 'There is no word data available'}
      <br />
      <button onClick={createWord}>Add word</button>      
    </div>
  );
}
export default App;
