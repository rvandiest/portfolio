import React from "react";


type PageProps = { id: number }

export class Page extends React.Component<PageProps>{
    public render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}