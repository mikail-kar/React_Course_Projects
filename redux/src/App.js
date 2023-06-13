import React, {Component} from 'react';
import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseCounter from './components/IncreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import { Col, Row } from 'reactstrap';
import Multiply from './components/Multiply';


export default class App extends Component{
  render() {
    return (
      <div>
        <center>
          <h2>Counter</h2>
        </center>
        <center>
          <Row>
            <Col xs="3">
            <Counter />
            </Col>
            <Col xs="3">
            <DecreaseCounter />
            </Col>
            <Col xs="3">
            <IncreaseCounter />
            </Col>
            <Col xs="3">
            <IncreaseByTwoCounter />
            </Col>
            <Col xs="3">
            <Multiply /> 
            </Col>
          </Row>
        </center>
      
      </div>
    );
  }
}


