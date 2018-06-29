import React, { Component } from 'react';
import Header from './layout/Header';
import MemberList from './MemberList';


class App extends Component {
	render() {

		return (
			<div className="container">
				<Header />
				<h1>Member List</h1>
				<MemberList />
			</div>
		);
	}

}

export default App;