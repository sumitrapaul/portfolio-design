import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Layout/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Skills from './pages/Skills/Skills';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import ProjectDetails from './pages/Projects/ProjectDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path:"/projects",
        element:<Projects></Projects>,
        loader:() => fetch('/projects.json')
      },
      {
        path:'/details/:id',
        element:<ProjectDetails></ProjectDetails>
      },
  
     
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<ContactUs></ContactUs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
