import './App.css'
import AddIcon from '@mui/icons-material/Add';
import Partyadd from './components/partyadd';
import Voteradd from './components/voteradd';
import { useState } from 'react';
import Votes from './components/votes';
import Parties from './components/parties';
import Resets from './components/resets';
import Partyvotes from './components/partyvotes';

function Adminpannel() {
   const [addParty , setAddpParty] = useState(false)
   const  [addVoter,setAddVoter]  = useState(false)
   const [votes,setVotes] = useState(false)
   const [parties,setParties] = useState(false)
   const [reset,setReset] = useState(false)
   const [partyvotes,setPartyvotes] = useState(false)
    
  const openAddParty = () => {
    setReset(false)
      setAddVoter(false)
      setVotes(false)
      setParties(false)
      setPartyvotes(false)
      setAddpParty(true)
  }

  const openAddVoters = () => {
    setReset(false)
     setAddpParty(false)
     setVotes(false)
     setParties(false)
     setPartyvotes(false)
      setAddVoter(true)
  }

  const openVotes =() => {
       setReset(false)
       setAddVoter(false)
       setAddpParty(false)
       setParties(false)
       setPartyvotes(false)
    setVotes(true)
  }

  const openParties = () => {
    setReset(false)
    setAddVoter(false)
    setAddpParty(false)
    setVotes(false)
    setPartyvotes(false)
    setParties(true)

  }

  const openReset = () => {
    setAddVoter(false)
    setAddpParty(false)
    setVotes(false)
    setParties(false)
    setPartyvotes(false)
    setReset(true)
  }

  const openPartyvotes = () => {
    setAddVoter(false)
    setAddpParty(false)
    setVotes(false)
    setParties(false)
    setReset(false)
    setPartyvotes(true)
  }

  return <div>
    <div id='adminPannelNavbar' > 
           <div id='navbartext' >Administration</div>
    </div> 

  <div style={{display : "flex" , justifyContent : "space-between"}} >
<div>
    <div>
    <div id='text' >
      Site administration
    </div>
    <div style={{backgroundColor : "#0174BE"}} id='table'>
    </div>
    <div  id='table'>
      <div className='tabletext' >
       Add Political party
      </div>

      <div style={{display : "flex" , alignItems : "center" }}>
        <div  >
        <AddIcon onClick={() => openAddParty()}  sx={{color : "#9ADE7B"}}></AddIcon> 
        </div>
         <div style={{padding : "0 17px"}}  className='tabletext' >
        Add
      </div>
      </div>
    </div>

    <div id='table'>
      <div className='tabletext' >
       Add Voters
      </div>

      <div style={{display : "flex" , alignItems : "center" }}>
        <div>
        <AddIcon onClick={() => {openAddVoters()}}  sx={{color : "#9ADE7B"}}></AddIcon> 
        </div>
         <div style={{padding : "0 17px"}}  className='tabletext' >
        Add
      </div>
      </div>
    </div>

    <div id='table'>
      <div className='tabletext' >
        Voters
      </div>

      <div style={{display : "flex" , alignItems : "center" }}>
        <div>
        <AddIcon onClick={() => {openVotes()}}  sx={{color : "#9ADE7B"}}></AddIcon> 
        </div>
         <div className='tabletext' >
        check
      </div>
      </div>
    </div>

    <div id='table'>
      <div className='tabletext' >
        Parties
      </div>

      <div style={{display : "flex" , alignItems : "center" }}>
        <div>
        <AddIcon onClick={() => {openParties()}}  sx={{color : "#9ADE7B"}}></AddIcon> 
        </div>
         <div className='tabletext' >
        check
      </div>
      </div>
    </div>

    </div>




    <div style={{marginTop : "100px"}} >
    <div style={{backgroundColor : "#0174BE"}} id='table'>
    </div>
    <div  id='table'>
      <div className='tabletext' >
        Votes
      </div>

      <div style={{display : "flex" , alignItems : "center" }}>
        <div  >
        <AddIcon onClick={() => openPartyvotes()}  sx={{color : "#9ADE7B"}}></AddIcon> 
        </div>
         <div style={{padding : "0 17px"}}  className='tabletext' >
        Add
      </div>
      </div>
    </div>

    <div id='table'>
      <div className='tabletext' >
        Resets
      </div>

      <div style={{display : "flex" , alignItems : "center" }}>
        <div>
        <AddIcon onClick={() => {openReset()}}  sx={{color : "#9ADE7B"}}></AddIcon> 
        </div>
         <div style={{padding : "0 17px"}}  className='tabletext' >
        Add
      </div>
      </div>
    </div>



    </div>
  </div>    
         
        {addParty && <Partyadd></Partyadd>}  
        {addVoter && <Voteradd></Voteradd>}
        {votes && <Votes></Votes>}   
        {parties && <Parties></Parties>} 
        {reset && <Resets></Resets>}  
        {partyvotes  && <Partyvotes></Partyvotes>}
        
 
        
   </div>  
  </div>
}

export default Adminpannel ;
