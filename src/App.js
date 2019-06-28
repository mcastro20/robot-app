import React from 'react';
import './App.css';
import Table from './components/Table'
import Command from './components/Command'
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			robotPosition: {
				positionX: 0,
				positionY: 0,
				direction: "NORTH",
			},
			directions: ["NORTH", "EAST", "SOUTH", "WEST"],
			isRobotPlaced: false,
			showModalPlaceInput: false,
			formInput: {
				positionX: 0,
				positionY: 0,
				direction: "NORTH"
			}
		}
	}

	move = () => {
		const currentDirection = this.state.robotPosition.direction;

		if (currentDirection === "NORTH") {

			if (this.state.robotPosition.positionY === 0) {
				return this.showMessage();
			}

			this.setState(prevState => ({
				robotPosition: {
					...prevState.robotPosition,
					positionY: this.state.robotPosition.positionY - 1
				}
			}));
		}

		if (currentDirection === "EAST") {

			if (this.state.robotPosition.positionX === 4) {
				return this.showMessage();
			}

			this.setState(prevState => ({
				robotPosition: {
					...prevState.robotPosition,
					positionX: this.state.robotPosition.positionX + 1
				}
			}));
		}

		if (currentDirection === "SOUTH") {

			if (this.state.robotPosition.positionY === 4) {
				return this.showMessage();
			}

			this.setState(prevState => ({
				robotPosition: {
					...prevState.robotPosition,
					positionY: this.state.robotPosition.positionY + 1
				}
			}));
		}

		if (currentDirection === "WEST") {

			if (this.state.robotPosition.positionX === 0) {
				return this.showMessage();
			}

			this.setState(prevState => ({
				robotPosition: {
					...prevState.robotPosition,
					positionX: this.state.robotPosition.positionX - 1
				}
			}));
		}
	}

	left = () => {
		const currentDirection = this.state.robotPosition.direction;
		var index = this.state.directions.indexOf(currentDirection);

		if (index >= 1) {
			index -= 1;
		} else {
			index = 3;
		}

		this.setRobotDirection(index);
	}

	right = () => {
		const currentDirection = this.state.robotPosition.direction;
		var index = this.state.directions.indexOf(currentDirection);

		if (index < (this.state.directions.length - 1)) {
			index += 1;
		} else {
			index = 0;
		}

		this.setRobotDirection(index);
	}

	showMessage = () => {
		return alert("Yay! You are at the edge of the table.");
	}

	setRobotDirection = (index) => {
		this.setState(prevState => ({
			robotPosition: {
				...prevState.robotPosition,
				direction: this.state.directions[index]
			}
		}));
	}

	placeRobot = (e) => {
		e.preventDefault();

		this.setState(prevState => ({
			robotPosition: {
				...prevState.robotPosition,
				...this.state.formInput
			},
			showModalPlaceInput: false,
			isRobotPlaced: true
		}));
	}

	toggleModalPlaceInput = () => {
		this.setState(prevState => ({
			showModalPlaceInput: !prevState.showModalPlaceInput
		}));
	}

	handleOnChangeInput = (e) => {
		const name = e.target.name;
		var value = '';

		if (name != "direction") {
			value = parseInt(e.target.value);
		} else {
			value = e.target.value;
		}

		this.setState(prevState => ({
			formInput: {
				...prevState.formInput,
				[name]: value
			}
		}));
	}

	render() {
		console.log(this.state)
		return (
			<div className="App">
				<Table robotPosition={this.state.robotPosition} />
				<Command
					right={this.right}
					left={this.left}
					move={this.move}
					isRobotPlaced={this.state.isRobotPlaced}
					toggleModalPlaceInput={this.toggleModalPlaceInput}
				/>

				<Modal isOpen={this.state.showModalPlaceInput} toggle={this.toggleModalPlaceInput}>
					<ModalHeader>Place Robot Position</ModalHeader>
					<Form onSubmit={this.placeRobot}>
						<ModalBody>
							<Row form>
								<Col md={3}>
									<FormGroup>
										<Label for="exampleCity">Position X</Label>
										<Input type="select" name="positionX" value={this.state.formInput.positionX} onChange={this.handleOnChangeInput}>
											<option>0</option>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
										</Input>
									</FormGroup>
								</Col>
								<Col md={3}>
									<FormGroup>
										<Label for="exampleState">Position Y</Label>
										<Input type="select" name="positionY" value={this.state.formInput.positionY} onChange={this.handleOnChangeInput}>
											<option>0</option>
											<option>1</option>
											<option>2</option>
											<option>4</option>
										</Input>
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label for="exampleZip">Direction</Label>
										<Input type="select" name="direction" value={this.state.formInput.direction} onChange={this.handleOnChangeInput}>
											{this.state.directions.map((item, key) =>
												<option key={key}>{item}</option>
											)}
										</Input>
									</FormGroup>
								</Col>
							</Row>
						</ModalBody>
						<ModalFooter>
							<Button color="secondary" onClick={this.toggleModalPlaceInput}>Cancel</Button>
							<Button type="submit" color="primary">Place Robot</Button>{' '}
						</ModalFooter>
					</Form>
				</Modal>
			</div>
		);
	}
}

