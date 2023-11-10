import { useState } from 'react'
import reactLogo from './assets/react.svg'
import joker from './assets/joker.svg'
import './App.css'


function Maincard() {


  return (
    <>
        <div className='card'>
            <img src={joker} width={280}></img>
            <p>Джокер</p>
            <p className='yellow-text'>Триллер, драма, криминал</p>
        </div>
    </>
  )
}

export default Maincard
