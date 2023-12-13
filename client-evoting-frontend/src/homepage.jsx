
import './App.css'
import Navbar from './components/navbar';
import homepageBackground from './assets/images/vote-bg.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import Voteradd from './components/voteradd';
import Voteradduser from './components/voteradduser';



function Homepage() {
  const [uuid,setUuid] = useState('')
  const navigate =useNavigate()
  const  [message,setMessage] = useState('')
  const [open,setOpen] =useState(false); 
  const [register, setRegister] = useState(true)
  
  const checkuser = () => {
    fetch(`https://backend-seven-ebon-40.vercel.app/voters/${uuid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('User not found');
        }
      })
      .then((data) => {
        console.log(data);
        navigate('/voting/' + uuid);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        openbox(error.message); // Display the error message
      });
  };
    

  const handleClose = () => {
    setOpen(false)
  }
  
  const openbox = (message) => {
    setMessage(message)
    setOpen(true)
     
  } 

  const callback = (newstate) => {
          setRegister(newstate)
  }

    return <>  
        

        
      
     <div>

   
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                   {message}
                 </Alert>
               </Snackbar> 
      <Navbar></Navbar>
      <div  style={{display : "flex" , justifyContent : "center"}}>
        <div>

          <img className='filter-overlay' id='homepageBackgroud' src={homepageBackground} ></img>
        </div> 

        { register ? ( 

<div id='imageOverlayText'>
<div>  
<div style={{display : "flex" , }} >
  <div style={{display : "flex"  , justifyContent : "center" , alignItems : "center"}} className='text' >
    Register yourself if not registered
  </div>
  <div> 
  <Button  onClick={() => {setRegister(false)}}  sx={{width : "200px" , height : "50px" , marginLeft : "50px" , backgroundColor : "#FF6C22"}} variant="contained">REGISTER</Button>
  </div>
</div>
   <span id='overlayText'>
    Enter your adhaar card number (UIDAI Number)
    </span> 
</div>
<div style={{marginTop : "30px"}}> 

<TextField onChange={(e) => {setUuid(e.target.value)}} id="outlined-basic" label="XXXX XXXX XXXX" variant="outlined" />
<Button  onClick={() => {checkuser()}  }  sx={{width : "200px" , height : "55px" , marginLeft : "50px" , backgroundColor : "#FF6C22"}} variant="contained">Authenticate</Button>
</div> 
</div>
        ) : ( 

           <div id='imageOverlayText' > 
               <Voteradduser callback = {callback} ></Voteradduser>
            </div>



        ) }
        
      </div> 


      </div>   





    </>
}

export default Homepage ;