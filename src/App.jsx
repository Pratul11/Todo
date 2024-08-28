import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Todo/></>
    },
    {
      path: "/about",
      element: <><Navbar /><About/></>
    },
    {
      path: "/contact/:username",
      element: <><Navbar /><Contact/></>,
      errorElement: <Home/>
    },
  ])
  return (
    <>
      
      <RouterProvider router = {router} />
    </>
  )
}

export default App