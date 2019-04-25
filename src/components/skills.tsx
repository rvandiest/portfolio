import React from "react";
import { SlideIn } from "./animations";


type SkillProps = {
    name: string
    level: number
}

type SkillState = {
    level: number
}

export class Skill extends React.Component<SkillProps, SkillState>{
    constructor(props: SkillProps) {
        super(props)
        this.state = { level: 0 }
    }
    public render() {
        return (
            <div>
                <p><i className="fa fa-desktop fa-fw w3-margin-right w3-large w3-text-teal"></i><b>{this.props.name}</b></p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: `${this.state.level}%` }}>{this.state.level}%</div>
                </div>
                <ul className='w3-ul'>
                    {this.props.children}
                </ul>
                <br />
            </div>
        )
    }

    componentDidMount() {
        var x = setInterval(() => {
            if (this.state.level == this.props.level) {
                clearInterval(x)
            }
            else {
                this.setState({ ...this.state, level: this.state.level + 1 })
            }
        }, 30)
    }
}

type TopicProps = { name: string }

export class Topic extends React.Component<TopicProps> {

    constructor(props: TopicProps) {
        super(props)
    }

    public render() {
        return (
            <li className={"popup-from-bottom"}><i className="fa fa-angle-right fa-fw w3-margin-right w3-text-teal"></i>{this.props.name}</li>

        )
    }

}

export class SkillList extends React.Component {
    public render() {
        return (
            <div className="w3-container w3-margin-top w3-card w3-white popup-from-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Skills</h2>
                {this.props.children}
            </div>
        )
    }

}