import React from 'react';
import { shallow, mount } from 'enzyme';
import Command from '../components/Command';
import App from '../App';

let appComponent;

beforeEach(() => {
    appComponent = shallow(<App />);
});

describe('<App /> rendering', () => {
    it('renders correctly', () => {
        expect(appComponent).toMatchSnapshot();
    });

    it('should render one <Command>', () => {
        expect(appComponent.find(Command)).toHaveLength(1);
    });
});