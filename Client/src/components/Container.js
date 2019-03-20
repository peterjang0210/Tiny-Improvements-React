import React from "react";
import Kudos from "./Kudos";
import ModalView from "./ModalView";

const Container = (props) => (
    <div className="mainView">
        {props.kudos && props.kudos.map(kudo => <Kudos key={kudo._id} title={kudo.title} sender={kudo.sender.name} message={kudo.message} receiver={kudo.receiver.name} id={kudo._id} delete={props.deleteKudo}/>)}
        <ModalView getKudos={props.getKudos}/>
    </div>
)

export default Container;