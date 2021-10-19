import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import ServiceDetails from "./Pages/Services/ServiceDetails/ServiceDetails";
import PrivatRoute from "./Pages/PrivatRoute/PrivatRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <PrivatRoute exact path="/services">
              <Services />
            </PrivatRoute>
            <PrivatRoute exact path="/service/:id">
              <ServiceDetails />
            </PrivatRoute>
            <PrivatRoute exact path="/about">
              <About />
            </PrivatRoute>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
