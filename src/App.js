import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Appoinment from './Components/Appoinment/Appoinment';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingService from './Components/Booking/BookingService/BookingService';
function App() {
  return (
    <div className="App">

      <AuthProvider> <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">

            <Home></Home>
          </Route>

          <Route path="/home">

            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>

          </Route>

          <PrivateRoute path="/blog">

            <Blog></Blog>
          </PrivateRoute>

          <PrivateRoute path="/appoinment">

            <Appoinment></Appoinment>
          </PrivateRoute>

          <Route path="/aboutus">

            <AboutUs></AboutUs>
          </Route>

          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>


          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <PrivateRoute path="/bookingservice/:serviceKey">
            <BookingService></BookingService>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
