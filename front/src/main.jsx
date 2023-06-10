import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login'
import Panel from './pages/panel'
import { Switch, Route, Redirect } from 'wouter';
import Register from './pages/register';


const Main = () => {
   return(
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/panel' component={Panel} />
      <Route path='/' component={Register} />
      <Redirect to='/login' />
    </Switch>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
