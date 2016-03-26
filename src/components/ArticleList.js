import React, { Component, PropTypes } from 'react'
import Article from './Article'
import oneOpen from '../HOC/oneOpen'


class ArticleList extends Component {

    render() {
        const {isOpen, openArticle, articles} = this.props
        const articleItem = articles.map((article) =>
            <li key={article.id}>
                <Article article={article}
                         openArticle = {openArticle(article.id)}
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
