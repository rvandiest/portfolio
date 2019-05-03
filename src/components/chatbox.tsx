import React, { ReactChild } from "react";
import robert1 from '../img/robert1.jpg'
import "../styles/chatbox.css"

type message = {
    text: string, time: string
}

type ChatboxState = {
    history: Array<ReactChild>,
    message: string
}

export class TypingIndicator extends React.Component<{}, { indicator: string, timer: NodeJS.Timeout | null }>{
    constructor(props: any) {
        super(props)
        this.state = {
            indicator: ".",
            timer: null
        }
    }

    componentDidMount() {
        this.setState({
            indicator: ".",
            timer: setInterval(
                () => {
                    if (this.state.indicator.length < 3) {
                        this.setState({ ...this.state, indicator: this.state.indicator + "." })
                    }
                    else {
                        this.setState({ ...this.state, indicator: "." })
                    }
                }, 400
            )
        })
    }

    componentWillUnmount() {
        if (this.state.timer) {
            clearInterval(this.state.timer)
        }
    }

    public render() {
        return (
            <div className="incoming_msg">
                <div className="incoming_msg_img"> <img className="rounded-circle" src={robert1} alt="sunil" /> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{this.state.indicator}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export class IncomingMessage extends React.Component<message> {
    public render() {
        return (
            <div className="incoming_msg">
                <div className="incoming_msg_img"> <img className="rounded-circle" src={robert1} alt="sunil" /> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{this.props.text}</p>
                        <span className="time_date">{this.props.time}</span></div>
                </div>
            </div>
        )

    }
}

export class OutgoingMessage extends React.Component<message> {
    public render() {
        return (
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{this.props.text}</p>
                    <span className="time_date">{this.props.time}</span></div>
            </div>
        )

    }
}

export class Chatbox extends React.Component<{}, ChatboxState> {
    constructor(props: any) {
        super(props)
        const messages = new Array<ReactChild>();
        messages.push(
            <IncomingMessage key={0} text="This is a virtual assistent for Robert van Diest. Ask anything you like!" time={new Date().toLocaleString()} />
        )
        this.state = {
            history: messages,
            message: ""
        }
    }

    async sendMessage() {
        let elem = document.getElementById('messagehistory');

        this.state.history.push(
            <OutgoingMessage key={this.state.history.length} text={this.state.message} time={new Date().toLocaleString()} />
        )

        this.state.history.push(
            <TypingIndicator key={this.state.history.length} />
        )
        this.setState({ history: this.state.history, message: "" })

        if (elem) {
            elem.scrollTop = elem.scrollHeight - elem.clientHeight
        }

        let res = await (await fetch("/bot/usersays", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: this.state.message
            })
        })).json()

        this.state.history.pop()

        this.state.history.push(
            <IncomingMessage key={this.state.history.length} text={res.message} time={new Date().toLocaleString()} />
        )
        this.setState(this.state)

        if (elem) {
            elem.scrollTop = elem.scrollHeight - elem.clientHeight
        }
    }

    public render() {
        return (
            <div className="mesgs">
                <div id='messagehistory' className="msg_history">
                    {this.state.history}
                </div>
                <div className="type_msg">
                    <div className="input_msg_write">
                        <input type="text"
                            className="write_msg"
                            placeholder="Type a message"
                            value={this.state.message}
                            onChange={(event) => { this.setState({ ...this.state, message: event.target.value }) }}
                            onKeyUp={(event) => {
                                if (event.keyCode == 13 && this.state.message != "") {
                                    this.sendMessage()
                                }
                            }} />
                        <button className="msg_send_btn"
                            type="button"
                            onClick={(event) => {
                                if (this.state.message != "") {
                                    this.sendMessage()
                                }
                            }}>
                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}