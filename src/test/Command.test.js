import React from 'react';
import { shallow } from 'enzyme';
import Command from '../components/Command';
import { Button } from "reactstrap";

function createTestProps(props) {
  return {
    isRobotPlaced: false,
    ...props,
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<Command {...props} />);
});

describe('<Command /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 5 <Button /> s to display the Place, Report, Move, Left and Right options', () => {
    expect(wrapper.find(Button)).toHaveLength(5);
  });

  it('should render one enable button when isRobotPlaced is false', () => {
    wrapper = shallow(<Command isRobotPlaced={false} />);
    expect(wrapper.find("Button").not("Button[disabled=true]")).toHaveLength(1);
  });
});

describe('<Command /> interactions', () => {
  it('should invoke the toggleModalPlaceInput callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let wrapper = shallow(<Command toggleModalPlaceInput={mockFn} />);
    wrapper.find('Button[name="place"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke the report callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let wrapper = shallow(<Command report={mockFn} />);
    wrapper.find('Button[name="report"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke the move callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let wrapper = shallow(<Command move={mockFn} />);
    wrapper.find('Button[name="move"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke the left callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let wrapper = shallow(<Command left={mockFn} />);
    wrapper.find('Button[name="left"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should invoke the right callback when Button Place is clicked', () => {
    let mockFn = jest.fn();

    let wrapper = shallow(<Command right={mockFn} />);
    wrapper.find('Button[name="right"]').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});