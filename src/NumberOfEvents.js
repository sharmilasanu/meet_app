import React, { Component } from "react";
import { ErrorAlert } from './Alert';
import { Row, Col, Container } from "react-bootstrap";

class NumberOfEvents extends Component {
    constructor(props){
    super()
    }
    render() {

        return    <Container className="numberOfEvents">
      
      <Row>
          <Col>
                 
                <input
                    value={this.props.numberOfEvents}
                    type="number"
                    className="events_number"
                    onChange={(e) => this.props.updateNumberOfEvents(e)}
                />
           </Col>
        </Row>

        <Row>
          <Col>
          <ErrorAlert text={this.props.errorText} />
          </Col>
        </Row>
           </Container> 
        
    }
}
export default NumberOfEvents;