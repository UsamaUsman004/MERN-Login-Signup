import "./App.css";
import { useEffect, useContext } from "react";
import SignUp from "./Components/signup";
import LogIn from "./Components/login";
import Profile from "./Components/profile";
import Dashboard from "./Components/dashboard";
import { Switch, Route } from "react-router-dom";
import forgetPassword from "./Components/forgetPassword";

import axios from "axios";
import { GlobalContext } from "./Context/context";
// import {storage} from './firebase'

function App() {
  let { state, dispatch } = useContext(GlobalContext);
  const dev = "http://localhost:5000";
  const baseURL =
    window.location.hostname.split(":")[0] === "localhost" ? dev : "";

  useEffect(() => {
    axios
      .get(`${baseURL}/api/v1/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res?.data?.email) {
          dispatch({
            type: "USER_LOGIN",
            payload: {
              name: res.data.name,
              email: res.data.email,
              _id: res.data._id,
              created: res.data.created,
            },
          });
        } else {
          dispatch({ type: "USER_LOGOUT" });
        }
      })
      .catch((e) => {
        dispatch({ type: "USER_LOGOUT" });
      });
    return () => {};
    // eslint-disable-next-line
  }, []);
  console.log(state.user);

  return (
    <div>
      {/* {console.log(state.user)} */}

      {/* <Switch>
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
      </Switch> */}

      {state.user === undefined ? (
        <Switch>
          <Route exact path="/">
            {/* <Splash /> */}
            <h1>Loading...</h1>
          </Route>
          <Route path="*">
            {/* <Splash /> */}
            <h1>Loading...</h1>
          </Route>
        </Switch>
      ) : null}

      {state.user === null ? (
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/forget_password" component={forgetPassword} />
          <Route path="*">
            <Dashboard />
          </Route>
        </Switch>
      ) : null}

      {state.user ? (
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route path="*">
            <Dashboard />
          </Route>
        </Switch>
      ) : null}
    </div>
  );
}

export default App;
