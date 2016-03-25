import React, { Component, PropTypes } from 'react'

class jQueryComponent extends Component {
	static propTypes = {

	};

	componentDidMount() {
		console.log('---', 'do some jquery with', this.refs.jContainer);
	}

	render() {
		return (
			<div ref="jContainer"/>
		)
	}
}

export default jQueryComponent