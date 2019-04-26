import React from "react";
import Robert1 from '../img/robert1.jpg'
import Robert2 from '../img/robert2.jpg'
import Robert3 from '../img/robert3.jpg'
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
            <div className="card">
                <div id="carouselExampleIndicators" className="carousel slide card-img-top" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block img-thumbnail w-100" src={Robert1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-thumbnail w-100" src={Robert2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-thumbnail w-100" src={Robert3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div>
                    <div className="card-body">
                        <h5 className={'card-title'}>Robert van Diest</h5>
                        <p className='card-text'><i className="fa fa-briefcase fa-fw"></i>Software engineer</p>
                        <p className='card-text'><i className="fa fa-home fa-fw"></i>Rotterdam, NL</p>
                        <p className='card-text'><i className="fa fa-envelope fa-fw"></i>robert.v.diest@gmail.com</p>
                        <p className='card-text'><i className="fa fa-phone fa-fw"></i>+316-13515937</p>
                    </div>
                </div>
            </div >
        )
    }
}