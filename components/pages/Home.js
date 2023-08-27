import * as React from 'react';

import MainNavigation from "../layout/MainNavigation"
import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.Home}>
      <div className={classes.div}>
      <h1>Home</h1>
      <h2>I'm frontend developer<br/> with react</h2>
      </div>
    </section>
  );
}

export default Home;
