import React, { Component } from 'react'
import { decreaseCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
            <Button 
            color='success'
            onClick={(e) => this.props.dispatch(decreaseCounter())}>
                Decrease
            </Button>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
    return {action: bindActionCreators(decreaseCounter, dispatch)}
};
export default connect(mapDispatchToProps)(DecreaseCounter);