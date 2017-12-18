/// <reference path="./ContactService.ts" />

import * as React from 'react';
import ContactService from './ContactService';
const logo = require('../../logo.svg');
import { IListContactRepository, IContact } from '../interfaces/ContactEntry';
import { AxiosResponse } from 'axios';

export default class ContactList extends React.Component {
    state: IListContactRepository;
    constructor (props: Object) {
        super(props);
        this.state = {
            contacts: []
        };
    }
    componentWillMount() {
        ContactService.getContacts().then((response: IContact | AxiosResponse | any) => {
            this.setState({
                contacts: response.data
            });
        });
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
                                <div key={contact.email} className="contact-letter-entity col-md-12">
                                    <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                                    <span className="contact-letter-entity-name float-left">
                                        {contact.firstName} {contact.lastName}
                                    </span>
                                </div>
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
