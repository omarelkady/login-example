import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome'
import Navigation from './components/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { SAVE_DATA } from './service/constants'

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = useSelector(state => state.cardData)
  const dispatch = useDispatch();

  async function login() {
    let credentials = { email, password }
    let response = await fetch("https://reqres.in/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    if (response.status == 200) {
      alert("Login Successful")
      console.log(dispatch({
        type: SAVE_DATA,
        response
      }))
    } else {
      alert("Invalid email or password")

    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/welcome" component={Welcome} />
      </BrowserRouter>
      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Sign In</label>
          <br />
          <br />
          <div class="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label className="label">Email</label>
                <input id="user" type="text" className="input form-control" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div class="group">
                <label className="label">Password</label>
                <input id="pass" type="password" className="input form-control" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <br />
              <div className="group">
                <input id="check" type="checkbox" className="check" />
                <label for="check"><span className="icon"></span> Keep me Signed in</label>
              </div>
              <br />
              <div className="group">
                <input onClick={login} type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
