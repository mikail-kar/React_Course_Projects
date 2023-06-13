import React, {Component} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Product extends Component {
    
    render() {
        
        return(
            <div>
                <h2>{this.props.currentCategory}</h2>
                <Container>
                    <Row>
                        {this.props.products.map((product) => (
                            <Col sm="4" style={{marginTop:70}}>
                                <Card key={product.id}>
                                    <CardMedia sx={{height:140, width:250}} image={product.image} title={product.productName} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">{product.productName}</Typography>
                                        <Typography variant="body2" color="text.secondary">{product.productText}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' variant='contained' onClick={() => this.props.getVehicle(product)}>
                                            <Link to="/vehicledetail" style={{textDecoration:'none', color:'white'}}>Details</Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}