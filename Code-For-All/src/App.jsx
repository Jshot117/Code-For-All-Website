import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './HomeComponents/Header'
import Hero from './HomeComponents/Hero'
import Board from './HomeComponents/Board'
import BoardCard from './HomeComponents/BoardCard'
import Social from './HomeComponents/Social'
import LatestEvent from './HomeComponents/LatestEvent'
import image from './assets/justin.jpg'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <BoardCard image={image} name="Justin Espinal" role = "President & Founder" description="I love to collect figures!"/>
      <LatestEvent /> 
      <Social />
    </>
  )
}

export default App
