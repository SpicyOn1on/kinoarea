import { useState } from 'react'
import reactLogo from './assets/react.svg'
import poka from './assets/poka.svg'
import './App.css'


function Premier() {


  return (
    <>
        <div className='card'>
            <img src={poka} width={280}></img>
            <p>Прощай</p>
            <p className='yellow-text'> 14 мая 2023 в России</p>
        </div>
    </>
  )
}

export default Premier
