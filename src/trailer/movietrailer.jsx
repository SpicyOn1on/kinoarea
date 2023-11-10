import { useState } from 'react'
import '../App.css'
import Trailercard from '../trailercard'


function MovieTrailer() {

    const [videourl, setVideoUrl] = useState('https://www.youtube.com/embed/KBiOF3y1W0Y?si=ppKyFJA0HrApDCJE')
    
  return (
    <>
        <div className='cont_center'>
            <iframe width="1145" height="650"
              src={videourl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
        </div>
        <div className='trailer_label'>
            <h1> Джокер </h1>
            <div className='reaction_buttons'>
              <button className='reactbtn'>+</button>
              <button className='reactbtn'>-</button>
              <p>3000</p>
              <p>1000</p>
            </div>
          </div>
        <div className='cont_center'>
            <div className='trailer_list'>

                <Trailercard seturl={setVideoUrl} url={'https://www.youtube.com/embed/t433PEQGErc?si=eqk_U9ST0f6UmzhK'}/>
                <Trailercard seturl={setVideoUrl} url={'https://www.youtube.com/embed/uYPbbksJxIg?si=NDq2r-RxiBhqHpzF'}/>
                <Trailercard seturl={setVideoUrl} url={'https://www.youtube.com/embed/KBiOF3y1W0Y?si=ppKyFJA0HrApDCJE'}/>
                <Trailercard seturl={setVideoUrl} url={'https://www.youtube.com/embed/pBk4NYhWNMM?si=1NawhCOcnNKXWaR2'}/>
            
            </div>
        </div>
    </>
  )
}

export default MovieTrailer
