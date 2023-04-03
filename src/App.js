import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Welcome from './Welcome';
import Survey from './Survey';
import Thankyou from './Thankyou';

function App() {
  return (
  <div className="App">
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/survey">
        <Survey/>
      </Route>
      <Route path="/thankyou">
        <Thankyou/>
      </Route>
    </Switch>
  </div>
  );
}

export default App;
