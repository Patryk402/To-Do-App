import React from "react";

const AddWish = (props) => {
	const style = { color: "red" };
	const day = new Date(props.day).toLocaleString();
	if (props.active) {
		return (
			<>
				<li>
					{props.important ? (
						<strong style={style}>{props.name} </strong>
					) : (
						<strong>{props.name}</strong>
					)}
					<em> make to </em>
					<span> {props.data} </span>
					<button onClick={() => props.change(props.id)}>DONE</button>
					<button onClick={() => props.delete(props.id)}>X</button>
				</li>
				<br />
			</>
		);
	} else {
		// jeżeli active  jest false zwróć to (zrobione życzenia)
		return (
			<li>
				<strong>{props.name}</strong>
				<em> ( done on day {day} ) </em>
				<button onClick={() => props.delete(props.id)}>X</button>
			</li>
		);
	}
};

export default AddWish;
