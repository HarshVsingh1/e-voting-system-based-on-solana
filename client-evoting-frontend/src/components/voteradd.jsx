import { Alert, Button, Snackbar, TextField } from '@mui/material';
import './partyadd.css'
import { useState } from 'react';

function Voteradd() {
    
    const [uuid,setUuid] = useState("")
    const [name,setName] = useState("")
    const [pincode,setPincode] = useState("")
    const [email,setEmail] = useState("")
    const [profilepic,setProfilepic] =useState("")
    const [message,setMessage] = useState("")
    const [open,setOpen] =useState(false);
    const token = sessionStorage.getItem("token")
    
    const handleClose = () => {
        setOpen(false)
      }
      
      const voterCreated = (message) => {
        setMessage(message)
        setOpen(true)
         
      }


    return <div style={{border : "1px solid black" , width : "80%"}} >

               <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                   {message}
                 </Alert>
               </Snackbar>
        <div  >

            <div id="text" >
                Add Voters
            </div>

            <div  className="addContainer">
                <div className='text' style={{marginLeft : "20px"}} >
                    Uuid:
                </div>
                <div>
                <TextField onChange={(e)=> setUuid(e.target.value)} sx={{width : "400px" , marginRight : "400px"}} id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
              <hr></hr>
            <div className="addContainer">
                <div className='text' style={{marginLeft : "20px"}} >
                    name:
                </div>
                <div>
                <TextField onChange={(e)=> setName(e.target.value)} sx={{width : "400px" , marginRight : "400px"}} id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
            <hr></hr>
            <div className="addContainer">
                <div className='text' style={{marginLeft : "20px"}} >
                    Pincode:
                </div>
                <div>
                <TextField  onChange={(e)=> setPincode(e.target.value)} sx={{width : "400px" , marginRight : "400px"}} id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
            <hr></hr>
            <div className="addContainer">
                <div className='text' style={{marginLeft : "20px"}} >
                    email:
                </div>
                <div>
                <TextField onChange={(e)=> setEmail(e.target.value)} sx={{width : "400px" , marginRight : "400px"}} id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
            <hr></hr>
            <div className="addContainer">
                <div className='text' style={{marginLeft : "20px"}} >
                  profile pic:
                </div>
                <div>
                <TextField onChange={(e)=> setProfilepic(e.target.value)} sx={{width : "400px" , marginRight : "400px"}} id="" label="" variant="outlined" />
                </div>
            </div>

        </div>

                 
                 <div id='saveBar' >
                 
                 <Button  onClick={() => {

    fetch("https://backend-seven-ebon-40.vercel.app/admin/voter",{
    method : "POST" ,
    body: JSON.stringify({
        "uuid" : uuid,
        "name" : name,
        "pincode" : pincode,
        "email" : email ,
        "profilepic" : profilepic,
        "vote" : false

    }),
    headers : {
        "content-type" : "application/json",
        authorization : token
      }
}).then((response) => { return response.json()}).then((data) => {
    voterCreated(data.message)
})



voterCreated(result.message)

                 }} sx={{margin : "10px"}} variant="contained">Save</Button>
                 </div>

    </div>
}

export default Voteradd ;