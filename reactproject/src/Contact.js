import alertify from "alertifyjs";
import React, {Component} from "react";
import { FormControl, Input, InputLabel, Container, Button, Select} from '@mui/material'


const numbers = [1,2,3]

export default class Contact extends Component {

    state = {
        email:"",
        password:"",
        select:"",
        mselect:"",
        text:"",
        selectedFile: []
    }

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    onSubmitHandler = (event) => {
        alertify.success(this.state.email + " " + "Added to cart!",2)
        event.preventDefault();
    }
    


    render() {
        return(
            <Container>
                <FormControl>
                    <h1>Contact</h1>
                    <p>{this.state.email}</p>
                    <InputLabel for="email">Email</InputLabel>
                    <Input type="email" placeholder="example@example.com" id="email" name="email" onChange={(event) => this.onChangeHandler(event)} />
                    <InputLabel for="password">Password</InputLabel>
                    <Input type="password" placeholder="password" id="password" name="password" />
                    <InputLabel for="select">Select</InputLabel>
                    <Select id="select" name="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>   
                    </Select>
                    <InputLabel for="multiselect">Multiselect</InputLabel>
                    <Select id="multiselect" value={numbers} name="multiselect" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>   
                    </Select>
                    <InputLabel for="text">Text Area</InputLabel>
                    <Input type="textarea" id="text" name="text" />
                    <InputLabel for="file">Text Area</InputLabel>
                    
                    <Button color="primary" onClick={this.onSubmitHandler} className="mt-2">Submit</Button>
                </FormControl>
            </Container>
        )
    }
}   