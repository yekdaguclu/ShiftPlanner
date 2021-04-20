import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

class App extends React.Component {
  state = {
    isLog: false
  }
  handleLogin = (isLog) => this.setState({ isLog })
  render() {
    const { isLog } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {!isLog ?
              <Route exact path='/' render={() => <Login isLogin={this.handleLogin} />} />
              :
              <Route path='/' render={() => <Home />}></Route>
            }
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
