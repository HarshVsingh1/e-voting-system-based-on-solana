
import './App.css'
import Navbar from './components/navbar';
import homepageBackground from './assets/images/vote-bg.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [uuid,setUuid] = useState('')
  const navigate =useNavigate()
    return <>
      <Navbar></Navbar>
      <div  style={{display : "flex" , justifyContent : "center"}}>
        <div>

          <img className='filter-overlay' id='homepageBackgroud' src={homepageBackground} ></img>
        </div>
          <div id='imageOverlayText'>
            <div>
               <span id='overlayText'>
                Enter your adhaar card number (UIDAI Number)
                </span> 
            </div>
            <div style={{marginTop : "30px"}}>
            <TextField onChange={(e) => {setUuid(e.target.value)}} id="outlined-basic" label="XXXX XXXX XXXX" variant="outlined" />
            <Button  onClick={() => {navigate('/voting/' + uuid)}  }  sx={{width : "200px" , height : "55px" , marginLeft : "50px" , backgroundColor : "#FF6C22"}} variant="contained">Authenticate</Button>
            </div>
          </div>
      </div>
    </>
}

export default Homepage ;