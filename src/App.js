import React from 'react'
import { Footer, Blog, Possibility, Features, AIBASE, Header } from './containers';
import { CTA, Brand, NavBar } from './components';
import './App.css'


const App = () => {
  return (
    <div>
        <div className='App'>
            <NavBar />
            <Header />
        </div>
        <Brand />
        <AIBASE /> 
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App