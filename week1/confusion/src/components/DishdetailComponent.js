import React, { Component } from "react";
import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg
                        width="100%"
                        object
                        src={dish.image}
                        alt={dish.name}
                    />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardBody>{dish.description}</CardBody>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
