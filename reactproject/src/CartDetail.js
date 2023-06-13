import React, {Component} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete"


export default class CartDetail extends Component {

    

    render() {
        return(
            <div>
                <TableContainer component={Paper}>
                <Table sx={{minwidth:650}} aria-label="sipmle table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Staff Id</TableCell>
                        <TableCell>Department Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.cart.map((cartItem, index) => (
                    <TableRow>
                        <TableCell scope="row">{index+1}</TableCell>
                        <TableCell>{cartItem.staff.departmentId}</TableCell>
                        <TableCell>{cartItem.staff.staffName}</TableCell>
                        <TableCell>{cartItem.staff.staffSurname}</TableCell>
                        <TableCell>{cartItem.quantity}</TableCell>

                        <IconButton variant="contained" color="error" onClick={() => this.props.remove(cartItem.staff)}><DeleteIcon/></IconButton>
                    </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        )
    }
}