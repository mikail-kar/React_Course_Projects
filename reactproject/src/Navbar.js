import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem, MenuList, } from "@mui/material";
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';



export default class CostumNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
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
                  <Typography><Link to="/components/" style={{textDecoration:"none", color:"white"}}>Departments</Link></Typography>
                </MenuItem>
                <MenuItem>
                  <Typography href="https://github.com/reactstrap/reactstrap">GitHub</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography><Link to="/cartdetail" className='m-2' style={{textDecoration:"none", color:"white"}} >CartDetail</Link></Typography>
                </MenuItem>
                <MenuItem>
                  <Typography><Link to="/contact"  className='m-2' style={{textDecoration:"none", color:"white"}}>Contact</Link></Typography>
                </MenuItem>
                <PopupState variant='popover' popupId='demo-popup-menu'>
                  {(popupState) => (
                    <React.Fragment>
                      <Button variant='contained' {...bindTrigger(popupState)}>Cart - {this.props.cart.length}</Button>
                      < Menu {...bindMenu(popupState)}>
                      {this.props.cart.map((cartItem) => (
                        <MenuItem key={cartItem.staff.id} onClick={popupState.close}>
                          <span 
                          onClick={() => this.props.removeFromCart(cartItem.staff)} 
                          className='badge badge-danger' 
                          style={{backgroundColor:"red", margin:"10px"}}
                          >
                              X
                          </span> 
                          {cartItem.staff.staffName} 
                          <span 
                          className='badge badge-warning'
                          style={{backgroundColor:"green" ,margin:"10px"}}>
                              {cartItem.quantity}
                          </span>
                        </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}