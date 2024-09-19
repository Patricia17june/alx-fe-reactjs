import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage'
import UserDetails from './components/UserDetails'

function App() {
  return(
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
            <Route path='/User/:Details/' element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
