import "./App.css";

import Header from "./pages/Header";
import Home from "./pages/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PostsList from "./pages/PostsList";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/posts" component={PostsList} />
          <Route exact path="/post-details" component={PostDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
