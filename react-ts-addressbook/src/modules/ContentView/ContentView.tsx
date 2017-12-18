import * as React from 'react';
const logo = require('../../logo.svg');
import * as PubSub from 'pubsub-js';
import { CONTACT_VIEW } from '../shared/PubSubEvents';
import { IContact } from '../interfaces/ContactEntry';

interface IContactViewState {
    contact: IContact;
    editForm: boolean;
}
export default class ContactView extends React.Component {

    state: IContactViewState;
    constructor(props: any) {
        super(props);
        this.state = {
            contact: {
                company: '',
                email: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                website: ''
            },
            editForm: false
        }
    }
    componentWillMount() {
        PubSub.subscribe(CONTACT_VIEW, (topic: string, contact: IContact) => {
            this.setState({
                contact: contact
            });
        });
    }

    editContact = () => {
        this.setState({
            editForm: !(this.state.editForm)
        });
    }

    render() {
        return (
            <div className="contact-view">
                {this.state.contact.firstName.length > 0 && this.state.contact.lastName.length > 0 &&
                    <div className="row">
                        <div className="image col-md-4">
                            <img src={logo} className="rounded mx-auto d-block " alt="..." />
                            <a href="#" onClick={this.editContact} className="float-none btn btn-primary">Edit</a>
                        </div>
                        {!this.state.editForm &&
                        <div className="contact-details col-md-8">
                            <h3>{this.state.contact.firstName}</h3>
                            <br />
                            <h5>Contact Information</h5>
                            <hr />
                            <p>{this.state.contact.phoneNumber}</p>
                            <p>{this.state.contact.website}</p>
                            <p>{this.state.contact.email}</p>
                            <h5>Organization</h5>
                            <hr />
                            <p>{this.state.contact.company}</p>
                        </div>
                        }
                        { this.state.editForm && 
                          <p>Form to Edit goes Here </p>
                        }
                    </div>
                }
            </div>

        );
    }
}