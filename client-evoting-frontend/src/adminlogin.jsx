import { Button, TextField } from "@mui/material";
import { useState } from "react";


function Adminlogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    
  return <div id="logindiv" >
     <div id='loginBox' >
            <div id="loginbar" >
              <div style={{display : "flex" , justifyContent : "center" , alignItems : "center" , height  : "100%"}} >
                <span style={{fontFamily : "fantasy" , fontSize : "130%"}} >

                 Administration
                </span>
              </div>
            </div>
            <div>
                 <div style={{display : "flex" , flexDirection : "column", marginTop : "30px" , margin : "30px 20px"}}>
              Username:
            <TextField  onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />

                 </div>

                 <div style={{display : "flex" , flexDirection : "column", marginTop : "30px" , margin : "30px 20px" }} >
              Password:
            <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />

                 </div>
                 
            </div>


            <div style={{display : "flex" , flexDirection : "column", marginTop : "30px" , margin : "30px 20px" }} >
                 <Button onClick={() => {
                  
                  if(!username && password){
                    setForm("Please fill the username password ")
               }else if(!username){
                 setForm("Please fill the username")
               }else if(!password){
                 setForm("please fill the password")
               }else{
            
                      
                    fetch(`https://backend-seven-ebon-40.vercel.app/admin/login`,{
                        method : 'POST',
                        body : JSON.stringify({
                            username,
                            password
                        }),
                        headers : {
                            username ,
                            password ,
                            "content-type" : "application/json"
                        }
                    }).then((response) => {
                        return  response.json() 
                    }).then((data) => {
                      sessionStorage.setItem("token", "bearer "+data.token)
                      window.location = '/admin'
                    })
                

                 }}} variant="contained">Login</Button>
                 </div>
           </div>
  </div>
}

export default Adminlogin ;