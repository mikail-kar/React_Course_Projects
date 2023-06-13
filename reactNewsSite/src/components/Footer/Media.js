import React, { Component } from 'react';

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDateTime: new Date()
    });
  }

  render() {
    const { currentDateTime } = this.state;

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      locale: 'tr-TR', // Display in Turkish language

      hour12: false, // Display time in 24-hour format

      timeZone: 'Europe/Istanbul' // Replace with your country's timezone
    };

    const formattedDateTime = currentDateTime.toLocaleString('tr-TR', options);

    return (
        <footer style={{ backgroundColor: '#222', padding: '20px', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, marginRight: '10px' }}>Bize Ulaşın!</p>
          </div>
          <div>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/youraccount" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div>
            <p style={{ margin: 0, textAlign: 'right' }}>{formattedDateTime}</p>
          </div>
        </div>
      </footer>
      );
      

    }
  }


export default Media;