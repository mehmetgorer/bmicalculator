import React from 'react'
import { useState } from 'react';

function Calculations() { 
    const [removeItem, setRemoveItem ] = useState(false)
    const clearStorage = () => {
    localStorage.removeItem("formData");
    setRemoveItem(true);
}
    return (
        <div className="calc-page" >
            <h2>CALCULATIONS</h2>
                    
                <table id="records">
                <tbody>
                    <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>BMI</th>
                    </tr>
                    {(!removeItem && localStorage.getItem("formData")) && JSON.parse(localStorage.getItem("formData")).map(data =>
                    <tr>
                    <td>{data.DaTe}</td>
                    <td>{data.Name}</td>
                    <td>{data.resultBmi}</td>
                    </tr>

)}
                </tbody>
            </table>
            <button onClick={clearStorage} className="btn-clear" >Clear</button>
        </div>
    );
}


export default Calculations
