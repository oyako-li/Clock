import './App_1.css';
import {useEffect, useState} from 'react';


const START_TITLE = "Let's get start";
const BREAK_TITLE = "Take a break";
let day = new Date();


const TimeSign = () => {
  const items = [];
  for(let i=1; i<13; i++) items.push(<span style={{"--i": i+1.6}}><b>{i}</b></span>);
  return (
    <>
        {items}
    </>
  )
};

// const TimeHandrer = () => {
//   return (
//     <>

//     </>
//   )
// }

// const AlertSetting = () => {
//   const [styles, setStyles] = useState({'--clr': '#43658b'});
  
//   async function handleAddAlerm() {
//     await window.alertApi.load();
//   }

//   return (
//     <div id='create-alert' className='alert' style={styles} onClick={()=>{handleAddAlerm()}}><p>+</p></div>
//   )
// }

const App = () => {
  const [hh, setHh] = useState(day.getHours());
  const [mm, setMm] = useState(day.getMinutes());
  const [ss, setSs] = useState(day.getSeconds());
  // set notifications
  // useEffect(()=>{
  //     if(ss===0) new Notification(START_TITLE, {body: "1mun"});
  // }, [ss])

  const clock = setInterval(()=>{
      day = new Date();
      setSs(day.getSeconds());
      // console.log(ss);
      if(ss===0){
          setMm(day.getMinutes());
          setHh(day.getHours());
          // console.log(hh,mm);
      }
      clearInterval(clock);
  }, 1000);

  return (
    <div className='container'>
      <div className="clock">
        <TimeSign />
        <div className="circle" id="mn" style={{"--clr": "#fee800", transform: `rotateZ(${mm*6}deg)`}}>
          <div className="circle circle2" id="hr" style={{"--clr": "#04fc43", transform: `rotateZ(${hh*30+mm/2-mm*6}deg)`}}>
              <div className="circle circle3" id="sc" style={{"--clr": "#ff2972", transform: `rotateZ(${(ss-1)*6-hh*30-mm/2}deg)`}}></div>
          </div>
        </div>
      </div>
      {/* <AlertSetting /> */}
    </div>
  )
};

export default App;