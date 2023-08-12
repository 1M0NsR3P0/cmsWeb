import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Outlets from './Outlets.jsx';
import Home from './assets/Components/Home.jsx';
import State from './assets/Components/State.jsx';
import Inbox from './assets/Components/Inbox.jsx';
import Feedback from './assets/Components/Feedback.jsx';
import Tools from './assets/Components/Tools.jsx';
import Comment from './assets/Components/Comment.jsx';
import Pages from './assets/Components/Pages.jsx';
import Media from './assets/Components/Media.jsx';
import Plugin from './assets/Components/Plugin.jsx';
import Post from './assets/Components/Post.jsx';
import User from './assets/Components/User.jsx';
import ZetPack from './assets/Components/ZetPack.jsx';
import Traffic from './assets/Components/Traffic.jsx';
import Insights from './assets/Components/Insights.jsx';
import Subscribers from './assets/Components/Subscribers.jsx';
const router = createBrowserRouter ([
  {
    path : '/',
    element :<App/>,
    children : [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/state',
        element: <State/>,
        children:[
          {
            path:'/state/traffic',
            element:<Traffic/>
          },
          {
            path:'/state/insights',
            element:<Insights/>
          },
          {
            path:'/state/subscribers',
            element:<Subscribers/>
          },
        ]
      },
      {
        path:'/inbox',
        element:<Inbox/>
      },
      {
        path:'/feedback',
        element: <Feedback/>
      },
      {
        path:'/tools',
        element:<Tools/>
      },
      {
        path:'/comments',
        element: <Comment/>
      },
      {
        path:'/pages',
        element:<Pages/>
      },
      {
        path:'/media',
        element: <Media/>
      },
      {
        path:'/plugin',
        element:<Plugin/>
      },
      {
        path:'/post',
        element: <Post/>
      },
      {
        path:'/users',
        element:<User/>
      },
      {
        path:'/jetpack',
        element: <ZetPack/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
