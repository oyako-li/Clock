import React from "react";
import {
    Routes,
    HashRouter,
    Route
} from 'react-router-dom';
import App from './App';
import Add from './Add';


const ViewManager = ()=>{
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/add' element={<Add />} />
            </Routes>
        </HashRouter>
    )
}

export default ViewManager;