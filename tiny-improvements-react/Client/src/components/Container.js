import React from "react";
import Kudos from "./Kudos";
import ModalView from "./ModalView";
import { Button } from 'reactstrap';

const Container = (props) => (
    <div>
        <Button color="primary">Send Kudos</Button>
        {props.kudos && props.kudos.map(kudo => <Kudos kudo={kudo}/>)}
        <ModalView />
    </div>
)

export default Container;