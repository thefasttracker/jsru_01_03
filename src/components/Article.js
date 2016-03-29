import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import Body from './Body'
import { deleteArticle } from '../actions/articles'

class Article extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        article:PropTypes.object.isRequired
    }

    render() {
        const { isOpen, article } = this.props
        return (
            <div ref="container"> {/* this ref is for jQuery and other js container*/}
                <a href="#" onClick = {this.handleDelete}>delete</a>
                {this.getTitle()}
                <Body
                    isOpen = {isOpen}
                    article = {article}
                />
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
        console.log("---", 'deleting', this.props.article.id)

    }

    getTitle() {
        const { article , openItem  } = this.props
        const title = article.title || "No title"
        return  (
            <h3 onClick={openItem}>
                {title}
            </h3>
        )
    }
}

export default Article
