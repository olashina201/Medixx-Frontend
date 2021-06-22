import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppointmentForm from "./authentication/AppointmentForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HealthTips from "./pages/HealthTips";
import Diagnosis from "./pages/Diagnosis";
import VideoCall from "./dashboard/VideoCall";
import VideoChat from "./dashboard/VideoChat";
import Home from "./video/Home";
import Auth from "./Auth/Auth";

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
            <Route exact path='/video' component={VideoCall} />
            <Route exact path='/video-chat' component={VideoChat} />
            <Route exact path='/home' component={Home} />
            <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
