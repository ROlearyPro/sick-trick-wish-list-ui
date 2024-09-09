import './App.css';
import React from 'react';
import { useState, useEffect, } from 'react';
import TricksList from '../TricksList/TricksList';
import NewTrick from '../NewTrick/NewTrick'

function App() {

  const [tricks, setTricksList] = useState([]);


  function getTrickList() {
    return fetch('http://localhost:3001/api/v1/tricks')
      .then(res => {
        if(!res.ok) {
          const err = new Error(res.statusText)
          err.statusCode = res.status
          throw err
        }
        return res.json()
      })
      .then(data => {
        // setTricksList([...data]);
        console.log(data)
        return data
      })
      .catch(err => {
        console.log(err)

      });
      
  };

  useEffect(() => {
  getTrickList().then(
    data=>{
        setTricksList(data);
      }
  )
  }, []);

console.log(tricks)
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <TricksList tricks={tricks}/> 
      <div className='addspot'></div>
      <NewTrick tricks={tricks}/>
    </div>
  );
}

export default App; 
