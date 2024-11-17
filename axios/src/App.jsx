import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const [data, setData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list');

    setData(response.data);
  }


  return (
    <>
      <button onClick={getData}>get data</button>
      <div className="data">
        {data.map(function(elem, idx){
          return <div key={idx}>
            <h2>{elem.author}</h2>
            <img src={elem.download_url} alt="image" />
          </div>
        })}
      </div>
    </>
  )
}

export default App
