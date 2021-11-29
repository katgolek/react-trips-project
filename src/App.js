//import logo from './logo.svg';
import React, { useState } from 'react'
import data from './data'
import './App.css';
import TripList  from './TripList'


function App() {
  const [trips, setTrips] = useState(data)
  return (
    <div className="App">
        <h3>Welcome, Kate</h3>
        <h1 className="app-header">We prepared {trips.length} gateway trips for today for you</h1>
        <section className="trip-list">
        <TripList trips={trips}/>
        </section>
        <button onClick={() => setTrips([])} className='app-btn'>Thanks! Another time</button>
       
    </div>
  );
}

export default App;
