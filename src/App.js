import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import EventGenre from './EventGenre';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents,extractLocations } from './api';
import './nprogress.css';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip ,ResponsiveContainer
} from 'recharts';

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
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
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
    const{locations ,numberOfEvents, events} = this.state
    return (
      <div className="App">
        <NumberOfEvents 
        numberOfEvents={this.state.numberOfEvents}
				updateNumberOfEvents={this.updateNumberOfEvents}
        errorText={this.state.errorText}
        />
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
         <div className='data-vis-wrapper'>
         <EventGenre events={events}/>
         <ResponsiveContainer height={400} >
         <ScatterChart
        
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events"  allowDecimals={false}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;