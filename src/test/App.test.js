import React from 'react';
import { shallow, mount } from 'enzyme';
import Command from '../components/Command';
import App from '../App';

let appComponent, defaultState;


function createDefaultState() {
    return {
        robotPosition: {
            positionX: 0,
            positionY: 0,
            direction: "NORTH",
        }
    };
}

beforeEach(() => {
    defaultState = createDefaultState();
    appComponent = shallow(<App />);
    appComponent.setState(defaultState);
});

describe('<App /> rendering', () => {
    it('renders correctly', () => {
        expect(appComponent).toMatchSnapshot();
    });

    it('should render one <Command>', () => {
        expect(appComponent.find(Command)).toHaveLength(1);
    });

    it('should update the state robotPosition.direction to "WEST" when Left button is clicked.', () => {
        const left = appComponent.instance().left();
        const command = shallow(<Command left={left} />);

        command.find('Button[name="left"]').simulate('click');
        expect(appComponent.state('robotPosition').direction).toEqual("WEST");
    });

    it('should update the state robotPosition.direction to "EAST" when Right button is clicked.', () => {
        const right = appComponent.instance().right();
        const command = shallow(<Command right={right} />);

        command.find('Button[name="right"]').simulate('click');
        expect(appComponent.state('robotPosition').direction).toEqual("EAST");
    });
});