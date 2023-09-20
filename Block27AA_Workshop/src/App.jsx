import { useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import TransactionBar from './Components/TransactionBar'
import LineData from './Components/LineChart'
// import Heading from './Components/Heading'

function App() {



  return (
    <>
    <Dashboard/>
    <br/>
    <br/>
     {/* <Heading/> */}
     <LineData/>
     <br/>
     <br/>
     <TransactionBar/>
    </>
  )
}

export default App
