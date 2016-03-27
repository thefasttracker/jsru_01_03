import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import Body from './Body'

class Article extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        article:PropTypes.object.isRequired
    }

    componentWillMount() {
        console.log("---", 'going to mount');
    }

    componentDidMount() {
        console.log("---", 'mounted to: ', this.refs.container);  // example ref is for jQuery and other js container
    }

    render() {
        const { isOpen, article } = this.props
        return (
            <div ref="container"> {/* this ref is for jQuery and other js container*/}
                {this.getTitle()}
                <Body
                    isOpen = {isOpen}
                    article = {article}
                />
            </div>
        )
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
