import React, {Component as ReactComponent} from 'react' // Component as ReactComponent - пример переназвания любого компонента

export default (Component) => {
	return class extends ReactComponent {

		state = {
			openArticleId: null
		}

		render() {
			return <Component {...this.props} {...this.state}
				openArticle = {this.openArticle}
				isOpen = {this.isOpen}
				close = {this.close}
			/>
		}

		openArticle = (openArticleId) => (ev) => {
			if (ev) ev.preventDefault()
			if (this.state.openArticleId == openArticleId) return this.setState({ openArticleId: null })
			this.setState({ openArticleId })
		}

		isOpen = (id) => this.state.openArticleId === id

		close = (ev) => {
			if (ev) ev.preventDefault()
			this.setState({
				openArticleId: null
			})
		}
	}
}