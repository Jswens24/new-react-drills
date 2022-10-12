import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [titleJoke, setTitleJoke] = useState('')

  useEffect(() => {
    axios
      .get('https://api.jokes.one/jod')
      .then((res) => {
        // console.log(res.data.contents.jokes[0].joke.text)
        setTitleJoke(res.data.contents.jokes[0].joke.text)
      })
  }, [titleJoke])

  return (
    <div className="App">
      <h1>Funny Jokes</h1>
      <div>
        <h4>{titleJoke}</h4>
      </div>
    </div>
  );
}

export default App;
