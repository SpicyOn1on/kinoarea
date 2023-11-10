import { useState } from 'react'
import reactLogo from './assets/react.svg'
import joker from './assets/joker.svg'
import './App.css'
import poster from './assets/page.svg'
import './moviepagestyle.css'


function MoviePage() {


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
          <button className='login'>Войти</button>
        </div>
      </header>
      <div className='cont_center'>
        <div className='poster'>
          <img src={poster} width={350}/>
          <div className='desc_list'>
            <ul>
              <li>Главная</li>
              <li>Фильмы</li>
              <li>Побег из Претории</li>
            </ul>
            <h1>Побег из Претории</h1>
            <h3>Escape from Pretoria</h3>
            <p className='review'>8.70</p>
            <p className='review'>kinoarea</p>
            <p>Двое борцов за свободу отбывают срок в одной из самых строгих тюрем<br/>
             мира — в «Претории». Вместе с другими узниками они планируют дерзкий и <br/>
             опасный побег. Но придумать план — это только первый шаг. Шаг второй<br/>
              — реализация плана.</p>
            <button className='watch_trailer'>Смотреть трейлер</button>

          </div>
        </div>
        </div>
        <div className='cont_center'>
        <div className='kino_info'>
          <div className='list_desc'>
            <ul>
              <li>Год:</li>
              <li>Страна:</li>
              <li>Слоган:</li>
              <li>Режиссер:</li>
              <li>Сценарий:</li>
              <li>Продюссер:</li>
              <li>Оператор:</li>
              <li>Композитор:</li>
            </ul>
          </div>
          <div className='list_desc_yellow'>
                <ul>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">Великобритания</a>, <a href='#'>Австралия</a></li>
                  <li>"Подбери ключ к свободе"</li>
                  <li><a href="#">Френсис Аннан</a></li>
                  <li><a href="#">Френсис Аннан</a>, <a href="#">Л.Х Адамс</a>, <a href="#">Кэрол Гриффитс</a>, <a href="#">...</a></li>
                  <li><a href="#">Дэвид Баррон</a>, <a href="#">Марк Блейни</a>, <a href="#">Гэри Хэмилтон</a>, <a href="#">...</a></li>
                  <li><a href="#">Джеффри Холл</a></li>
                  <li><a href="#">Дэвид Хиршфелдер</a></li>
                </ul>
              </div>
          <div className='list_desc'>
              <ul>
                <li>Художник:</li>
                <li>Монтаж:</li>
                <li>Жанр:</li>
                <li>Сборы в мире:</li>
                <li>Премьера (мир):</li>
                <li>Премьера (РФ):</li>
                <li>Возраст:</li>
                <li>Время:</li>
              </ul>
          </div>
          <div className='list_desc_yellow'>
              <ul>
              <li><a href="#">Френсис Аннан</a>, <a href="#">Л.Х Адамс</a>, <a href="#">Кэрол Гриффитс</a>, <a href="#">...</a></li>
              <li><a href="#">2020</a></li>
              <li><a href="#">2020</a></li>
              <li>2020</li>
              <li><a href="#">1 марта 2020</a></li>
              <li><a href="#">14 мая 2020</a></li>
              <li>16+</li>
              <li>106 мин./01:46</li>
              </ul>
          </div>
          </div>
          </div>
          <div className='quotes'>
            <h1>Цитаты из фильма</h1>
             <div className='quotes_block'>
              <p>Внимание! Анекдот</p>
             </div>
          </div>
    </>
  )
}

export default MoviePage
