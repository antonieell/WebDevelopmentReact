import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                    <Jumbotron>
                        <div className="container">
                            <div className="roe row-header">
                                <div className="col-12 col-sm-6">
                                    <h1>Ristorant Con Fusion</h1>
                                    <p>
                                        We take inspiration from the World's best cysines, abd create a unique fusion
                                        experience. Our Lipsmacking creatinos will tickle your culinary sense!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
                </Navbar>
            </>
        );
    }
}

export default Header;
