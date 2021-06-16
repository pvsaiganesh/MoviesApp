import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Login from './components/LoginRoute'
import Home from './components/HomeRoute'
import Account from './components/AccountRoute'
import Popular from './components/PopularRoute'
import NotFound from './components/NotFoundRoute'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/popular" component={Popular} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
