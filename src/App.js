import React from 'react';
import WeatherContext from './contexts/WeatherContext';

import { Weather } from './components/Weather/Weather';
import Footer from './components/Common/Footer';

import './assets/css/styles.css';

function App() {
  return (
    <>
        <WeatherContext>
          <Weather />
        </WeatherContext>

      <Footer />
    </>
  );
}

export default App;
