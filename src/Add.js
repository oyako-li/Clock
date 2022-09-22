import React, { useState , useEffect } from "react";
// import TimePicker from 'react-time-picker';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './Add.css';

const AleartTimePicker = ()=> {
    const [value, setValue] = useState(null);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Add Alert"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField className="add-alert" defaultValue="12:00" {...params} />}
        />
      </LocalizationProvider>
    );
}

function handlerAllAlerts(){};

const GetTimePicker = ()=> {
    const [value, setValue] = useState(null);
  
    return (
        <tr >
            <tb className="timer">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </tb>
            <tb>
                <div>status</div>
            </tb>
        </tr>
    );
}
  
// const Lists = () => {
//     const [alerts, setAlerts] = useState([[new Date(), 'active']]);
//     // useEffect(async ()=>{
//     //     setAlerts(await window.alertApi.get());
//     // }, [alerts]);

//     const items = [];
//     for(let alert of alerts) items.push(
//         <tr>
//             <tb>{alert[0]}</tb>
//             <tb>{alert[1]}</tb>
//         </tr>
//     );
//     return {items};
// }


const Add = () => {

    const [value, onChange] = useState(null);
    return (
        <div className="alearts">
            <h1 className="title">Alert lists</h1>
            <AleartTimePicker />
            <table >
                <thead>
                    <tr>
                        <th>time</th>
                        <th>activate</th>
                    </tr>
                </thead>
                <tbody>
                    <GetTimePicker />
                </tbody>
            </table>
        </div>
    );
}

export default Add;