import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Home from "./Components/Home";
import GroupsList from "./Components/GroupsList";
import ModalW from "./Components/ModalW";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Home /> */}
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/groupslist/:id">
          <GroupsList />
        </Route>
        <Route path="/modalw">
          <ModalW />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
