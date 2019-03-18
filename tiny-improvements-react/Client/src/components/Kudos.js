import React from "react";
import {Card, CardText, CardBody, CardTitle, Button} from 'reactstrap';

const Kudos = (props) => (
    <div>
        <Card>
            <CardBody>
                <CardTitle><h4>{props.title}</h4></CardTitle>
                <h3>{props.sender}</h3>
                <CardText>{props.message}</CardText>
                <h3>{props.receiver}</h3>
                <Button value={props.id} onClick={props.delete}>Delete</Button>
            </CardBody>
        </Card>

    </div>
)

export default Kudos;