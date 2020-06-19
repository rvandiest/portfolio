import React from "react";

import AnimalActions from '../img/cc_animalactions.jpg'
import AnimalAncestryGraph from '../img/cc_animalancestrygraph.jpg'
import AnimalDetails from '../img/cc_animaldetails.jpg'
import AddAnimalModal from '../img/cc_addanimalmodal.jpg'
import AddEnclosureModal from '../img/cc_addenclosuremodal.jpg'
import EnclosureDetails from '../img/cc_enclosuredetails.jpg'
import EnclosureMetrics from '../img/cc_enclosuremetrics.jpg'
import EnclosureOverview from '../img/cc_enclosureoverview.jpg'

export class Projects extends React.Component {
    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4 style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>CareTaker</h4>
                    <div className="mt-3 col-xs-12 col-sm-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                        <div id="carouselProjects" className="carousel slide card-img-top" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselProjects" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselProjects" data-slide-to="1"></li>
                                <li data-target="#carouselProjects" data-slide-to="2"></li>
                                <li data-target="#carouselProjects" data-slide-to="3"></li>
                                <li data-target="#carouselProjects" data-slide-to="4"></li>
                                <li data-target="#carouselProjects" data-slide-to="5"></li>
                                <li data-target="#carouselProjects" data-slide-to="6"></li>
                                <li data-target="#carouselProjects" data-slide-to="7"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block img-thumbnail w-100" src={EnclosureOverview} alt="EnclosureOverview" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Enclosures Overview</h5>
                                        <p>On the enclosure overview page, all enclosures linked to your account are shown.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src={AddEnclosureModal} alt="AddEnclosureModal" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Adding enclosures</h5>
                                        <p>Adding enclosures is intuitive and easy.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src={EnclosureDetails} alt="EnclosureDetails" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Enclosure Details</h5>
                                        <p>In the Enclosure details page, you can see the animals currently in this enclosure,
                                        and the actions performed on the enclosure or its' inhabitants.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src={EnclosureMetrics} alt="EnclosureMetrics" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Enclosure Metrics</h5>
                                        <p>Metrics, for example humidity or temperature, can be kept for each individual enclosure.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src={AddAnimalModal} alt="AddAnimalModal" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Adding animals</h5>
                                        <p>Animals can easily be added to the system.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src={AnimalDetails} alt="AnimalDetails" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Animal Details</h5>
                                        <p>Basic info such as species, gender and age are saved. Also family ties can be added.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src={AnimalActions} alt="AnimalActions" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Animal Actions</h5>
                                        <p>You can see action history for each animal or enclosure.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src={AnimalAncestryGraph} alt="AnimalAncestryGraph" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Animal Ancestry</h5>
                                        <p>You can generate a family tree for every animal linked to your account.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselProjects" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselProjects" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-3 col-xs-12 col-sm-12 col-md-12col-lg-12">
                        <p className="mt-1" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                            <b>Status: </b><i>WIP</i>
                        </p>
                        <p className="mt-1" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                            CareTaker is a project to track and register the actions involved in taking care of animals.
                            I've come to the idea of this application while performing my duties in my sidejob.
                            It's hard to keep track of all things you've done, especially when non-routine jobs or events come in to play.
                            This system is designed to keep track of everything you do for your animals, so you won't forget or repeat important tasks.
                            Apart from registering activities, it's also capable of registering family ties between animals, to prevent inbreeding.
                        </p>
                        <p className="mt-1" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                            <i>This project was realised in Django.</i>
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <h4 style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>VR Military Simulator</h4>
                    <div className="mt-3 col-xs-12 col-sm-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/O6odZDR-G7k" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    <div className="mt-3 col-xs-12 col-sm-12 col-md-12col-lg-12">
                        <p className="mt-1" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                            <b>Status: </b><i>Delivered POC</i>
                        </p>
                        <p className="mt-1" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                            For the minor of my bachelor at the Hogeschool Rotterdam, our project group realised a proof of concept Virtual Reality trainer for the Dutch Armed Forces. 
                            In this serious game, a squad leader can give orders to his (non playable AI) teammates using voice- and gesture commands.

                            This project will be used in the effort of the Dutch Armed Forces in revolutionizing their way of training their forces.
                        </p>
                        <p className="mt-1" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                            <i>This project was realised with the Unity engine, using the OpenVR library and HTC Vive.</i>
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}