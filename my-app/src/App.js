import './App.css';
import SignUp from './Components/signup'
import LogIn from './Components/login'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>

        <Route exact path="/">
          <SignUp />
        </Route>
      </Switch>
    </div>
  )
}

export default App;