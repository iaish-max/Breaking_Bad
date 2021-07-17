import React, { useState } from 'react'
import './App.css';
import Characters from './Components/Characters';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Testing from './Components/Testing';
import About from './Components/About';

function App() {
  const [query, setQuery] = useState('')
  return (
    <div>
     <Header />
     <Navbar />
     <About />
     <Search setQuery={setQuery} />
     <Characters query={query}/>
    </div>
  );
}

export default App;
