import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'
import './index.css'
import Protected from './components/Authlayout.jsx'
import {Home, AddPages, AllPages, EditPost, Login, Post, SignUP  } from './pages/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
        <Protected auth={false} >
        <Login/>
          </Protected>
      )},
      {
        path: '/signup',
        element: (
        <Protected auth={false} >
        <SignUP/>
          </Protected>
      )},
      {
        path: '/allposts',
        element: (
        <Protected auth  >
        <AllPages/>
          </Protected>
      )},
      {
        path: '/add-Pages',
        element: (
        <Protected auth >
        <AddPages/>
          </Protected>
      )},
      {
        path: '/Edit-Post/:slug',
        element: (
        <Protected auth >
        <EditPost/>
          </Protected>
      )},
      {
        path: '/Post/:slug',
        element: (
        <Protected auth={true} >
        <Post/>
          </Protected>
      )},
      



    ]
    },
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
  
    </Provider>
  </StrictMode>,
)
