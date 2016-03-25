import React from 'react'
import Comment from './Comment'

export default React.createClass({

	getInitialState(){
		return{
			isOpen: false
		}
	},

	render: function () {
		const { isOpen } = this.state
		const actionText = isOpen ? 'hide comments' : 'show comments'

		const comments = this.props.comments.map((comment) =>
			<li key={comment.id}>
				<Comment comment = {comment}/>
			</li>)

		return (
			<div>
				<a href = "#" onClick = {this.toggleOpen}>{actionText}</a>
				<ul>{isOpen ? comments : null}</ul>
			</div>
		)
	},

	toggleOpen: function(ev) {
		ev.preventDefault()
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
})