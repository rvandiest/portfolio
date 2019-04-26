import React from "react";


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
            <div className='col-12'>

                <h4><i className="fa fa-desktop fa-fw"></i><b> {this.props.name}</b></h4>

                <div className="progress" style={{ height: '30px' }}>
                    <div className="progress-bar" style={{ width: `${this.state.level}%`, backgroundColor: 'gray' }}><h5>{this.state.level}%</h5></div>
                </div>
                <ul>
                    {this.props.children}
                </ul>
                <hr />
            </div >
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
        }, 40)
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
            <div className="row mb-3 mt-3">
                {this.props.children}
            </div>
        )
    }

}