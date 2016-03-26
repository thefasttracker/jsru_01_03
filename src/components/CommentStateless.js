import React from 'react'

export default (props) => {
	const {comment} = props
	return (
		<div>
			<p>{comment.name}</p>
			<p>{comment.text}</p>
		</div>
	)
 }
