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

    renderComments(dish) {
        var months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        if (dish != null) {
            let comentarios = dish.comments.map((dish) => {
                let numberMounth = parseInt(dish.date.substring(5, 7));
                let numberDay = parseInt(dish.date.substring(8, 10));
                let numberYear = parseInt(dish.date.substring(0, 4));

                return (
                    <CardText>
                        <p>{dish.comment}</p>
                        -- {dish.author}, {months[numberMounth - 1]} {numberDay}
                        , {numberYear}
                    </CardText>
                );
            });
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {comentarios}
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
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
