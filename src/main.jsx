import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import "./config/i18next.config"
import './index.css'

import PaginaPrincipal from './pages/PaginaPrincipal/PaginaPrincipal'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Dashboard from './pages/Coordinacion/Dashboard'
import DashboardMaestro from './pages/Maestro/Dashboard'

import Deportes from './pages/Coordinacion/Deportes'
import ZonaDeJuego from './pages/Coordinacion/ZonaDeJuego'
import Maestro from './pages/Coordinacion/Maestro'
import Solicitudes from './pages/Coordinacion/Solicitudes'



const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/maestro",
    children: [
      {
        index: true,
        element: <DashboardMaestro />
      }
    ]
  },
  {
    path: "/coordinacion",
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'deportes',
        element: <Deportes />
      },
      {
        path: 'zonadejuego',
        element: <ZonaDeJuego />
      },
      {
        path: 'maestros',
        element: <Maestro />
      },
      {
        path: 'solicitudes',
        element: <Solicitudes />
      },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </React.StrictMode>
)
