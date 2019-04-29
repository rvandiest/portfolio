import React from "react";
import { Page } from "./page";


type PageSwitcherProps = { currentpage: number }

export class PageSwitcher extends React.Component<PageSwitcherProps>{
    private children: React.ReactChild[]
    constructor(props: PageSwitcherProps) {
        super(props)
        this.children = React.Children.toArray(this.props.children)
        this.children.forEach((child: any) => {
            if (child.type != Page) {
                throw TypeError('The PageSwitcher class can only contain children with type Page')
            }
        })
    }

    public render() {
        let item: any
        item = this.children.find((item: any) => { return item.props.id == this.props.currentpage })
        if (item != null) {
            return item
        }
        else {
            throw Error("Couldn't find page with id " + this.props.currentpage)
        }
    }
}