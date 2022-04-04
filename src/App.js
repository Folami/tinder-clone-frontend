import './App.css';
import React from 'react';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
    return (
        <div className="app">
            {/*HEADER */}
            <Header />
            {/*TINDER CARDS*/}
            <TinderCards />
            {/*SWIPE BUTTONS*/}
            <SwipeButtons />
        </div>
    );
}

export default App;
