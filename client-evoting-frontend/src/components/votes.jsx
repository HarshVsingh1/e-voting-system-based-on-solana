import { useEffect, useState } from "react";
import Bar from "./bar";
import { Box, CircularProgress, Table, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { useSpring, animated } from 'react-spring';



function Votes() {

    const token = sessionStorage.getItem("token")
    const [voters,setVoters]  = useState(null)
    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


      const props = useSpring({
        config: { 
          mass: 1,
          tension: 500, 
          friction: 40,
          duration: 1000 
        },
        opacity: 1,
        from: { opacity: 0 },
      })


    useEffect(() => {
        
        fetch("https://backend-seven-ebon-40.vercel.app/admin/voters",{
            method : "GET" ,
            headers : {
                "content-type" : "application/json",
                authorization : token
            }
        }).then((response) => {return response.json()}).then((data) => {
           setVoters(data.voter)
        })

    } ,[])

    if(voters == null) {
        return (
            <Box sx={{ display: 'flex' , justifyContent : "center" , alignItems : "center" , height : "100vh"}}>
              <CircularProgress />
            </Box>
          );
    }

   return  <animated.div style={props}><div style={{width : "100%" , border : "1px solid black" , height : "570px" }} >
            

       <div style={{margin : "40px" , height : "500px" , overflow : "auto" } } >  
            

                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Uuid</StyledTableCell>
            <StyledTableCell align="right">Pincode</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right"> <img style={{height : "40px",backgroundColor : "white"}} src="https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/image-512.png"></img></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {voters.map((voter) => (
            <StyledTableRow key={voter.uuid}>
              <StyledTableCell component="th" scope="row">
                {voter.name}
              </StyledTableCell>
              <StyledTableCell align="right">{voter.uuid}</StyledTableCell>
              <StyledTableCell align="right">{voter.pincode}</StyledTableCell>
              <StyledTableCell align="right">{voter.email}</StyledTableCell>
              <StyledTableCell align="right">  <img style={{height : "40px"}} src={voter.profilepic} ></img></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


            
             
             
            
                
           </div>
   </div> 
   </animated.div>
   
}

export default Votes ;