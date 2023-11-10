import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import MoviePage from './moviepage.jsx'

const route = createBrowserRouter ([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/moviepage',
        element:<MoviePage/>
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}/>
)
