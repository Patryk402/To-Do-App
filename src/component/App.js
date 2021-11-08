import React, { Component } from "react";
import Createwish from "./CreateWish";
import NewWish from "./NewWish";
import "./App.css";

class App extends Component {
	counter = 3;
	state = {
		wishes: [
			{
				id: 0,
				name: "go to gym",
				active: true,
				data: "2021-05-07",
				important: true,
				day: null,
			},
			{
				id: 1,
				name: "vacation",
				active: true,
				data: "2021-08-01",
				important: false,
				day: null,
			},
			{
				id: 2,
				name: "play football",
				active: true,
				data: "2021-10-23",
				important: false,
				day: null,
			},
		],
	};

	handleChangeActive = (id) => {
		const wishes = [...this.state.wishes];
		wishes.forEach((wish) => {
			if (wish.id === id) {
				wish.active = false;
				wish.day = new Date().getTime();
			}
		});
		this.setState({
			wishes,
		});
	};

	handleDelete = (id) => {
		const wishes = this.state.wishes.filter((wish) => wish.id !== id);

		this.setState({
			wishes,
		});
	};
	handleAdd = (text, date, checked) => {
		const wish = {
			id: this.counter,
			name: text,
			active: true,
			data: date,
			important: checked,
			day: null,
		};
		const wishes = [...this.state.wishes];
		if (text) {
			wishes.push(wish);
			this.setState({
				wishes,
			});
		} else {
			alert("write wish");
		}
		this.counter++;
		return true;
	};

	render() {
		return (
			<div className="App">
				<NewWish add={this.handleAdd} />
				<hr />
				<Createwish
					wishes={this.state.wishes}
					delete={this.handleDelete}
					change={this.handleChangeActive}
				/>
			</div>
		);
	}
}
export default App;
