import { Button, Checkbox, FormControlLabel } from "@mui/material";
import './bar.css'

function Barthree({partyId,partyName,partyLogo,candidateName,candidateProfilepic}) {
   

   return <div style={{width : "500px", margin : "0 5%" , height : "50px" , border : "1px solid black" , borderRadius : "10px"}} >
    <div id="barContainer" >
            <div>
            <FormControlLabel required control={<Checkbox />} label="" />
            </div>
            <div>
                {partyId}
            </div>
            <div>
                {partyName}
            </div>
            <div  >
                <img style={{height : "40px"}} src={partyLogo} ></img>
            </div>
            <div>
                {candidateName}
            </div>
            
            <div  >
                <img style={{height : "40px"}} src={candidateProfilepic} ></img>
            </div>
    </div>
   
   </div>
}
export default Barthree ;