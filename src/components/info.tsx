import React from "react";
import Robert1 from '../img/robert1.jpg'
import Robert2 from '../img/robert2.jpg'
import Robert3 from '../img/robert3.jpg'
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export class Info extends React.Component {

    public render() {
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
                            <img className="d-block img-thumbnail w-100" src={Robert1}/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-thumbnail w-100" src={Robert2}/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-thumbnail w-100" src={Robert3}/>
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
                        <p className='card-text'><i className="fa fa-briefcase mr-2"></i>Software engineer</p>
                        <p className='card-text'><i className="fa fa-home mr-2"></i>Rotterdam, NL</p>
                        <p className='card-text'><i className="fa fa-envelope mr-2"></i>robert.v.diest@gmail.com</p>
                        <p className='card-text'><i className="fab fa-linkedin-in mr-2"></i><a href="https://www.linkedin.com/in/robert-van-diest-376998153/">robert-van-diest-376998153</a></p>
                        <p className='card-text'><i className="fab fa-facebook mr-2"></i><a href="https://www.facebook.com/robert.vandiest.3">robert.vandiest</a></p>
                        <p className='card-text'><i className="fab fa-instagram mr-2"></i><a href="https://www.instagram.com/diestrobert/">diestrobert</a></p>
                        <p className='card-text'><i className="fa fa-phone mr-2"></i>+316-13515937</p>
                    </div>
                </div>
            </div >
        )
    }
}