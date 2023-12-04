// Barbar.js
import React from 'react';
import { Button } from "@mui/material";
import './components/bar.css';

function Barbar({ partyId, partyName, partyLogo, onClick }) {
    return (
        <div style={{ width: "90%", margin: "0 5%", height: "50px", border: "1px solid black", borderRadius: "10px" }}>
            <div id="barContainer" onClick={() => onClick(partyId)}>
                <div>{partyId}</div>
                <div>{partyName}</div>
                <div>
                    <img style={{ height: "40px" }} src={partyLogo} alt={`Logo of ${partyName}`} />
                </div>
            </div>
        </div>
    );
}

export default Barbar;
