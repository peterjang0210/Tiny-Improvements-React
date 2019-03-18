import React from "react";
import Kudos from "./Kudos";
import ModalView from "./ModalView";

const Container = (props) => (
    <div>
        {props.kudos && props.kudos.map(kudo => <Kudos key={kudo._id} title={kudo.title} sender={kudo.sender.name} message={kudo.message} receiver={kudo.receiver.name} delete={props.deleteKudo} id={kudo._id}/>)}
        <ModalView getKudos={props.getKudos}/>
    </div>
)

export default Container;