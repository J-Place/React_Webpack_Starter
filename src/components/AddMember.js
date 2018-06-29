import React from 'react';
import TextInput from './forms/TextInput';


class AddMember extends React.Component {

	constructor(props) {

	    super(props);
	    this.state = {value: ''};
	    // this.state = {value: ''};
	    // this.handleChange = this.handleChange.bind(this);
	    // this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleFormSubmit = this.handleFormSubmit.bind(this);
	    this.handleClearForm = this.handleClearForm.bind(this);
	}

	componentDidMount() {
	    fetch('./db.json')
		.then(res => res.json())
		.then(data => {
	        this.setState({
				firstName: data.firstName,
				lastName: data.lastName,
				memberId: data.memberId
	        });
	    });
	}

	// handleChange(event) {
		// this.setState({value: event.target.value});
	// }

	// handleSubmit(event) {
		// console.log(this.state.value);
		// event.preventDefault();
	// }


	handleFormSubmit() {

	}

	handleClearForm() {

	}



	render() {

		return(
			<form onSubmit={this.handleFormSubmit}>
				<InputText type="text" />
			  <div>
	  			  <label>
				    Last Name
				    <input type="text" name="lastName" value={this.state.value} onChange={this.handleChange} />
				  </label>
				</div>
				<div>
			        <input
						type="submit"
						className="btn btn-primary float-right"
						value="Submit"/>
			        <button
			          className="btn btn-link float-left"
			          onClick={this.handleClearForm}>Clear form</button>
				</div>
			</form>
		);
	}
}

export default AddMember



