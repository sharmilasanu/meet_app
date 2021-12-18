import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test('render summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render organizer', () => {
        expect(EventWrapper.find('.organizer')).toHaveLength(1);
    });

    test('render time span', () => {
        expect(EventWrapper.find('.eventtime')).toHaveLength(1);
    });

    test('render location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test("details is shown/hidden when a user clicks on details button", () => {
        EventWrapper.find(".details").simulate("click");
        expect(EventWrapper.find(".details").text()).toBe("Hide Details");
        expect(EventWrapper.find(".description")).toHaveLength(1);
    });
})