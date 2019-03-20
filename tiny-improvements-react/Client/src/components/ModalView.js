import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import * as $ from "axios";

class ModalView extends React.Component {

    state = {
        modal: false,
        users: [],
        titleText: "",
        bodyText: "",
        senderID: "",
        receiverID: "",
        emptyInput: false
    }

    componentDidMount() {
        $({
            url: "/api/users",
            method: "GET"
        }).then((users) => {
            this.setState({users: users.data});
        });
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    clickHandler = (event) => {
        event.preventDefault();
        if(this.state.titleText === "" || this.state.bodyText === "" || this.state.senderID === "" || this.state.receiverID === "" ){
            this.setState({emptyInput: true});
        }else{
            this.submitKudos();
        }
        
    }

    submitKudos = () => {
        $({
            url: "/api/kudos",
            method: "POST",
            data: {
                title: this.state.titleText,
                message: this.state.bodyText,
                sender: this.state.senderID,
                receiver: this.state.receiverID
            }
        })
        this.setState({
            modal: !this.state.modal,
            title: "",
            message: "",
            sender: "",
            receiver: "",
            emptyInput: false
        })
        this.props.getKudos();
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div>
                <Button className="kudoBtn" color="info" onClick={this.toggle}>Send Kudos</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Kudos</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="senderSelect">From</Label>
                                <Input type="select" name="senderID" id="senderSelect" onChange={this.changeHandler} defaultValue="Select a User">
                                    <option disabled>Select a User</option>
                                    {(this.state.users && this.state.users.map((user, i) => <option key={i} value={user._id}>{user.name}</option>))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="messageTitle">Title</Label>
                                <Input type="text" name="titleText" id="messageTitle" onChange={this.changeHandler} placeholder="Enter a message title" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input type="text" name="bodyText" id="message" onChange={this.changeHandler} placeholder="Enter a message" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="receiverSelect">To</Label>
                                <Input type="select" name="receiverID" id="receiverSelect" onChange={this.changeHandler} defaultValue="Select a User">
                                    <option disabled>Select a User</option>
                                    {(this.state.users && this.state.users.map((user, i) => <option key={i} value={user._id}>{user.name}</option>))}
                                </Input>
                            </FormGroup>
                        </Form>
                        {this.state.emptyInput ? <Alert color="danger">Complete all input fields!</Alert> : ""}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.clickHandler}>Send</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalView;