import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './HomeComponents/Header'
import Hero from './HomeComponents/Hero'
import Board from './HomeComponents/Board'
import BoardCard from './HomeComponents/BoardCard'
import Social from './HomeComponents/Social'
import Projects from './HomeComponents/Projects'
import LatestEvent from './HomeComponents/LatestEvent'
import image from './assets/justin.jpg'
import LottieAnimation from './HomeComponents/LottieAnimation' // Lottie component

function App() {

  return (
    <>
      <div className=""><LottieAnimation/></div>
      <Header />
      <Hero className="mb-20"/>
      <Board className=""/>
      <LatestEvent /> 
      <Projects/>
      <Social />
    </>
  )
}

export default App
