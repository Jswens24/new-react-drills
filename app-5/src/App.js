import logo from './logo.svg';
import './App.css';
import RenderImg from './components/RenderImg';
import React, { useState } from 'react'

function App() {
  const [img, setImg] = useState('https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024')

  return (
    <div className="App">
      <RenderImg imgSrc={img} />
    </div>
  );
}

export default App;
