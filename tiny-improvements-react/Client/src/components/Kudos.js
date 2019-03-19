import React from "react";
import {Card, CardText, CardBody, CardTitle, Button} from 'reactstrap';

const Kudos = (props) => (
    <div id="kudo" className="slide-in-right"> 
        <Card>
            <CardBody>
                <CardTitle><h4>{props.title}</h4></CardTitle>
                <h3 className="receiver">To: {props.receiver}</h3>
                <CardText>{props.message}</CardText>
                <h3 className="sender">From: {props.sender}</h3>
                <Button value={props.id} onClick={props.delete}>Delete</Button>
            </CardBody>
        </Card>

    </div>
)

export default Kudos;