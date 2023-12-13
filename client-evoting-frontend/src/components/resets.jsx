import { useEffect, useState } from "react";
import Bar from "./bar";
import { Alert, Box, Button, CircularProgress, Snackbar } from "@mui/material";
import './reset.css'
import { useSpring, animated } from 'react-spring';


function Resets() {

    const token = sessionStorage.getItem("token")
    const [message,setMessage] = useState('')
    const [open,setOpen] = useState(false)
    
    const handleClose = () => {
        setOpen(false)
      }
      
      const openbox = (message) => {
        setMessage(message)
        setOpen(true)
         
      }


      const props = useSpring({
        config: { mass: 1, tension: 170, friction: 26 }, 
        opacity: 1,
        from: { opacity: 0 },
      });
    

 

   return  <animated.div style={props}> 
    <div style={{width : "100%" , border : "1px solid black" , height : "570px" }} >
               

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                   {message}
                 </Alert>
               </Snackbar> 
             
           <div style={{margin : "40px" , height : "500px" , overflow : "auto" } } >  

               <div  style={{display:"flex" , justifyContent : "space-between" , margin : "20px"}} >    
                   
                        <div className="resetcontainer" >
                                                        
                             <div className="resettext" >
                                Reset  Votes 
                             </div>

                             <div className="text" >
                             It will reset all the votes, but it doesn't delete voters or parties.
                             </div>

                             <div>
                             <Button onClick={ async() => {
                                 try {
                                    const response = await fetch(`https://backend-seven-ebon-40.vercel.app/resetVotes`, {
                                      method: 'POST',
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    });
                                
                                    if (response.ok) {
                                      const data = await response.json();
                                      console.log(data.message);
                                      openbox("votes reset successfully") // Log the success message
                                    } else {
                                      console.error('Error resetting votes:', response.statusText);
                                    }
                                  } catch (error) {
                                    console.error('Error:', error.message);
                                  }
                             }} variant="contained">Reset</Button>
                             </div>
                           
                        </div> 
                       
                    <div className="resetcontainer" >
                            
                    <div className="resettext" >
                                Reset  Voters
                             </div>

                             <div className="text" >
                             It will reset all the Voters, but it doesn't delete votes or parties.
                             </div>

                             <div>
                             <Button onClick={() => {
                                 
                                 fetch("https://backend-seven-ebon-40.vercel.app/admin/votersdelete",{
                                    method : "DELETE" ,
                                    headers : {
                                        "content-type" : "application/json"
                                    },
                                
                                }).then((response) => {return response.json()}).then((data) => {
                                    openbox("voters deleted successfully")
                                    console.log(data)
                                })

                             }} variant="contained">Reset</Button>
                             </div>

                    </div>
                   
                    <div className="resetcontainer" >
                          
                    <div className="resettext" >
                                Reset  Parties
                             </div>

                             <div className="text" >
                             It will reset all the Parties, but it doesn't delete voters and votes.
                             </div>

                             <div>
                             <Button onClick={() => {

                                              fetch("https://backend-seven-ebon-40.vercel.app/admin/partiesdelete",{
                                                  method : "DELETE" ,
                                                  headers : {
                                                      "content-type" : "application/json"
                                                  },
                                              
                                              }).then((response) => {return response.json()}).then((data) => {
                                                openbox("parties reset successfully")
                                                  console.log(data)
                                              })

                             }} variant="contained">Reset</Button>
                             </div>

                    </div>

                    
               </div> 

            
                
           </div>
   </div> 
   </animated.div>
}

export default Resets ;