import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import ContactMe from "./components/pages/ContactMe";
import Layout from './components/layout/Layout';
import classes from './index.css';

export default function App() {
  return (
    <div className={classes.appContainer}>
      <Layout>
        <Home />
        <Portfolio />
        <AboutMe />
        <ContactMe />
      </Layout>
    </div>
  );
}
