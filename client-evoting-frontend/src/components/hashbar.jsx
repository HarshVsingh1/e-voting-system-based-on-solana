import { Button } from "@mui/material";
import './bar.css'

function Hashbar({hash,number}) {
   

   return <div style={{width : "90%", margin : "0 5%" , height : "50px" , border : "1px solid black" , borderRadius : "10px"}} >
    <div id="barContainer" >
            <div style={{}} >
            <span style={{ marginRight: '10px' }}>{number} .</span>
                {hash}
            </div>
           
    </div>
   
   </div>
}
export default Hashbar ;