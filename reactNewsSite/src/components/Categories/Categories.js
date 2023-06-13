import React ,{Component} from "react";
import { ListGroup, ListGroupItem,Badge } from "reactstrap";
import * as categoryActions from "../../redux/actions/categoryActions"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
 class Categories extends Component {
    state={
        currentCategory:"Milliyet"
    }
    componentDidMount(){
        this.props.actions.getCategory();
    }
    selectCategory=(category)=>{
        this.setState({currentCategory:category.name});
        }
    render() {
        const categories=[
            { name: 'Milliyet',source:"milliyet"},
            { name: 'Sabah',source:"sabah"},
            { name: 'Cumhuriyet',source:"cumhuriyet"},
            { name: 'Fanatik',source:"fanatik"},
            { name: 'Fotomaç',source:"fotomac"},
            { name: 'Akşam',source:"aksam"},
        ]
        return (
            <div>
                 <div>
            <h2><Badge color="warning w-100">Haberler</Badge></h2>
            <ListGroup>
                {this.props.categories.map((category)=>(
                    <ListGroupItem active={category.name===this.state.currentCategory?true:false}
                    onClick={()=>this.selectCategory(category)}
                    key={category.source}>
                        {category.name}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        categories:state.categoriesReducer,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return{
        actions:{
            getCategory:bindActionCreators(categoryActions.getCategory,dispatch),
        }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Categories)