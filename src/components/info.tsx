import React from "react";
import { Avatar } from "./avatar";
import Robert from '../img/robert.jpeg'
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export class Info extends React.Component {

    public render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="w3-white w3-text-grey w3-card-4 popup-from-left">
                <Avatar thumbnail={Robert} name="Robert van Diest" />
                <div className="w3-container">
                    <div className="w3-container">
                        <hr />
                        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Software engineer</p>
                        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Rotterdam, NL</p>
                        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>robert.v.diest@gmail.com</p>
                        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+316-13515937</p>
                        <hr />
                    </div>
                    <br />
                </div>
            </div >
        )
    }
}