import React, { useRef,useEffect,useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import * as Scroll from 'react-scroll';

const App = () => {
  const ref = useRef();
  const [animatePage, setAnimatePage] = useState(false);
  let scroll = Scroll.animateScroll
  useEffect(() => {
    setAnimatePage(true)
  },[]);
  useEffect(() => {
    scroll.scrollTo(300,{
      smooth : true,
      duration: 2000,
      delay : 0
    })
  },[animatePage]);


  return (
    <div className="App">
      <div className="navbar" style={{position: "fixed",top :"0px"}} >
        <div className="logo">
          <img src="https://demo.appasamy.com/img/logo.png" alt="Appasamy Logo" height={"30rem"} />
        </div>
        <div className="navItems">
            <div className="navitem">CORPORATE</div>
            <div className="navitem">PRODUCTS</div>
            <div className="navitem">CORPORATE</div>
        </div>
      </div>
     
      <Controller>
        <Scene duration="250%" triggerHook="onLeave" pin>
          {progress => (
            <div class='newContainer'>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
