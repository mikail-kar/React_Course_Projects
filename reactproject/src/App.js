import React, {Component} from "react";
import CostumNavbar from "./Navbar";
import { Col, Container, Row } from "reactstrap";
import Departments from "./Department";
import Staffs from "./Staff";
import alertify from "alertifyjs"
import { Routes, Route } from "react-router-dom";
import CartDetail from "./CartDetail";
import Contact from "./Contact";

export default class App extends Component {

  state = {
    currentDepartment:"",
    staffs:[],
    cart:[]
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

  addToCart = (staff) => {
    let newCart = this.state.cart;
    var addMember = newCart.find((c) => c.staff.id===staff.id)
    if(addMember)
    {
      addMember.quantity +=1
    }
    else 
    {
      newCart.push({staff: staff, quantity: 1})
    }
    this.setState({cart: newCart});
    alertify.success(staff.staffName + " " + "Added to cart!",2)
  }

  removeFromCart = (staff) => {
    let newCart = this.state.cart.filter((c) => c.staff.id !== staff.id)
    this.setState({cart:newCart})
    alertify.error(staff.staffName + " " + "Removed from Cart!",2)
  }
  
  render(){
    return (
      <div>
        <CostumNavbar cart={this.state.cart} removeFromCart={this.removeFromCart}/>
        <Container>
          <Row>
            <Col xs="3">
              <Departments changeDepartment={this.changeDepartment} currentDepartment={this.state.currentDepartment} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/" element={<Staffs staffs={this.state.staffs} 
                  currentDepartment={this.state.currentDepartment} addToCart={this.addToCart} />} />
                <Route path="/cartdetail" element={<CartDetail cart={this.state.cart} remove={this.removeFromCart}/>} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


