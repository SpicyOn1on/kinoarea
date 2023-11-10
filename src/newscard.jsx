import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bond from './assets/bond.svg'
import './App.css'


function NewsCard() {


  return (
    <>
      <div className='main_news_card'>
        <img src={bond} width={850} />
        <div className='relative_text'>
        <h1>Не время умирать. Перенос релиза фильма</h1>
        <p>Я не буду это писать</p>
      </div>
      </div>
    </>
  )
}

export default NewsCard
