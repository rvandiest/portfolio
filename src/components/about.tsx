import React from "react";

export class About extends React.Component {
    public render() {
        return (
            <div>
                <div className={"mt-1"} style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                    <p>{
                        `Welcome to my digital portfolio and resume! I'm Robert van Diest, a 
                        ${Math.floor(Math.abs((+new Date('08-23-1995')-+new Date()))/31536000000)} year old programmer. 
                        I have experience in both back- and frontend, but my talents and passion lie closer to backend development.

                         Browse this site to see some projects I've worked on in the past, dig up information about my
                         (previous) employers, or just to learn more about me :)`}
                    </p>
                </div>
                <div className={"mt-5 col-xs-12 col-sm-12 offset-md-2 col-md-8 col-lg-8"}>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td><b>Name</b></td>
                                <td>van Diest, R</td>
                            </tr>
                            <tr>
                                <td><b>First name</b></td>
                                <td>Robert</td>
                            </tr>
                            <tr>
                                <td><b>City</b></td>
                                <td>Rotterdam</td>
                            </tr>
                            <tr>
                                <td><b>Phone number</b></td>
                                <td>+31613515937</td>
                            </tr>
                            <tr>
                                <td><b>Email</b></td>
                                <td>robert.v.diest@gmail.com</td>
                            </tr>
                            <tr>
                                <td><b>Date of birth</b></td>
                                <td>23-08-1995</td>
                            </tr>
                            <tr>
                                <td><b>Birth city</b></td>
                                <td>Rotterdam</td>
                            </tr>
                            <tr>
                                <td><b>Nationality</b></td>
                                <td>Dutch</td>
                            </tr>
                            <tr>
                                <td><b>Gender</b></td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td><b>Drivers license</b></td>
                                <td>B/AM</td>
                            </tr>
                            <tr>
                                <td><b>Civil state</b></td>
                                <td>Unmarried</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}