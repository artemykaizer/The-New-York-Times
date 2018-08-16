import React from 'react'

class ErrorHandler extends React.Component {
    state = {
        error: false
    }
    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        if(this.state.error) {
            return (
                <h1 className="error-text">An error has occured. Try to reload page.</h1>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorHandler