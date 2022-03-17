import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
	formRef = React.createRef();
	inputRef = React.createRef();
	onSubmit = (event) => {
		event.preventDefault();
		let name = this.inputRef.current.value;
		if (!name || name.trim() === "") {
			alert("습관을 적어주세요!");
			// this.inputRef.current.value = "";
			this.formRef.current.reset();
		} else {
			this.props.onAdd(name);
			// this.inputRef.current.value = "";
			this.formRef.current.reset();
		}
	};
	render() {
		return (
			<form
				ref={this.formRef}
				className="addform"
				onSubmit={this.onSubmit}
			>
				<input
					ref={this.inputRef}
					type="text"
					className="add-input"
					placeholder="Add your habit"
				/>
				<button type="submit" className="add-button">
					Add
				</button>
			</form>
		);
	}
}

export default HabitAddForm;
