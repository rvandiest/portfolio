import React from "react";
import { Page } from "./page";


type PageSwitcherProps = { currentpage: number, subpage: null | number }

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
        let subitem: any
        item = this.children.find((item: any) => { return item.props.id == this.props.currentpage })
        if (item != null) {
            if (item.props.children == null) {
                return item
            }
            else {
                if (this.props.subpage == null) {
                    return item
                }
                else {
                    let childarry = React.Children.toArray(item.props.children)
                    subitem = React.Children.toArray(item.props.children).find((x: any) => { return x.props.id != null && x.props.id == this.props.subpage })
                    if (subitem == null) {
                        throw Error('Page not found')
                    }
                    else {
                        return subitem;
                    }
                }
            }

        }
    }
}