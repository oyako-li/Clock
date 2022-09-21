import './App.css';
import {useEffect, useState} from 'react';


const START_TITLE = "Let's get start";
const BREAK_TITLE = "Take a break";
let day = new Date();


const TimeSign = () => {
  const items = [];
  for(let i=1; i<13; i++) items.push(<span style={{"--i": i}}><b>{i}</b></span>);
  return (
    <>
        {items}
    </>
  )
};

const TimeHandrer = () => {
    const [hh, setHh] = useState(day.getHours());
    const [mm, setMm] = useState(day.getMinutes());
    const [ss, setSs] = useState(day.getSeconds());
    // set notifications
    useEffect(()=>{
        if(ss===0) new Notification(START_TITLE, {body: "1mun"});
    }, [ss, mm, hh])

    const clock = setInterval(()=>{
        day = new Date();
        setSs(day.getSeconds());
        console.log(ss);
        if(ss===0){
            setMm(day.getMinutes());
            setHh(day.getHours());
        }
        clearInterval(clock);
    }, 1000);
  

  return (
    <>
      <div className="circle" id="mn" style={{"--clr": "#fee800", transform: `rotateZ(${mm*6}deg)`}}><i></i></div>;
      <div className="circle circle2" id="hr" style={{"--clr": "#04fc43", transform: `rotateZ(${hh*30+(mm*6/12)}deg)`}}><i></i></div>;
      <div className="circle circle3" id="sc" style={{"--clr": "#ff2972", transform: `rotateZ(${ss*6}deg)`}}><i></i></div>;
    </>
  )
}

const AlertSetting = () => {
  const [styles, setStyles] = useState({'--clr': '#43658b'});
  
  async function handleAddAlerm() {
    await window.alertApi.load();
  }

  return (
    <div id='create-alert' className='alert' style={styles} onClick={()=>{handleAddAlerm()}}><p>+</p></div>
  )
}

const App = () => {
  return (
    <div className='screen'>
      <div className="clock">
        <TimeSign />
        <TimeHandrer />
      </div>
      <AlertSetting />
    </div>
  )
};

export default App;