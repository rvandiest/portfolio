import React from "react";
import { SlideIn } from "./animations";
import { Info } from "./info";


type PageProps = { id: number, title: string }

export class Page extends React.Component<PageProps>{
    public render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <SlideIn from='left' duration='1400ms'>
                            <Info />
                        </SlideIn>
                        <br />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                        <div className="m-3">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}