import React, {Component} from "react";
import {Card, CardContent, CardMedia, Typography, Button} from "@mui/material"


export default class Staffs extends Component {

    render() {
        const {staffs} = this.props;
        return(
            <div>
                <h2>{this.props.currentCategory}</h2>
                <div className="container">
                    <div className="row">
                        <h2>Staffs</h2>
                    {staffs.map((staff) => (
                        <div className="col-3 m-2" >
                            <Card key={staff.id} sx={{height:330, width:200}}>
                                <CardMedia sx={{height:200}} image={staff.image} title={staff.staffName} />
                                <CardContent>
                                    <Typography>Name: {staff.staffName} </Typography>
                                    <Typography>Surname: {staff.staffSurname} </Typography>
                                    <Button variant="contained" onClick={() => this.props.addToCart(staff)}>Add Member</Button>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}