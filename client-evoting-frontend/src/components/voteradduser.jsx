import { Alert, Button, Snackbar, TextField } from '@mui/material';
import './voteradduser.css'
import { useState } from 'react';
import logo from '../assets/logo.png'
import { useSpring, animated } from 'react-spring';

function Voteradduser({callback}) {
    
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
    
      const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    

    return  <animated.div style={props}> <div style={{border : "1px solid black" , width : "80%" , borderRadius : "10px" }} >

               <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                   {message}
                 </Alert>
               </Snackbar>
        <div  >
          <div style={{display : 'flex' , maxHeight : "100px" }} >

            <div id="text" >
                Register here
            </div>
            <img  style={{maxHeight : "50px" , marginTop : "20px"}} src={logo} alt='logo'></img> 
            <div id='text2'>
                 Already registered 
            </div> 
            <div>
            <Button  sx={{ margin : "25px 5px"   , width : "150px" , height : "40px" , backgroundColor : "#023047" ,  }} onClick={() => {

                 callback(true)
                
                }} variant="contained">Vote here</Button>
            </div>
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

                 
                 <div style={{marginLeft : "190px"}} >
                 
                 <Button  onClick={ async() => {  
                         
                         const response = await fetch("https://api.postalpincode.in/pincode/" + pincode , {
                            method : "GET" 
                        })
                
                        const data = await response.json() 
                        console.log(data)
                        console.log(data[0].Status)
                          

                    if(data[0].Status === 'Success') {
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
                            console.log(data)

                             if(data.created){
                                callback(true)
                             }
                            
                            
                            
                        })
                        
                    }
                    else {
                        voterCreated("Wrong pincode")
                    }

    


voterCreated(result.message)

                 }} sx={{margin : "10px" , width : "400px" , height : "45px" , backgroundColor : "#023047" ,  }} variant="contained">Register</Button>
                 </div>

    </div>
    </animated.div>
}

export default Voteradduser ;