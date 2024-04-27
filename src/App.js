import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Projects from './components/Projects';
import Header from './components/Header';
import Home from './components/Home'; // Import your Home component
import About from './components/About'; // Import your About component
import Contact from './components/Contact'; // Import your Contact component
import NotFound from './components/NotFound'; // Import your NotFound component

function App() {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/notfound" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
