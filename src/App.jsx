import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maincard from './maincard'
import Trailercard from './trailercard'
import Personcard from './person'
import NewsCard from './newscard'
import MiniNewsCard from './secondnewscard'
import Premier from './premier'
import TopGain from './top_gain'
import { Navigate, useNavigate } from 'react-router-dom'
import './assets/font/stylesheet.css'


function App() {
const navigate = useNavigate()


  return (
    <>
      <header>
        <div className='logo'>
          <p>Kino</p>
          <p>Area</p>
        </div>
        <div className='nav'>
          <ul>
            <li>Афиша</li>
            <li>Медиа</li>
            <li>Фильмы</li>
            <li>Актёры</li>
            <li>Новости</li>
            <li>Подборки</li>
            <li>Категории</li>
          </ul>
        </div>
        <div className='headbuttns'>
          <button className='search'>0</button>
          <button className='login' onClick={() => 
              {navigate('/moviepage')}
            }>Войти</button>
        </div>
      </header>
      <div className='container'>
        <div className='genres'>
          <h1>Сейчас в кино</h1>
          <div className='polosa'></div>
          <ul>
            <li>Все</li>
            <li>Боевики</li>
            <li>Приключения</li>
            <li>Комедии</li>
            <li>Фантастика</li>
            <li>Триллеры</li>
            <li>Драма</li>
          </ul>
        </div>
        <div className='cont_center'>
          <div className='newcards'>
            <Maincard />
            <Maincard />
            <Maincard />
            <Maincard />
            <Maincard />
            <Maincard />
            <Maincard />
            <Maincard />
          </div>
        </div>
        <div className='cont_center'>
          <button className='allfilms'>Все новинки</button>
        </div>
        <div className='trailers'>
          <div className='trailer_label'>
            <h1>Новые трейлеры</h1>
            <p>Все трейлеры</p>
          </div>
          <div className='cont_center'>
            <iframe width="1145" height="650"
              src="https://www.youtube.com/embed/t433PEQGErc?si=FKn_eFCe2PsYkM3k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>
          <div className='trailer_label'>
            <h1> Джокер </h1>
            <p>место для кнопок</p>
          </div>
          <div className='cont_center'>
            <div className='trailer_list'>
              <Trailercard />
              <Trailercard />

            </div>
          </div>
          </div>
          <div className='popular'>
          <h1>Популярные фильмы</h1>
          <div className='polosa'></div>
          <ul>
           <li>Всё время</li>
            <li>2023</li>
            <li>2022</li>
            <li>2021</li>
            <li>2020</li>
            <li>2019</li>
            <li>2018</li>
          </ul>
        </div>
      <div className='cont_center'>
        <div className='popular_cards'>
            <Maincard />
            <Maincard />
            <Maincard />
            <Maincard />
            </div>
        </div>
        <div className='persons'>
          <div className='personlabel'>
            <h1>Популярные персоны</h1>
            <ul>
              <li>За год</li>
              <li>За месяц</li>
              <li>За неделю</li>
          </ul>
          </div>
          <div className='person_cards'>
            <Personcard />
            <Personcard />
            <div className='person_list'>
              {// нужно сделать отдельный файл с компонентом
                //мне лень
              }
              <div className='person_list_unit'>
                  <p>Тинто Брасс</p>
                  <p>Tinto Brass</p>
                  <p className='yellow-text'>87 лет</p>
              </div>
              <hr/>
              <div className='person_list_unit'>
                  <p>Тинто Брасс</p>
                  <p>Tinto Brass</p>
                  <p className='yellow-text'>87 лет</p>
              </div> 
              <hr/>
              <div className='person_list_unit'>
                  <p>Тинто Брасс</p>
                  <p>Tinto Brass</p>
                  <p className='yellow-text'>87 лет</p>
              </div>
              <hr/> 
              <div className='person_list_unit'>
                  <p>Тинто Брасс</p>
                  <p>Tinto Brass</p>
                  <p className='yellow-text'>87 лет</p>
              </div>             
            </div>
          </div>
        </div>
              <div className='news'>
                <div className='news_label'>
                  <h1>Последние новости</h1>
                  <p>Все новости</p>
                </div>
                <div className='cont_center'>
                <div className='news_block'>
                  <div className='main_news'>
                      <NewsCard/>
                  </div>
                  <div className='secondary_news'>
                    <MiniNewsCard/>
                    <MiniNewsCard/>
                    <MiniNewsCard/>
                    <MiniNewsCard/>
                  </div>
                  </div>
                </div>
              </div>
            <footer>
              <div className='premiers'>
                <div className='premier_label'>
                  <h1>Ожидаемые новинки</h1>
                  <p>btns placeholder</p>
                </div>
                <div className='cont_center'>
                <div className='premiers_films'>
                  <Premier/>
                  <Premier/>
                  <Premier/>
                  <Premier/>
                  </div>
                </div>
              </div>
              <div className='cash_gain'>
                <div className='cash_gain_label'>
                    <h1>Кассовые сборы</h1>
                    <p> 13 марта - 15 марта</p>
                    <hr/>
                    <ul>
                      <li>Россия</li>
                      <li>Весь мир</li>
                      <li>США и Канада</li>
                    </ul>
                </div>
                <div className='cont_center'>
                <div className='cash_gain_best'>
                    <TopGain/>
                    <TopGain/>
                    <TopGain/>
                    <TopGain/>
                    <TopGain/>
                    </div>
                </div>
              </div>
              <div className='cont_center'>
              <div className='email'>
                <h2>Kinoarea</h2>
                <h1>Подпишитесь на E-mail рассылку</h1>
                <p>Если хотите быть в курсе последних новостей и новинок кино -<br/> 
                заполните форму ниже и оформите бесплатную рассылку!</p>
                <div>
                <input type='email'></input>
                <button className='postmail'>Подписаться</button>
                </div>
                </div>
              </div>
              <div className='bottom_info'>
                <div className='bottom_info_nav'>
                  <ul>
                    <li>Афиша</li>
                    <li>Новости</li>
                    <li>Персоны</li>
                    <li>Рейтинги</li>
                    <li>Рецензии</li>
                    <li>Каталог фильмов</li>
                  </ul>
                </div>
                <p className='bottom_text'> 2023 prav net</p>
              </div>
            </footer>
        </div>
      

    </>
  )
}

export default App
