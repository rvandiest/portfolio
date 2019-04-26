import React from "react";


type PageProps = { id: number, title: string }

export class Page extends React.Component<PageProps>{
    public render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="row mt-3">
                    <div className="mt-3 mb-3 ml-3 mr-3">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}