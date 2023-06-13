import React, {Component} from "react";
import { ListItemText, List, ListItem, Box, ListItemButton, Divider } from "@mui/material";

export default class Departments extends Component {

    state = {
        departments:[]
    }

    componentDidMount(){
        this.getDepartments();
    }

    getDepartments = () => {
        fetch("http://localhost:3000/departments")
        .then((response) => response.json())
        .then((data) => this.setState({departments:data}))
    }

    render() {
        return(
            <>
            <h2>Departments</h2>
            <Box sx={{width:'100%', maxWidth:360, bgcolor:'background.paper'}}>
                <nav aria-label="main mailbox folders">
                <List>
                    {this.state.departments.map((department) => (
                        <ListItem 
                            onClick={() => this.props.changeDepartment(department)} key = {department.id}>
                                <ListItemButton><ListItemText>{department.departmentName}</ListItemText></ListItemButton>
                        </ListItem >
                    ))}
                </List>
                </nav>
            </Box>
            </>
        )
    }
}