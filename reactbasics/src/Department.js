import React, {Component} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


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
            <ListGroup>
                {this.state.departments.map((department) => (
                    <ListGroupItem onClick={() => this.props.changeDepartment(department)} key={department.id}>{department.departmentName}</ListGroupItem>
                ))}
            </ListGroup>
            </>
        )
    }
}