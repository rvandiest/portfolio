import React from "react";

export class Navbar extends React.Component {
    public render() {
        return (
            <div className='row'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light w-100"  >
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {this.props.children}
                        </ul>
                    </div>
                </nav>
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
            <li className="nav-item" style={{ fontSize: '24px' }}>
                <a style={{ color: 'grey' }} onClick={() => this.props.onclick()} className="nav-link">{this.props.title}</a>
            </li>
        )
    }
}

export class NavbarDropDown extends React.Component<NavbarItemProps> {
    public render() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.title}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {this.props.children}
                </div>
            </li>

        )
    }
}

export class NavbarDropDownItem extends React.Component<NavbarItemProps> {
    public render() {
        return (
            <a className="dropdown-item" onClick={() => { this.props.onclick() }}>{this.props.title}</a>
        )
    }

}

