import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography,Container, MenuItem, } from "@mui/material";




export default class CostumNavbar extends React.Component {

  render() {
    return (
      <div>
        <AppBar sx={{backgroundColor:""}}>
          <Container>
            <Toolbar>
              <Box sx={{flexGrow:1, display:{ md: 'flex'}}}>
                <MenuItem>
                  <Typography><Link to="/" style={{textDecoration:"none", color:"white"}}>Home Page</Link></Typography>
                </MenuItem>
                <MenuItem>
                  <Typography><Link to="/contact"  className='m-2' style={{textDecoration:"none", color:"white"}}>Contact</Link></Typography>
                </MenuItem>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}