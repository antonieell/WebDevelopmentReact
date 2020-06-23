import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
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

function RenderComments({ dish }) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (dish !== undefined) {
    let comentarios = dish.comments.map((dish) => {
      let numberMounth = parseInt(dish.date.substring(5, 7));
      let numberDay = parseInt(dish.date.substring(8, 10));
      let numberYear = parseInt(dish.date.substring(0, 4));

      return (
        <CardText>
          <p>{dish.comment}</p>
                    -- {dish.author}, {months[numberMounth - 1]} {numberDay}, {numberYear}
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

function DishDetail(props) {
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish}></RenderDish>
      </div>
      <div className="col-12 col-md-5 m-1">
        <RenderComments dish={props.dish}></RenderComments>
      </div>
    </div>
  );
}

export default DishDetail;
