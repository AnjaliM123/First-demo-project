
import './App.css';

import Header from "./pages/Header"
import Home from "./pages/index"
import { BrowserRouter, Switch, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
