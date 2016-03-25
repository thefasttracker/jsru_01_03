import React from 'react'
import CommentListOld from './CommentListOld'

export default (props) => {
	const { isOpen, article} = props
	if (!isOpen) return <noscript />
	return (
		<div>
			<p>{article.text}</p>
			<CommentListOld comments = {article.comments || []} />
		</div>
	)
}