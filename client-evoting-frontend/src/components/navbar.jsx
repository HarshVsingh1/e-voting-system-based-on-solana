import { useState } from 'react'
import logo from '../assets/logo.png'
import './navbar.css'
import Button from '@mui/material/Button';
import { useSpring, animated } from 'react-spring'

function Navbar() {

  const [pannel,setPannel] = useState(false) ;

  const closePannel = () => {
    setPannel(false) ;
  }

  const openPannel = () => {
     setPannel(true) ;
  }

  const panelAnimation = useSpring({
    height: pannel ? 'auto' : '0px',
    opacity: pannel ? 1 : 0,
    config: { duration: 250 }
  })

  return (
    <div>
      <div id='navbarContainer'>
        <div>
          <div id='logoContainer'>
            <div> 
              <img onClick={() => openPannel()} style={{maxHeight : "70px"}} src={logo} alt='logo'></img> 
              <animated.div style={panelAnimation} className={`panel ${pannel ? 'open' : ''}`} id='slidePannel'>
                <div style={{display : "flex" , justifyContent : "space-between"}}>
                  <div>
                    <img  style={{maxHeight : "100px"}} src={logo} alt='logo'></img> 
                  </div>
                  <div>
                    <div style={ { display : "flex" , flexDirection : "column" , justifyContent : "center" , alignContent : "center" , marginRight : "30px" , marginTop : "30px"}}>
                      <div>
                        <span style={{ fontSize : "20px"}}>
                          Indian Election
                        </span>
                      </div>
                      <div>
                        using Blockchain
                      </div>
                    </div>
                  </div>
                  <div style={{textAlign  : "right" }}>
                    <Button onClick={() => closePannel()} variant="outlined">Back</Button>
                  </div> 
                </div>
                <hr></hr>
                <div>
                  <div onClick={ () =>   window.location ='/adminlogin'} style={{ cursor: 'pointer' }} >
                    <span style={{fontSize : "150%" , marginLeft : "20px"}} >   
                      Admin
                    </span> 
                  </div>
                  <hr></hr>
                </div>
              </animated.div>
            </div>
            <div style={ { display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
              <div>
                <span style={{ fontSize : "20px"}}>
                  Indian Election
                </span>
              </div>
              <div>
                using Blockchain
              </div>
            </div> 
          </div>
        </div>
        <div  id='navText' >
          <div>
            <span id='navTextAdjust'  color="purple">Please Enter Your Adhaar Card Number to Authenticate yourself in order to cast your priceless vote</span>  
          </div>
        </div>
      </div>
      <hr style={{margin : "0" , color : "black"}}></hr>
    </div>
  )
}

export default Navbar