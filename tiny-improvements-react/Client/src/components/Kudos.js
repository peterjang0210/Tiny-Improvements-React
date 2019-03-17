import React from "react";

const Kudos = (props) => (
    <div>
        <h3>{props.kudo.sender}</h3>
        <h4>{props.kudo.title}</h4>
        <p>{props.kudo.message}</p>
        <h3>{props.kudo.receiver}</h3>
    </div>
)

export default Kudos;