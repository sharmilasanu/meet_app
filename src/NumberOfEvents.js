import React, { Component } from "react";

class NumberOfEvents extends Component {
    
    state  = {
        no_of_events : 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
          this.setState({
            no_of_events : value
        });
    }
    render() {
        return <div className="numberOfEvents">
           
                <label >Number of Events</label>
                <input
                    type="number"
                    className="events_number"
                    onChange={this.handleInputChanged}
                />
            </div>
            
       
    }
}
export default NumberOfEvents;