import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bond from './assets/bond.svg'
import './App.css'


function MiniNewsCard() {


  return (
    <>
      <div className='mini_news_card'>
        <img src={bond} width={180}/>
        <h3>Не время умирать.</h3>
      </div>
    </>
  )
}

export default MiniNewsCard
