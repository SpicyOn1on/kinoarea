import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bloodshot from './assets/krasava.svg'
import './App.css'


function TopGain() {


  return (
    <>
        <div className='small_card'>
            <div>
            <img src={bloodshot} width={100}></img>
            </div>
            <p>Бладшот</p>
            <div>
            <p className='yellow-text'>2 морбилиона</p>
            <p className='gray_text'>1 морбилион</p>
            </div>
        </div>
    </>
  )
}

export default TopGain
