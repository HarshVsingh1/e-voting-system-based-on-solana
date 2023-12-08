import { useEffect, useState } from "react";
import Bar from "./bar";
import { Box, CircularProgress } from "@mui/material";
import Hashbar from "./hashbar";
import './votehash.css'



function Votehash() {

    const token = sessionStorage.getItem("token")
    const [hashes,setHashes]  = useState(null)
    
   


    useEffect(() => {
        
        fetch("https://backend-seven-ebon-40.vercel.app/admin/hash",{
            method : "GET" ,
            headers : {
                "content-type" : "application/json",
                authorization : token
            }
        }).then((response) => {return response.json()}).then((data) => {
           setHashes(data.hash)
        })

    } ,[])

    if(hashes == null) {
        return (
            <Box sx={{ display: 'flex' , justifyContent : "center" , alignItems : "center" , height : "100vh"}}>
              <CircularProgress />
            </Box>
          );
    }

   return <div style={{width : "80%" , border : "1px solid black" , height : "570px" }} >

             
           <div style={{margin : "40px" , height : "500px" , overflow : "auto" } } >  
            
           <Hashbar 
             hash = "hash"
              ></Hashbar>

           {hashes.map(( hasher) => (
              <Hashbar  
             hash = {hasher.hash}
              ></Hashbar>
           ))
           }
             
            
                
           </div>
   </div>
}

export default Votehash ;