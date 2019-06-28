import React from 'react';
import { shallow } from 'enzyme';
import Command from '../components/Command';
import App from '../App';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

describe('<App /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render one <Command>', () => {
        expect(wrapper.find(Command)).toHaveLength(1);
    });
});