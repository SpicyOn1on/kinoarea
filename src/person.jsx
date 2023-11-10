import { useState } from 'react'
import reactLogo from './assets/react.svg'
import stethem from './assets/stethem.svg'
import './App.css'


function Personcard() {


  return (
    <>
        <div className='p_card'>
            <img src={stethem} width={320}></img>
            <p>Джейсон Стейтем</p>
            <p className='eng_name'> Jason Statham</p>
            <p className='yellow-text'>52 года</p>
        </div>
    </>
  )
}

export default Personcard
