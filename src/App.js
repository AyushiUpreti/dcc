import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import LineGradient from './Component/LinearGradient/LineGradient';
import Carousel from './Component/Carousel';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <LineGradient/>
      <Carousel/>

    </div>
  )
}

export default App
