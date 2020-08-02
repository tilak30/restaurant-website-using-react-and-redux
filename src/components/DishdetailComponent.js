import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';



    function RenderDish({dish}) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }
    

    function RenderComments({comments}){
        const cmnt = comments.map((comment) => {
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            );
        });

        return (
            <div>
                <h4> Comments </h4>
                <ul className="list-unstyled">
                    {cmnt}
                </ul>
            </div>
        );
    }

    const DishDetail = (props) => {

        console.log('DishDetail component render invoked');

        if(props.dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments} />
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

export default DishDetail;