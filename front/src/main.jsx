import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login'
import Panel from './pages/panel'

const Main = () => {
   return(
    <>
    <Login />
    <Panel />
    
    </>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
