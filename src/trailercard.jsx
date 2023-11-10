import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mulan from './assets/template_pic.svg'
import './App.css'


function Trailercard({
  seturl, url
}) {



  return (
    <>
        <div className='trailer_card'>
            <a onClick={() => {seturl(url)}}><img src={mulan} width={300} height={200}/></a>
        </div>
    </>
  )
}

export default Trailercard
