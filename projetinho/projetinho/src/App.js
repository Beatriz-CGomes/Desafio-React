import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Home from './components/pages/Home'
import Promocao from './components/pages/Promocao'
import Container from './components/Layout/Container'
import Nav from './components/Layout/Nav'
import Footer from './components/Layout/Footer'
import NewProject from './components/pages/NewProject'
import Reserva from '../src/components/reserva/Reserva'
import Banner from '../src/components/pages/Banner'



function App() {
  return (
    
    <Router>
     <Nav />
        
          <Switch>
          <Container customClass="min-height">

           <Route exact path="/Home">
             <Home />
             <NewProject />
             <Promocao />
          </Route>

          <Route exact path="/Promocao">
          <Promocao />
          <Reserva />
          <Banner />
          </Route>


          </Container>
          </Switch>
          <Footer />
          </Router>
    
   
  );
}

export default App;
