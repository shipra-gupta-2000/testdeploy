import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    console.log("hello")
    axios.get('https://testdeploy-68rz.onrender.com/')
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
