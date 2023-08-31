import * as React from 'react';
import { motion } from 'framer-motion';

import MainNavigation from "../layout/MainNavigation"
import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.Home}>
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className={classes.div}>
      <img src="https://drive.google.com/uc?id=17ILR39_Rz_QvWJ1wF5nRFOKx4Afe4Aj-"/>
      <h2>I'm frontend developer<br/> with react</h2>
      </div>
      </motion.div>
    </section>
  );
}

export default Home;
