import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import './App.css';

const KEY = '5d85d8813288f9a392608a98087c12a6';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  
  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      alert('Please Enter the City Name Correctly');
    }
  };

  return (
    <div className="App bg-sky-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="title text-3xl text-purple-800 font-bold mb-8">Weather App</h1>
      
      <div className="input-container flex flex-col items-center mb-6">
        <input 
          type="text" 
          className="input w-80 p-3 border border-gray-400 rounded mb-4 outline-none focus:border-purple-500" 
          placeholder="Enter the City Name" 
          onChange={e => setCity(e.target.value)} 
          value={city} 
        />
        <button 
          className="button bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          onClick={fetchData}
        >
          FETCH
        </button>
      </div>

      {data && (
        <div className="container bg-white shadow-lg p-6 rounded-lg text-center w-80">
          <h1 className="text-xl font-semibold text-purple-700">{data.name}, {data.sys.country}</h1>
          <div className="text-black mt-4">
            <div className="text-2xl font-bold">{Math.round(data.main.temp - 273.15)}°C</div>
            <div className="mt-2">Latitude: {data.coord.lat}</div>
            <div>Longitude: {data.coord.lon}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

