import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    console.log("hello")
    axios.get('http://localhost:5000/')
    .then(res => {
      setData(res.data)
    }
    )
  }
  ,[])
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <h1>test app says {data}</h1>
    </div>
  );
}

export default App;
