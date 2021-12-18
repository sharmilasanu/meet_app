import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => { 
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents  />);
    })
    test('render textbox', () => {
        expect(NumberOfEventsWrapper.find('.events_number')).toHaveLength(1);
    });
    test('changing event in textbox', () => {
        NumberOfEventsWrapper.setState({
            query: '32'
          });
          expect(NumberOfEventsWrapper.state('no_of_events')).toBe(32);
    });

});
