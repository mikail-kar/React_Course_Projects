 import React, { Component } from 'react'
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux'
 import { Button, Input } from 'reactstrap'
 import { multiplyWithInput } from '../redux/actions/counterActions';


 class Multiply extends Component {
   render() {
    return (
       <div>
         <Input type='number' id='number'  />
         <Button onClick={(e) => this.props.dispatch(multiplyWithInput(document.getElementById("number").value))}
         >
            Multiply
        </Button>
      </div>
    )
   }
 }
 function mapDispatchToProps(dispatch){
     return {action: bindActionCreators(multiplyWithInput, dispatch)}
 };
 export default connect(mapDispatchToProps)(Multiply);
