import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {withTranslation} from 'react-i18next';
import {ToastContainer} from 'react-toastify';
import favicon from  "../public/favicon.ico";
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './container/ScrollToTop';
import NotExist from './components/notExist/NotExist404';


import Home from './components/Main/Home/Home';
import Product from './components/Main/Product/Product';
import About from './components/Main/About/About';
import Contact from './components/Main/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
const App = ({t, i18n}) => {

  return (
      <>
        <ToastContainer position="top-right" autoClose={5000} style={{zIndex: '1999'}}/>
        <Helmet title={"AlbertObst"}
                link={[
                  {
                    'rel': 'icon',
                    'type': 'image/png',
                    'href': favicon,
                  },
                ]}
        />
        <BrowserRouter>
          <ScrollToTop>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/Produkt/" component={Product} />
              <Route  path="/uberUns/" component={About} />
              <Route  path="/Kontakt/" component={Contact} />
              <Route component={NotExist} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </>
  );
};

export default withTranslation()(App);

