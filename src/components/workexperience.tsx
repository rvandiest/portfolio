import React from "react";

export type WorkExperienceProps = {
    function: string
    company: string
    start: Date
    end: Date
    description: string
}

export class WorkExperience extends React.Component<WorkExperienceProps>{
    public render() {
        let enddate;
        if(this.props.end.getDate() >= new Date().getDate()){
            enddate = <span className="w3-tag w3-teal w3-round">Currently</span>
        }
        else{
            enddate = <span>{this.props.end.toDateString()}</span>
        }
        return (
            <div className="w3-container">
                <h5 className="w3-opacity"><b>{this.props.function} / {this.props.company}</b></h5>
                <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>{this.props.start.toDateString()} - {enddate}</h6>
                <p>{this.props.description}</p>
                <hr />
            </div>
        )
    }
}

export class WorkExperienceList extends React.Component{
    public render() {
        return (
            <div className="w3-container w3-card w3-white w3-margin-bottom popup-from-right">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                {this.props.children}
            </div>
        )
    }
}