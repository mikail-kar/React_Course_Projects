import React, {Component} from "react";
import { Box, Container, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default class Category extends Component {
    state = {
        categories:[]
    }

    getCategory = () => {
        fetch("http://localhost:3000/categories")
        .then((response) => response.json())
        .then((data) => this.setState({categories:data}))
      }
      componentDidMount() {
        this.getCategory();
      }
    render() {
        return(
            <div>
                <h2>Categories</h2>
                <Container>
                    <Box sx={{width:'100%', maxWidth:360, bgcolor:'background.paper'}}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                {this.state.categories.map((category) => (
                                    <ListItem onClick={() => this.props.changeCategory(category)} key = {category.id}>
                                        <ListItemButton>
                                            <ListItemText>{category.categoryName}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </nav>
                    </Box>
                </Container>
            </div>
        )
    }
}