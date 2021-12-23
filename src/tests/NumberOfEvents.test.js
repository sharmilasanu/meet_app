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

   
    
    test("show number of events input label", () => {
        expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
      });

});
