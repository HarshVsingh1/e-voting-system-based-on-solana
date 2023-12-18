
import './App.css'
import Navbar from './components/navbar';
import homepageBackground from './assets/images/vote-bg.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Voting from './voting';
import { useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useParams } from 'react-router-dom';
import Parties from './components/parties';
import Partychoose from './components/partychoose';
import Barbar from './barbar';

function Votingpage() { 

  const [otp , setOtp]  = useState('')
  const [verify,setVerify] = useState(false)
  const [enterotp,setEnterotp] =useState('')
  const [open,setOpen] =useState(false);
  const  [message,setMessage] = useState('')
  const {uuid} = useParams()  
  const [user,setUser] = useState([])
  const [partychoose, setPartychoose] = useState(false)
  const [Parties,setParties]  = useState(null)
  const [partyId,setPartyid] = useState('')
  const [votedone,setVotedone] = useState(false)
  const [otpverification, setOtpverification] = useState(false)
  
  const handleClose = () => {
    setOpen(false)
  }
  
  const openbox = (message) => {
    setMessage(message)
    setOpen(true)
     
  }
 
  useEffect(() => {
    fetch(`https://backend-seven-ebon-40.vercel.app/voters/${uuid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.voter);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [uuid]); 

  useEffect(() => {
        
    fetch("https://backend-seven-ebon-40.vercel.app/admin/parties",{
        method : "GET" ,
        headers : {
            "content-type" : "application/json",
        }
    }).then((response) => {return response.json()}).then((data) => {
        console.log(data.parties)
       setParties(data.parties)
    })

} ,[]) 

    return <>
   
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

        <div id="votingbox" >
                  <div>
                              <div style={{display : "flex" , justifyContent : "space-between" , width : "300px" }} >
                                  <div className='filltext' > Aadhar No.</div>
                                  <div>{user.uuid} </div>
                              </div>
                              <hr></hr>
                              <div className='filltext' style={{display : "flex" , justifyContent : "space-between"}} >
                                  <div>Name :</div>
                                  <div> {user.name}</div>
                              </div>
                              <hr>
                              </hr>
                              <div className='filltext' style={{display : "flex" , justifyContent : "space-between"}} >
                              <div>Pincode No:</div>
                                <div>{user.pincode}</div>                               
                              </div>
                              <hr></hr>
                              <div className='filltext' style={{display : "flex" , justifyContent : "space-between"}} >
                                <div>Vote</div>
                                <div> {user.vote ? "Voted" : "Not Voted"} </div>
                              </div>
                  </div>
                  <div>
                      <img style={{height : "150px" , borderRadius : "20px" , boxShadow : "2px 2px 10px black"}} src={user.profilepic} ></img>
                  </div>
   </div> 
       
       <div id='emailbox' >
              <div>
                   <div className='emailtext' >Associated Email-ID :</div>
                   <div className='emailtext2' >key will be send to this email id , verify it</div>
              </div>
              <div className='emailtext' >
                {user.email}
              </div>
              <div>
              <Button  onClick={() => {
                 
                 if(!user.vote){
                           
                    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
                    fetch('https://backend-seven-ebon-40.vercel.app/sendotp', {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({
                       email: user.email,
                       otp: randomNumber, 
                     }),
                   })
                     .then((response) => response.json())
                     .then((data) => {console.log(data)
                      setVerify(true)
                      setOtp(randomNumber) ;
                     })
                     .catch((error) => console.error('Error:', error));

                 }else{
                    openbox("you have voted already")
                 }

               
                          
              }} sx={{color : "white", outlineColor : "white"}} variant="outlined">Send Otp</Button>
              </div>
       </div> 
       <div id='votebox' >
                  <div>
                    Please verify your email-ID before voting
                  </div>
                  <div style={{margin : "10px"}} >
                  <Button onClick={ async() => {
                     if(votedone && otpverification){
                     try {
                        const response = await fetch('https://backend-seven-ebon-40.vercel.app/vote', {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({ partyId, uuid }),
                        });
                  
                        if (!response.ok) {
                          const error = await response.json();
                          console.error('Error:', error);
                        } else {
                          const data = await response.json();
                          console.log('Success:', data);
                          setVotedone(false)
                          openbox("voted successfully")
                          
                        }
                      } catch (error) {
                        console.error('Error:', error.message);
                      }

                    }else{
                        openbox("Please verify otp and choose party")
                    }




                  }} sx={{backgroundColor : "green"}} variant="contained">Vote now</Button>
                  </div>
       </div>
        {verify &&   <div id='verifybox' >
                   <div style={{color : "black"}} className='emailtext' >
                        {user.email}
                   </div>
                   <div>
                   <TextField onChange={(e) => {setEnterotp(e.target.value)}} id="outlined-basic" label="Otp" variant="outlined" />
                   </div>
                   <div>
                   <Button onClick={() => {
                       if(enterotp == otp) {
                              openbox('verified now you can vote')
                              setOtpverification(true)
                              setPartychoose(true)
                              setVerify(false)
                       }else{
                              openbox('wrong otp')
                       }
                   }} sx={{backgroundColor : "green"}} variant="contained">Verify</Button>
                   </div>

       </div>}

      {partychoose &&  <div id='partychoose'>
            <div > 

            <Barbar
              partyId  = "PartyId"
              partyName = "PartyName"
              partyLogo = "https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/image-512.png"
             
              
              ></Barbar>

{ Parties && Parties.map(( party) => (
           
           <Barbar
           key={party.partyId}
           partyId={party.partyId}
           partyName={party.partyName}
           partyLogo={party.partyLogo}
           onClick={(clickedPartyId) => {
               setPartyid(clickedPartyId);
               console.log(clickedPartyId)
               setVotedone(true)
               openbox("selected party successfully")
               setPartychoose(false);
           }}
       />
           ))
           }
                

                </div> 
       </div>}
      </div>   


    </>
}

export default Votingpage ;