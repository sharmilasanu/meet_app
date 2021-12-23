import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents,extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    errorText: '',
  }
  updateEvents = async (location, numberOfEvents) => {
		getEvents().then(events => {
			const locationEvents =
				location === 'all'
					? events
					: events.filter(event => event.location === location);
			if (this.mounted) {
				this.setState({
					events: locationEvents.slice(0, this.state.numberOfEvents),
					currentLocation: location,
				});
			}
		});
	};

  updateNumberOfEvents = async e => {
		const newNumber = e.target.value ? parseInt(e.target.value) : 32;
		if (newNumber < 1 || newNumber > 32) {
			return this.setState({
				errorText: 'Please choose a number between 1 and 32.',
				numberOfEvents: 0,
			});
		} else {
			this.setState({
				errorText: '',
				numberOfEvents: newNumber,
			});
			this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
		}
	};

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  render() {
    return (
      <div className="App">
        <NumberOfEvents 
        numberOfEvents={this.state.numberOfEvents}
				updateNumberOfEvents={this.updateNumberOfEvents}
        errorText={this.state.errorText}
        />
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;