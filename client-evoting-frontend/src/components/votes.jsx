import { useEffect, useState } from "react";
import Bar from "./bar";
import { Box, CircularProgress } from "@mui/material";




function Votes() {

    const token = sessionStorage.getItem("token")
    const [voters,setVoters]  = useState(null)
    
   


    useEffect(() => {
        
        fetch("https://backend-seven-ebon-40.vercel.app/admin/voters",{
            method : "GET" ,
            headers : {
                "content-type" : "application/json",
                authorization : token
            }
        }).then((response) => {return response.json()}).then((data) => {
           setVoters(data.voter)
        })

    } ,[])

    if(voters == null) {
        return (
            <Box sx={{ display: 'flex' , justifyContent : "center" , alignItems : "center" , height : "100vh"}}>
              <CircularProgress />
            </Box>
          );
    }

   return <div style={{width : "80%" , border : "1px solid black" , height : "570px" }} >

             
           <div style={{margin : "40px" , height : "500px" , overflow : "auto" } } >  
            
           <Bar  
              name  = "Name"
              uuid = "Uuid"
              pincode = "Pincode"
              email= "Email"
              profilepic="https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/image-512.png"
              
              ></Bar>

           {voters.map(( voter) => (
              <Bar  
              name  = {voter.name}
              uuid = {voter.uuid}
              pincode = {voter.pincode}
              email= {voter.email}
              profilepic={voter.profilepic}
              
              ></Bar>
           ))
           }
             
            
                
           </div>
   </div>
}

export default Votes ;