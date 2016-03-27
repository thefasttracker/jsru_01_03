import React, { Component, PropTypes } from 'react'
import Article from './Article'
import oneOpen from '../HOC/oneOpen'


class ArticleList extends Component {

    render() {
        const {isOpen, openItem, articles} = this.props
        const articleItem = articles.map((article) =>
            <li key={article.id}>
                <Article article={article}
                         openItem = {openItem(article.id)}
                         isOpen = {isOpen(article.id)}
                />
            </li>
        )
        return (
            <div>
                <ul>
                    {articleItem}
                </ul>
            </div>
        )
    }

}

export default oneOpen(ArticleList)
