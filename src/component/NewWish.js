import React, { Component } from "react";

class NewWish extends Component {
	state = {
		text: "",
		date: new Date().toISOString().slice(0, 10),
		checked: false,
	};
	handleText = (e) => {
		const text = e.target.value;
		this.setState({
			text,
		});
	};
	handleChecked = (e) => {
		const checked = e.target.checked;
		this.setState({
			checked,
		});
	};
	handleDate = (e) => {
		const date = e.target.value;
		this.setState({
			date,
		});
	};
	handleSend = (e) => {
		e.preventDefault();
		const { text, date, checked } = this.state;
		const add = this.props.add(text, date, checked);
		if (add) {
			this.setState({
				text: "",
				date: new Date().toISOString().slice(0, 10),
				checked: false,
			});
		}
	};

	render() {
		const minDate = new Date().toISOString().slice(0, 10);
		let maxDate = minDate.slice(0, 4) * 1 + 1;
		maxDate = maxDate + "-12-29";
		return (
			<>
				<form onSubmit={this.handleSend}>
					<h2> Add New Wish </h2>
					<input
						style={{ fontSize: 20, padding: 10 }}
						type="text"
						onChange={this.handleText}
						placeholder="write wish..."
						value={this.state.text}
					/>{" "}
					<input
						type="checkbox"
						onChange={this.handleChecked}
						checked={this.state.checked}
					/>{" "}
					<strong> important</strong>
					<br />
					<br />
					<strong>release date</strong>{" "}
					<input
						type="date"
						onChange={this.handleDate}
						value={this.state.date}
						min={minDate}
						max={maxDate}
					/>
					<br />
					<br />
					<button style={{ fontSize: 20, color: "blue", padding: 10 }}>
						Add Wish
					</button>
				</form>
			</>
		);
	}
}

export default NewWish;
