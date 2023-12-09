import { useEffect, useState } from "react";
import Bar from "./bar";
import Hashbar from "./hashbar";
import './votehash.css'

import { Box, CircularProgress, Table, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';


function Votehash() {

    const token = sessionStorage.getItem("token")
    const [hashes,setHashes]  = useState(null)
    
   
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

    useEffect(() => {
        
        fetch("https://backend-seven-ebon-40.vercel.app/admin/hash",{
            method : "GET" ,
            headers : {
                "content-type" : "application/json",
                authorization : token
            }
        }).then((response) => {return response.json()}).then((data) => {
           setHashes(data.hash)
        })

    } ,[])

    if(hashes == null) {
        return (
            <Box sx={{ display: 'flex' , justifyContent : "center" , alignItems : "center" , height : "100vh"}}>
              <CircularProgress />
            </Box>
          );
    }

   return <div style={{width : "80%" , border : "1px solid black" , height : "570px" }} >

             
           <div style={{margin : "40px" , height : "500px" , overflow : "auto" } } >  
     

   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sr. no.</StyledTableCell>
            <StyledTableCell align="right">Vote hash</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {hashes.map((hashu,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="right">{hashu.hash}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
             
            
                
           </div>
   </div>
}

export default Votehash ;