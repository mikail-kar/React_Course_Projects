import React, {Component} from "react";
import { Navbar, Nav, NavLink, Badge, NavItem, NavbarBrand } from "reactstrap";



export default class CostumNavbar extends Component {
    state = {
        links:[{title:"Home", url:"/"},
        {title:"About", url:"/about"},{title:"Departments", url:"/departments"}]
    }
    render(){
        return(
            <Navbar color="ligth" light expand="md">
                <NavbarBrand href="/"><Badge color="primary">Company</Badge></NavbarBrand>
                <Nav className="ml-auto" navbar>
                        {this.state.links.map((link,index) => (
                            <NavItem>
                            <NavLink href={link.url} key={index}>{link.title}</NavLink>
                            </NavItem>
                        ))}
                </Nav>
            </Navbar>
        )
    }
}