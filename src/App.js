import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Index from "./pages/Index";
import AppointmentForm from "./authentication/AppointmentForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HealthTips from "./pages/HealthTips";
import Diagnosis from "./pages/Diagnosis";
import Home from "./video/Home";
import PatientProfile from "./dashboard/PatientProfile";
import OnBoard from "./Auth/OnBoard";
import AddPrescriptions from "./dashboard/prescriptions/AddPrescriptions";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <Router>
        <Switch>
          <Route>
            <Route exact path='/' component={Index} />
            <Route exact path='/appointment' component={AppointmentForm} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/health' component={HealthTips} />
            <Route exact path='/diagnosis' component={Diagnosis} />
            <Route exact path='/video' component={Home} />
            <Route exact path='/profile' component={PatientProfile} />
            <Route exact path='/onboard' component={OnBoard} />
            <Route exact path='/addprescription' component={AddPrescriptions} />
            <Route path="/auth" exact component={() => (!user ? <OnBoard /> : <Redirect to="/profile" />)} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
