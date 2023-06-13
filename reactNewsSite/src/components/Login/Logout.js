
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/userActions';


class Logout extends Component{
    handleLogout = () => {
        this.props.logout();
      };
    render(){
        const { currentUser, error } = this.props;
        return(
        <div>
            <h2>Hoş geldiniz, {currentUser.name}</h2>
            <button onClick={this.handleLogout}>Çıkış Yap</button>
        </div>
        )
        }
}
function mapStateToProps(state) {
    return {
      currentUser: state.userReducer.currentUser,
      error: state.userReducer.error,
    };
  }

const mapDispatchToProps = {
    logout,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Logout);