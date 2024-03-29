import { useEffect, useState } from "react";
import Bar from "./bar";
import { Box, CircularProgress } from "@mui/material";
import Barthree from "./barthree";




function Partychoose() {

    const token = sessionStorage.getItem("token")
    const [Parties,setParties]  = useState(null)
    
   


    useEffect(() => {
        
        fetch("https://backend-seven-ebon-40.vercel.app/admin/parties",{
            method : "GET" ,
            headers : {
                "content-type" : "application/json",
                authorization : token
            }
        }).then((response) => {return response.json()}).then((data) => {
           setParties(data.parties)
        })

    } ,[])  

    if(Parties == null) {
        return (
            <Box sx={{ display: 'flex' , justifyContent : "center" , alignItems : "center" , height : "100vh"}}>
              <CircularProgress />
            </Box>
          );
    }

   return <div style={{width : "80%" , border : "1px solid black" , height : "570px" }} >

             
           <div style={{margin : "40px" , height : "500px" , overflow : "auto" } } >  
            
           <Barthree
              partyId  = "PartyId"
              partyName = "PartyName"
              partyLogo = "https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/image-512.png"
              candidateName= "candidateName"
              candidateProfilepic="https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/image-512.png"
              
              ></Barthree>

           {Parties.map(( party) => (
              <Barthree 
              partyId  = {party.partyId}
              partyName = {party.partyName}
              partyLogo = {party.partyLogo}
              candidateName= {party.candidateName}
              candidateProfilepic={party.candidateProfilepic}
              
              ></Barthree>
           ))
           }
             
            
                
           </div>
   </div>
}

export default Partychoose;