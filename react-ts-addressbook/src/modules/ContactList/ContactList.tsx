/// <reference path="./ContactService.ts" />
/// <reference path="../../../node_modules/@types/pubsub-js/index.d.ts" />

import * as React from 'react';
import ContactService from './ContactService';
const logo = require('../../logo.svg');
import { IListContactRepository, IContact } from '../interfaces/ContactEntry';
import { AxiosResponse } from 'axios';
import * as PubSub from 'pubsub-js';
import { CONTACT_VIEW, CONTACT_ADD } from '../shared/PubSubEvents';

export default class ContactList extends React.Component {
    state: IListContactRepository;
    constructor(props: Object) {
        super(props);
        this.state = {
            contacts: []
        };
    }
    componentWillMount() {
        ContactService.getContacts().then((response: IContact | AxiosResponse | any) => {
            ContactService.setContacts(response.data);
            this.setState({
                contacts: ContactService.read()
            });
        });

        PubSub.subscribe(CONTACT_ADD, () => {
            this.setState({
                contacts: ContactService.read()
            });
        });
    }
    showContact = (contact: IContact) => {
        PubSub.publish(CONTACT_VIEW, contact);
    }

    render() {
        const ItemRender = this.state.contacts.map((item, index) =>
            (
                <div key={item.group} className="contact-listing col-md-12 kill-padding">
                    <div className="contact-letter-group kill-padding col-md-12">
                        <div className="contact-letter-alphabet col-md-12">
                            {item.group}
                        </div>
                        <div className="contact-letter-items col-md-12">
                            {item.entries.map((contact) =>
                                <a href="#" key={contact.email} onClick={(e) => this.showContact(contact)}>
                                    <div className="contact-letter-entity col-md-12">
                                        <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                                        <span className="contact-letter-entity-name float-left">
                                            {contact.firstName} {contact.lastName}
                                        </span>

                                    </div>
                                </a>
                            )
                            }
                        </div>
                    </div>
                </div>
            )
        );
        return (
            <div>
                {ItemRender}
            </div>
        );
    }

}
