import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import AppointmentForm from "./authentication/AppointmentForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HealthTips from "./pages/HealthTips";
import Diagnosis from "./pages/Diagnosis";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route>
            <Route exact path='/' component={Index} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/appointment' component={AppointmentForm} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/health' component={HealthTips} />
            <Route exact path='/diagnosis' component={Diagnosis} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
