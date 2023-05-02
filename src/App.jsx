import { useState } from 'react'
import { StyledApp, StyledLogo } from './StyledApp'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routerPath } from './router';
import Nav from './Nav/Nav.jsx'

const router = createBrowserRouter(routerPath);
function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledApp>
      <div className='header'>
        <StyledLogo />
        <Nav />
      </div>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </StyledApp>

  )
}

export default App
