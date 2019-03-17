import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import KudosContext from "./KudosContext";
import * as $ from "axios";

class ModalView extends React.Component {

    state = {
        modal: false,
        users: [{ name: "bob", _id: 0 }, { name: "fred", _id: 1 }, { name: "joe", _id: 2 }],
        titleText: "",
        bodyText: "",
        senderID: "",
        receiverID: ""
    }

    componentDidMount() {
        // this.setState({ users: this.props.users });
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    clickHandler = (event) => {
        event.preventDefault();
        this.submitKudos();
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
            receiver: ""
        })
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Trigger Modal</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
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