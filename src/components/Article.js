import React, { Component, PropTypes } from 'react'
import Body from './Body'

class Article extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        article:PropTypes.object.isRequired
    }

    componentWillMount() {

    }

    render() {
        const { isOpen, article } = this.props
        return (
            <div>
                {this.getTitle()}
                <Body
                    isOpen = {isOpen}
                    article = {article}
                />
            </div>
        )
    }

    getTitle() {
        const { article , openArticle  } = this.props
        const title = article.title || "No title"
        return  (
            <h3 onClick={openArticle}>
                {title}
            </h3>
        )
    }
}

export default Article
//<a href = "#" onClick = {this.props.openArticle}>select</a>