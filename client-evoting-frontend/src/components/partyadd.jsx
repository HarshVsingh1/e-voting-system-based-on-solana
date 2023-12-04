import { Alert, Button, Snackbar, TextField } from '@mui/material';
import './partyadd.css'
import { useState } from 'react';

function Partyadd() {
    
    const [partyId,setPartyid] = useState("")
    const [partyName,setPartyname] = useState("")
    const [partyLogo,setPartylogo] = useState("")
    const [candidatename,setCandidatename] = useState("")
    const [candidateprofilepic,setCandidateprofilepic] =useState("")
    const [open,setOpen] =useState(false);
    
    const [render,setRender] = useState(false)

    const token = sessionStorage.getItem("token")

    const handleClose = () => {
        setOpen(false)
      }
      
      const voterCreated = (message) => {
        setOpen(true)
         
      }

    
    return <div style={{border : "1px solid black" , width : "80%"}} >

<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                   Party Added successfully!
                 </Alert>
               </Snackbar> 

        <div  >

            <div id="text" >
                Add Political party
            </div>

            <div  className="addContainer">
                <div style={{marginLeft : "20px"}} >
                    Party id:
                </div>
                <div>
                <TextField onChange={(e) => {setPartyid(e.target.value)}} sx={{width : "400px" , marginRight : "400px"}} id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
              <hr></hr>
            <div className="addContainer">
                <div style={{marginLeft : "20px"}} >
                    Party name:
                </div>
                <div>
                <TextField onChange={(e) => {setPartyname(e.target.value)}} sx={{width : "400px" , marginRight : "400px"}} id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
            <hr></hr>
            <div className="addContainer">
                <div style={{marginLeft : "20px"}} >
                    Party logo:
                </div>
                <div>
                <TextField onChange={(e) => {setPartylogo(e.target.value)}} sx={{width : "400px" , marginRight : "400px"}} id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
            <hr></hr>
            <div className="addContainer">
                <div style={{marginLeft : "20px"}} >
                    Candidate name:
                </div>
                <div>
                <TextField onChange={(e) => {setCandidatename(e.target.value)}} sx={{width : "400px" , marginRight : "400px"}} id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
            <hr></hr>
            <div className="addContainer">
                <div style={{marginLeft : "20px"}} >
                    Candidate profile pic:
                </div>
                <div>
                <TextField onChange={(e) => {setCandidateprofilepic(e.target.value)}} sx={{width : "400px" , marginRight : "400px"}} id="" label="" variant="outlined" />
                </div>
            </div>

        </div>

                 
                 <div id='saveBar' >
                 
                 <Button  
                 onClick={() => {

                    fetch("https://backend-seven-ebon-40.vercel.app/admin/party",{
                    method : "POST" ,
                    body: JSON.stringify({
                        "partyId" : partyId,
                        "partyName" : partyName,
                        "partyLogo" : partyLogo,
                        "candidateName" : candidatename ,
                        "candidateProfilepic" : candidateprofilepic
                    }),
                    headers : {
                        "content-type" : "application/json",
                        authorization : token
                      }
                }).then((response) => { return response.json()}).then((data) => {
                    voterCreated(data.message)
                })
                
                
                
                voterCreated(result.message)
                
                                 }}  
                  sx={{margin : "10px"}} variant="contained">Save</Button>
                 </div>

    </div>
}

export default Partyadd ;