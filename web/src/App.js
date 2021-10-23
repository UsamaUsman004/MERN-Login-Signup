import './App.css';
import SignUp from './Components/signup'
import LogIn from './Components/login'
import Profile from './Components/profile';
import Dashboard from './Components/dashboard';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>

        

        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  )
}

export default App;