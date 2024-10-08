import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Error from './Components/Error';


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/" 
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/about" 
          element={
            <>
              <Header />
              <About />
            </>
          }
        /> 
        <Route
          path='*'
          element={
            <>
              <Header />
              <Error />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App;