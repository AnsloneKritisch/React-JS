import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state =
        {
            message: 'Welcome Visitors'

        }
    }
    ChangeMessage() {
        this.setState({
            message: 'Thank your For Subscribing'
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.ChangeMessage()}>Subscribe</button>
            </div>

            // <h1>Welcome Visitor</h1>
        )
    }
}

export default Message