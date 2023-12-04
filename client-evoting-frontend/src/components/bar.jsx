import { Button } from "@mui/material";
import './bar.css'

function Bar({name,uuid,pincode,email,profilepic}) {
   

   return <div style={{width : "90%", margin : "0 5%" , height : "50px" , border : "1px solid black" , borderRadius : "10px"}} >
    <div id="barContainer" >
            <div>
                {name}
            </div>
            <div>
                {uuid}
            </div>
            <div>
                {pincode}
            </div>
            <div>
                {email}
            </div>
            <div  >
                <img style={{height : "40px"}} src={profilepic} ></img>
            </div>
    </div>
   
   </div>
}
export default Bar ;