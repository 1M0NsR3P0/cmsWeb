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
import { AppProvider } from './assets/Components/Context.jsx';
import Mail from './assets/Components/Mail.jsx';
import Spam from './assets/Components/Spam.jsx';
import Trash from './assets/Components/Trash.jsx';
import TheMail from './assets/Components/TheMail.jsx';
import SecretRoutes from './assets/Components/SecretRoutes.jsx';
import NewMail from './assets/Components/NewMail.jsx';
import EditProduct from './assets/Components/EditProduct.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/state',
        element: <State />,
        children: [
          {
            path: '/state/traffic',
            element: <Traffic />
          },
          {
            path: '/state/insights',
            element: <Insights />
          },
          {
            path: '/state/subscribers',
            element: <Subscribers />
          },
        ]
      },
      {
        path: '/inbox',
        element: <SecretRoutes><Inbox /></SecretRoutes>,
        children:[
          {
            path:'/inbox/all',
            element:<Mail/>
          },
          {
            path:'/inbox/spam',
            element:<Spam/>
          },
          {
            path:'/inbox/trash',
            element:<Trash/>
          },
        ]
      },
      {
        path:'/mail/:id',
        element:<TheMail/>
      },
      {
        path:'/edit/:id',
        element:<EditProduct/>
      },
      {
        path:'/new/write',
        element:<NewMail/>
      },
      {
        path: '/feedback',
        element: <Feedback />
      },
      {
        path: '/tools',
        element: <Tools />
      },
      {
        path: '/comments',
        element: <Comment />
      },
      {
        path: '/pages',
        element: <Pages />
      },
      {
        path: '/media',
        element: <Media />
      },
      {
        path: '/plugin',
        element: <Plugin />
      },
      {
        path: '/post',
        element: <Post />
      },
      {
        path: '/users',
        element: <User />
      },
      {
        path: '/jetpack',
        element: <ZetPack />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
)
