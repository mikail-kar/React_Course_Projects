import React, {Component} from "react";
import CostumNavbar from "./Navbar";
import { Col, Container, Form, Row } from "reactstrap";
import Category from "./Category";
import Product from "./Product";
import { Routes, Route } from "react-router-dom";
import VehicleDetail from "./VehicleDetail";
import Contact from "./Contact";
import dayjs from 'dayjs';
import {Input, InputLabel, FormControl, Button, Box} from "@mui/material"

const database = [
    {
      uname: "mikail",
      pword: "12345"
    }
  ]
export default class App extends Component {

  state = {
    currentCategory:"",
    products:[],
    vehicle:[],
    users:[],
    userLogin:[],
    rentDate:"",
    returnDate:"",
    username:"",
    password:"",
    loggedIn:false,
    rentPrice:""
  }

  componentDidMount() {
    this.getProduct();
    this.getUser();
  }
  getVehicle = (product) => {
    let newVehicle = this.state.vehicle;
    var showVehicle = newVehicle.find((c) => c.product.id===product.id)
    if(!showVehicle)
    {
      newVehicle.length=0;
      newVehicle.push({product: product})
    }
    
    this.setState({vehicle: newVehicle});
  }

  getProduct = (categoryId) => {
    let url = "http://localhost:3000/products"
    if(categoryId){
      url += "?categoryId=" + categoryId
    }

    fetch (url)
      .then((response) => response.json())
      .then((data) => this.setState({products:data}))
  }
  getUser = () => {
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => this.setState({users:data}))
  }
  changeCategory = (category) => {
    this.setState.currentCategory = category.categoryName
    this.getProduct(category.id)
  }
  changePrice = (result) => {
    this.setState({rentPrice:result})
  }
  
  handleSubmit = (event) => {

     event.preventDefault();
    var uname = this.state.users.map((user) => (
      user.userName
    ))
   
    console.log(database)
    console.log(this.state.users.map((user) => (
      user.userName
    )))
    
     const userData = this.state.users.map((user) => (
      user.userName
     ))
     
     console.log(userData)
     const enterData = userData.find((user) => user.userName===uname.value)
     if(enterData){
       
      this.setState({loggedIn:true})
      console.log(this.state.loggedIn)
     }
  }
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value})
  }

  render(){
    const renderForm = (
      <Container>
          <Row>
                  {this.state.users.map((user) => (
                      <Form onSubmit={this.handleSubmit}>
                      <InputLabel htmlFor="username">Username</InputLabel>
                      <Input type="text" id="username" onChange={(event) => this.onChangeHandler(event)} name="username" />
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input type="text" id="password" onChange={(event) => this.onChangeHandler(event)} name="password" />
                      <Input type="submit">Log In</Input>
                      </Form>
                  ))}
          </Row>
        </Container>
    )
    return (
      <div>
        {this.state.loggedIn ? <div>
          <Container>
          <Row>
            <CostumNavbar/>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} 
                        changeCategory={this.changeCategory} 
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/" element={<Product 
                        currentCategory={this.state.currentCategory}
                        products={this.state.products} 
                        getVehicle={this.getVehicle}
              />} />
                <Route path="/vehicledetail" element={<VehicleDetail 
                vehicle={this.state.vehicle}
                rentDate={this.state.rentDate}
                returnDate={this.state.returnDate}
                rentPrice={this.state.rentPrice}
                changePrice={this.changePrice} />} />
                <Route path="/paymentpage"/>
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
          </Row>
          </Container> </div>: renderForm
        }
      </div>
    );
  }
}


