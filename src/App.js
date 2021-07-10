import React, { useState } from 'react'
import './App.css';
import Characters from './Components/Characters';
import Header from './Components/Header';
import Search from './Components/Search';
import Testing from './Components/Testing';

function App() {
  const [query, setQuery] = useState('')
  return (
    <div className="container">
     {/* <Testing /> */}
     <Header />
     <Search setQuery={setQuery} />
     <Characters query={query}/>
    </div>
  );
}

export default App;
