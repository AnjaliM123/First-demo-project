
import './App.css';

import Header from "./pages/Header"
import Home from "./pages/index"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SignUpPage from './pages/SignUpPage';

//added a routing 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
