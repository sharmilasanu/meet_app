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

    test("change state when input changes", () => {
     const eventObject = { target: { value: 32 } };
     NumberOfEventsWrapper.find(".events_number").simulate(  "change",eventObject);
     expect(NumberOfEventsWrapper.state("no_of_events")).toBe(32);
     });
    
    test("show number of events input label", () => {
        expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
      });

});
