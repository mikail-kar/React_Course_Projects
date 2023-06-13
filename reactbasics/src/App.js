import React, {Component} from "react";
import CostumNavbar from "./Navbar";
import { Col, Container, Row } from "reactstrap";
import Departments from "./Department";
import Staffs from "./Staff";

export default class App extends Component {

  state = {
    currentDepartment:"",
    staffs:[]
  }

  componentDidMount() {
    this.getStaffs();
  }

  getStaffs = (departmentId) => {
    let url = "http://localhost:3000/staffs"
    if(departmentId){
      url += "?departmentId=" + departmentId
    }

    fetch (url)
      .then((response) => response.json())
      .then((data) => this.setState({staffs:data}))
  }

  changeDepartment = (department) => {
    this.setState.currentDepartment = department.departmentName
    this.getStaffs(department.id)
  }
  
  render(){
    return (
      <div>
        <CostumNavbar links={this.props.links} />
        <Container>
          <Row>
            <Col xs="3">
              <Departments changeDepartment={this.changeDepartment} currentDepartment={this.state.currentDepartment} />
            </Col>
            <Col xs="9">
              <Staffs staffs={this.state.staffs} currentDepartment={this.state.currentDepartment} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


