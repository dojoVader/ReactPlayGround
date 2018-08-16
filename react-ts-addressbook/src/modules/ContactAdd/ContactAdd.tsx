import * as React from 'react';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddForm from './form/AddForm';

export default class ContactAdd extends React.Component {

    state: any = {
        modal: false,

    };

    toggle = () => {
        this.setState({
            modal: (!this.state.modal)
        })
    }

    constructor(props: any) {
        super(props);
    }

    showForm = () => {
        this.setState({
            modal: true
        });
    }

    hideForm = () => {
        this.setState({
            modal: false
        });
    }

    

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Entry</ModalHeader>
                    <ModalBody>
             
                                <AddForm close={this.hideForm} />
                    </ModalBody>
   
                </Modal>
                <div className="contact-header col-md-12">
                    <div className="content-header">
                        <span>Contacts</span>
                        <a href="#" className="float-right" onClick={this.showForm}>
                            <span className="ion-android-add" />

                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
