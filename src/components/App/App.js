import './App.css';
import React from 'react';

function getTrickList() {
  fetch('http://localhost:3001/api/v1/tricks')
    .then(res => {
      if(!res.ok) {
        const err = new Error(res.statusText)
        err.statusCode = res.status
        throw err
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      
    })
};
console.log(getTrickList())
function App() {
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
