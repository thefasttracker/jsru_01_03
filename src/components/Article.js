import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    render() {
        return (
            <div>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    getTitle() {
        const { article , openArticle  } = this.props
        const title = article.title ? article.title : "No title"
        return  (
            <h3 onClick={openArticle}>
                {title}
            </h3>
        )
    }

    getBody() {
        const { isOpen, article} = this.props
        if (!isOpen) return null
        return (
            <div>
                <p>{article.text}</p>
                <CommentList comments = {article.comments || []} />
            </div>
        )
    }
}

export default Article
//<a href = "#" onClick = {this.props.openArticle}>select</a>