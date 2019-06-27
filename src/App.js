import React from 'react';
import './App.css';
import Table from './components/Table'
import Command from './components/Command'
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			robotPosition: {
				x: 0,
				y: 0,
				direction: "NORTH",
			},
			directions: ["NORTH", "EAST", "SOUTH", "WEST"],
			isRobotPlaced: false,
			showModalPlaceInput: false
		}
	}

	move = () => {
		const currentDirection = this.state.robotPosition.direction;

		if(currentDirection === "NORTH") {

			if(this.state.robotPosition.y === 0) {
				return alert("Yay! You are at the edge of the table.");
			}

			this.setState(prevState => ({
				robotPosition: {
					...prevState.robotPosition,
					y: this.state.robotPosition.y-1
				}
			}));
		}

		if(currentDirection === "EAST") {

			if(this.state.robotPosition.x === 4) {
				return alert("Yay! You are at the edge of the table.");
			}

			this.setState(prevState => ({
				robotPosition: {
					...prevState.robotPosition,
					x: this.state.robotPosition.x+1
				}
			}));
		}

		if(currentDirection === "SOUTH") {

			if(this.state.robotPosition.y === 4) {
				return alert("Yay! You are at the edge of the table.");
			}

			this.setState(prevState => ({
				robotPosition: {
					...prevState.robotPosition,
					y: this.state.robotPosition.y+1
				}
			}));
		}

		if(currentDirection === "WEST") {

			if(this.state.robotPosition.x === 0) {
				return alert("Yay! You are at the edge of the table.");
			}

			this.setState(prevState => ({
				robotPosition: {
					...prevState.robotPosition,
					x: this.state.robotPosition.x-1
				}
			}));
		}
	}

	left = () => {
		const currentDirection = this.state.robotPosition.direction;
		var index = this.state.directions.indexOf(currentDirection);

		if(index >= 1) {
			index -= 1;
		} else {
			index = 3;
		}

		this.setRobotDirection(index);
	}

	right = () => {
		const currentDirection = this.state.robotPosition.direction;
		var index = this.state.directions.indexOf(currentDirection);

		if(index < (this.state.directions.length-1)) {
			index += 1;
		} else {
			index = 0;
		}

		this.setRobotDirection(index);
	}

	setRobotDirection = (index) => {
		this.setState(prevState => ({
			robotPosition: {
				...prevState.robotPosition,
				direction: this.state.directions[index]
			}
		}));
	}

	render() {
		console.log(this.state.robotPosition)
		return (
			<div className="App">
		      <Table robotPosition={this.state.robotPosition} />
		      <Command 
		      	right={this.right} 
		      	left={this.left}
		      	move={this.move}
		      	isRobotPlaced={this.state.isRobotPlaced}
		      />
		    </div>
		);
	}
}

