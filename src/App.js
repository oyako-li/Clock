import './App.css';
import {useState} from 'react';


const NOTIFICATION_TITLE = 'One munit';
const START_TITLE = "Let's get start";
const BREAK_TITLE = "Take a break";
const NOTIFICATION_BODY = 'Anounse One Munit';
// const CLICK_MESSAGE = 'Notification clicked!';
let second=0;
let day;


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
  day = new Date();
  const [hh, setHh] = useState(day.getHours());
  const [mm, setMm] = useState(day.getMinutes());
  const [ss, setSs] = useState(day.getSeconds());

  const clock = setInterval(clocks, 1000);

  function clocks(){
    day = new Date();
    second = day.getSeconds();
    setSs(second);
    if(second===0){
      setMm(day.getMinutes());
      setHh(day.getHours());
    }
    clearInterval(clock);
  }
  

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
  const [state, setState] = useState(false);
  
  function addAlerm() {
    if(!state){
      setStyles({'--clr': '#43658b', opacity: 0.7, borderRadius: '10%', width: '80%', height: '80%'});

    }else{
      setStyles({'--clr': '#43658b'});
    }
    setState(!state);
  }

  return (
    <div id='create-alert' className='alert' style={styles} onClick={()=>console.log('world')} ><p onClick={addAlerm}>+</p></div>
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

const notify = setInterval(()=>{
  let minutes = day.getMinutes();
  if(minutes===0){
    new Notification(START_TITLE, {body: "0 time up, So you should start."}).show();
  } else if(minutes===25){
    new Notification(BREAK_TITLE, {body: "25 time up, So you should rest."}).show();
  } else if(minutes===30){
    new Notification(START_TITLE, {body: "30 time up, So you should start."}).show();
  } else if(minutes===55){
    new Notification(BREAK_TITLE, {body: "55 time up, So you should rest."}).show();
  }
}, 60000);

export default App;