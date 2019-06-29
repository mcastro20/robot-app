import React from 'react';
import { shallow } from 'enzyme';
import Command from '../components/Command';
import App from '../App';
import { Button } from "reactstrap";

function createTestProps(props) {
  return {
    isRobotPlaced: false,
    ...props,
  };
}

function setDefaultState(setValue) {
  if (setValue) {
    return {
      robotPosition: {
        ...setValue
      }
    }
  }

  return {
    robotPosition: {
      positionX: 0,
      positionY: 0,
      direction: "NORTH",
    }
  };
}

let commandComponent, appComponent, defaultState, props;

beforeEach(() => {
  defaultState = setDefaultState();
  appComponent = shallow(<App />);
  appComponent.setState(defaultState);

  props = createTestProps();
  commandComponent = shallow(<Command {...props} />);
});

describe('<Command /> rendering', () => {
  it('renders correctly', () => {
    expect(commandComponent).toMatchSnapshot();
  });

  it('should render 5 <Button /> s to display the Place, Report, Move, Left and Right options', () => {
    expect(commandComponent.find(Button)).toHaveLength(5);
  });

  it('should render one enable button when isRobotPlaced is false', () => {
    commandComponent = shallow(<Command isRobotPlaced={false} />);
    expect(commandComponent.find("Button").not("Button[disabled=true]")).toHaveLength(1);
  });
});

describe('<Command /> interactions', () => {
  it('should invoke the toggleModalPlaceInput callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let commandComponent = shallow(<Command toggleModalPlaceInput={mockFn} />);
    commandComponent.find('Button[name="place"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke the report callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let commandComponent = shallow(<Command report={mockFn} />);
    commandComponent.find('Button[name="report"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke the move callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let commandComponent = shallow(<Command move={mockFn} />);
    commandComponent.find('Button[name="move"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke the left callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let commandComponent = shallow(<Command left={mockFn} />);
    commandComponent.find('Button[name="left"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke the right callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let commandComponent = shallow(<Command right={mockFn} />);
    commandComponent.find('Button[name="right"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
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

  it('should not allow to move when robot is on the edge of table.', () => {
    window.alert = jest.fn();
    const move = appComponent.instance().move();
    const command = shallow(<Command move={move} />);

    command.find('Button[name="move"]').simulate('click');
    expect(window.alert).toHaveBeenCalledTimes(1);
    window.alert.mockClear();
  });

  it('should update the state robotPosition.positionX when robot is facing east', () => {
    appComponent = shallow(<App />);

    defaultState = setDefaultState({
      positionX: 0,
      positionY: 0,
      direction: "EAST"
    });

    appComponent.setState(defaultState);
    const move = appComponent.instance().move();
    const command = shallow(<Command move={move} />);

    command.find('Button[name="move"]').simulate('click');
    expect(appComponent.state('robotPosition').positionX).toEqual(1);
  });

  it('should update the state robotPosition.positionY when robot is facing south', () => {
    appComponent = shallow(<App />);

    defaultState = setDefaultState({
      positionX: 0,
      positionY: 0,
      direction: "SOUTH"
    });

    appComponent.setState(defaultState);
    const move = appComponent.instance().move();
    const command = shallow(<Command move={move} />);

    command.find('Button[name="move"]').simulate('click');
    expect(appComponent.state('robotPosition').positionY).toEqual(1);
  });
});