import React from "react";


type EducationProps = {
    location: string
    start: Date
    end: Date
    degree: string
    description: string
}
export class Education extends React.Component<EducationProps>{
    public render() {
        let enddate;
        if (this.props.end.getDate() >= new Date().getDate()) {
            enddate = <span className="w3-tag w3-teal w3-round">Currently</span>
        }
        else {
            enddate = <span>{this.props.end.toDateString()}</span>
        }

        return (
            <div className={"col-12"}>
                <h5><b>{this.props.location}</b></h5>
                <h6>
                    <i className="fa fa-calendar fa-fw"></i>{this.props.start.toDateString()} - {enddate}
                </h6>
                <p>{this.props.description}</p>
                <hr className='w-100' />
            </div>
        )
    }
}

export class EducationList extends React.Component {
    public render() {
        return (
            <div className="row mt-3 mb-3">
                {this.props.children}
            </div>
        )
    }

}