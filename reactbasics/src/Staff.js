import React, {Component} from "react";
import { Card, CardBody, CardGroup, CardImg, CardText, Col, Container, Row } from "reactstrap";


export default class Staffs extends Component {

    render() {
        const {staffs} = this.props;
        return(
            <div>
                <h2>{this.props.currentCategory}</h2>
                <Container>
                    <Row>
                    <CardGroup>
                    {staffs.map((staff) => (
                        <Col xs="3">
                            <Card key={staff.id} style={{margin:"10px"}}>
                                <CardImg top src={staff.image} alt={staff.staffName} />
                                <CardBody>
                                    <CardText>Name: {staff.staffName} </CardText>
                                    <CardText>Surname: {staff.staffSurname} </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                    </CardGroup>
                    </Row>
                </Container>
            </div>
        )
    }
}