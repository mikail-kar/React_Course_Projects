import React, { Component } from 'react';

class Nav extends Component {
  render() {

    return (

      
      <nav style={{height:'130px', backgroundColor: 'red', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>

      <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px 20px', margin: '0 5px', border: 'none', borderRadius: '5px' }}>Gündem</button>
      <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px 20px', margin: '0 5px', border: 'none', borderRadius: '5px' }}>Son Dakika</button>
      <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px 20px', margin: '0 5px', border: 'none', borderRadius: '5px' }}>İş İlanları</button>
      <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px 20px', margin: '0 5px', border: 'none', borderRadius: '5px' }}>Kayıp İlanları</button>
      <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px 20px', margin: '0 5px', border: 'none', borderRadius: '5px' }}>Giriş Yap/Kaydol</button>
      </nav>
    );
  }
}

export default Nav;
