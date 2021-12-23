import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount,shallow } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  // Scenario 1
  test('When user hasn’t specified a number. 32 is the default number.', ({ given, when, then }) => {
    given('the user is on the main page.', () => {
      
    });

    let NumberOfEventsWrapper;
    when('the user hasn’t specified a number of the events.', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    then('the search result will display the default number.', () => {
      NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    });
  });

  // Scenario 2
  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('the user is on the main page.', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      NumberOfEventsWrapper.setState({ numberOfEvents: 32});
    });

    when('the user put a number of events they want to see in the “Number of events” box.', () => {
      const inputEventsNumber = { target: { value: 5 }};
      AppWrapper.find('.events_number').simulate('change', inputEventsNumber);
      AppWrapper.update(); 
    });

    then('the specified number of events is displayed.', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(5);
    });
  });
});