import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackgroundImage from './components/BackgroundImage'
import FromComponent from './components/FormComponent'
import MainContainer from './components/MainContainer'
import Step from './components/Step'
import ButtonSection from './components/ButtonSection'

function App() {
  console.log("App Rendered..")

  return (
    <>
      <div className='xl:flex lg:flex'>
        <BackgroundImage/>
        <MainContainer/>
      </div>
    </>
  )
}

export default App
