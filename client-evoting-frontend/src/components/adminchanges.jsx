
import { useEffect, useState } from "react";
import Bar from "./bar";
import { Box, Button, CircularProgress } from "@mui/material";
import './adminchanges.css'



function Adminchanges() {

    const token = sessionStorage.getItem("token")
   
    
   


  

 

   return <div style={{width : "80%" , border : "1px solid black" , height : "570px" }} >

             
           <div style={{margin : "40px" , height : "500px" , overflow : "auto" } } >  

               <div  style={{display:"flex" , justifyContent : "space-between" , margin : "20px"}} >    
                   
                       
                       
                    <div className="resetcontainer" >
                            
                    
                    </div>
                   
                 

                    
               </div> 

            
                
           </div>
   </div>
}

export default Adminchanges ;