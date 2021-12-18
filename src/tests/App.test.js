import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
   /* test('render list of events', () => {
        const AppWrapper = shallow(<App />);
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      });
      test('render CitySearch', () => {
        const AppWrapper = shallow(<App />);
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
      }); */
      describe('<App /> component', () => {
        let AppWrapper;
        beforeAll(() => {
          AppWrapper = shallow(<App />);
        });
      
        test('render list of events', () => {
          expect(AppWrapper.find(EventList)).toHaveLength(1);
        });
      
        test('render CitySearch', () => {
          expect(AppWrapper.find(CitySearch)).toHaveLength(1);
        });

        test('render No of Events', () => {
          expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
        });
      });
});