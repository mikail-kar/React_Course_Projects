import alertify from "alertifyjs";
import React, {Component} from "react";
import { InputLabel, Container} from '@mui/material'
import { Form, Input } from "reactstrap";


export default class Contact extends Component {

    state = {
        file:[],
    }
    handleFile = (event) => {
        this.setState.file = event.target.files[0];
        console.log(event.target.files[0])
    }

    handleUpload = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', this.state.file)
        fetch("http://localhost:3000/products",
        {
            method: "POST",
            body: formData
        })
        .then((response) => response.json())
        .then((result) => {
            console.log("success", result)
        })
        .catch((error) => {
            console.error("Error:", error)
        }
        )
    }

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleUpload}>
                    <h1>Vehicle Add</h1>
                    <InputLabel htmlFor="file">Image Upload</InputLabel>
                    <Input type="file" id="file" name="selectedFile" onChange={this.handleFile} />
                    <Input type="submit" />
                </Form>
            </Container>
        )
    }
}   