import React from "react";

export class Navbar extends React.Component {
    public render() {
        return (
            <div className="w3-bar w3-white w3-border w3-margin-bottom">
                {this.props.children}
            </div>
        )
    }
}

type NavbarItemProps = {
    title: string,
    onclick: Function
}

export class NavbarItem extends React.Component<NavbarItemProps> {
    public render() {
        return (
            <div className="w3-dropdown-hover">
                <button onClick={() => this.props.onclick()} className="w3-button w3-white">{this.props.title}</button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class NavbarSubItem extends React.Component<NavbarItemProps>{
    public render() {
        return (
            <button onClick={() => this.props.onclick()} className="w3-bar-item w3-button">{this.props.title}</button>
        )
    }
}

