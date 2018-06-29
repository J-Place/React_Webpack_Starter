import React, { Component } from 'react';
import Member from './Member';

class MemberList extends React.Component {

	render() {

	var member = {
			firstName: "Morgan",
			lastName: "Place"
		};

		return(
			<div className="row">
				<Member firstName="Jay" lastName="Place" member={member}  />
				<Member />
			</div>
		);
	}
}

export default MemberList