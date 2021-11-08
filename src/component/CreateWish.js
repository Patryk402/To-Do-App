import React from "react";
import AddWish from "./AddWish";
const CreateWish = (props) => {
	const style = { fontSize: 12, color: "red" };

	const activeWishes = props.wishes.filter((wish) => wish.active);
	const discableWishes = props.wishes.filter((wish) => !wish.active);

	activeWishes.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});
	discableWishes.sort((a, b) => b.day - a.day);

	const active = activeWishes.map((wish) => (
		<AddWish
			key={wish.id}
			id={wish.id}
			name={wish.name}
			delete={props.delete}
			change={props.change}
			active={wish.active}
			data={wish.data}
			important={wish.important}
		/>
	));
	const discable = discableWishes.map((wish) => (
		<AddWish
			key={wish.id}
			id={wish.id}
			name={wish.name}
			delete={props.delete}
			active={wish.active}
			data={wish.data}
			day={wish.day}
		/>
	));
	return (
		<>
			<strong>Wishes ({activeWishes.length}) </strong>

			<div>{active} </div>

			<hr />

			<strong>
				Done Wishes ({discableWishes.length})
				<br />
				{discableWishes.length > 5 ? (
					<span style={style}> (appear only first 5 wishes)</span>
				) : null}{" "}
			</strong>

			<div>{discable.splice(0, 5)} </div>
		</>
	);
};

export default CreateWish;
