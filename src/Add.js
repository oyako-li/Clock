import React, { useState , useEffect } from "react";
import TimePicker from 'react-time-picker';

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

    const [value, onChange] = useState('12:00');
    return (
        <div className="columns placeholder-blue-400">
            <div className="column col-10">
                <h1 className="text-center">Alert lists</h1>
                <TimePicker onChange={onChange} value={value} />
                <table>
                    <thead>
                        <tr>
                            <th>time</th>
                            <th>activate</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Add;