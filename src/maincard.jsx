import { useState } from 'react'
import reactLogo from './assets/react.svg'
import joker from './assets/joker.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'

function Maincard({
  nav, move
}) {

  return (
    <>
        <div className='card'>
            <a onClick={() => {move(nav)}}><img src={joker} width={280}></img></a>
            <p>Джокер</p>
            <p className='yellow-text'>Триллер, драма, криминал</p>
        </div>
    </>
  )
}

export default Maincard
