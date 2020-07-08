import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container'
import './App.css';
import Header from './Header';
import Contenido from './Contenido' ;
import Footer from './Footer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Container fluid>
    <Router>
     <Header/>
     <Contenido/>
     </Router>
     <Footer/>
   </Container>
  );
}

export default App;
