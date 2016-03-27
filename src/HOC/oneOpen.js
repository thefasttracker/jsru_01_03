import React, {Component as ReactComponent} from 'react' // Component as ReactComponent - пример переназвания компонента

export default (Component) => {
	return class extends ReactComponent {

		state = {
			openItemId: null
		}

		render() {
			return <Component {...this.props} {...this.state}
				openItem = {this.openItem}
				isOpen = {this.isOpen}
				close = {this.close}
			/>
		}

		openItem = (openItemId) => (ev) => {
			if (ev) ev.preventDefault()
			if (this.state.openItemId == openItemId) return this.setState({ openItemId: null })
			this.setState({ openItemId })
		}

		isOpen = (id) => this.state.openItemId === id

		close = (ev) => {
			if (ev) ev.preventDefault()
			this.setState({
				openItemId: null
			})
		}
	}
}