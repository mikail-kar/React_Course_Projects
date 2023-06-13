import React, {Component} from "react";
import {Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Button, Col, Row } from "reactstrap";
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {DemoContainer} from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs';
import moment from 'moment'
import alertify from "alertifyjs";


export default class CartDetail extends Component {

    state={
        rentdate:dayjs(null),
        returndate:dayjs(null),
    }
    componentDidMount(){
        this.dateConverter()
    }
    
    dateConverter = () => {
        let newRentDate = this.state.rentdate && this.state.rentdate.format('MM-DD-YYYY')
        let newReturnDate = this.state.returndate && this.state.returndate.format('MM-DD-YYYY')
        newRentDate = new Date(newRentDate);
        newReturnDate = new Date(newReturnDate);
        let result
        result = moment(newReturnDate).diff(newRentDate,'days') 
        if (result < 0 ) {return 0}
        return result
      }

    rentProccess = (vehicleItem) => {
        let days = Number(this.dateConverter());
        console.log(days)
        let price = Number(vehicleItem.product.price);
        console.log(price)
        let result = days * price;
        console.log(result)
        this.props.changePrice(result);
        alertify.success(vehicleItem.product.productName + " " + "is rented for" + " " + days + " " + (days<2?"day":"days"))
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                    {this.props.vehicle.map((vehicleItem) => (
                        <Card key={vehicleItem.product.id} style={{marginTop:70}}>
                            <CardMedia sx={{height:140, width:250}} image={vehicleItem.product.image} title={vehicleItem.product.productName} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">{vehicleItem.product.productName}</Typography>
                                    <Typography variant="body2" color="text.secondary">{vehicleItem.product.desc}</Typography>
                                    <Typography variant="body2" color="text.secondary">Rent Price  {this.props.rentPrice}</Typography>
                                    <Button onClick={()=> this.rentProccess(vehicleItem)}>Rent the Vehicle</Button>
                                </CardContent>
                            <Row>
                            <Col xs="6">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                    <DatePicker
                                    label="Rent Date"
                                    value={this.state.rentdate}
                                    onChange={(rentdate) => this.setState({rentdate:rentdate})}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>  
                            </Col>
                            <Col xs="6">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                    <DatePicker
                                    label="Return Date"
                                    value={this.state.returndate}
                                    onChange={(returndate) => this.setState({returndate:returndate})}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>  
                            </Col>
                            </Row>
                        </Card>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}