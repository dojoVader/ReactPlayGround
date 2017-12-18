/// <reference path="../../../../node_modules/@types/pubsub-js/index.d.ts" />

import * as React from 'react';
import { Button } from 'reactstrap';
import { IContact } from '../../interfaces/ContactEntry';
import ContactService from '../../ContactList/ContactService';
import * as PubSub from 'pubsub-js';
import {CONTACT_ADD} from '../../shared/PubSubEvents';
export interface AddFormProps{
    firstName: string;
    lastName: string;
    email: string;
}

export interface FormProps{
    close: () => void;
}
export default class AddForm extends React.Component <FormProps> {
    state: AddFormProps;
    
    constructor(props: FormProps){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
    }

    handleInputChange = (event: any) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        });
      }
    
    save = () => {
         let formEntry: IContact = {
             firstName: this.state.firstName,
             company: '',
             email: this.state.email,
             lastName: this.state.lastName,
             phoneNumber: '',
             website: ''
         };

         ContactService.add(formEntry);
         // Raise an event that the list has been updated
         PubSub.publish(CONTACT_ADD, formEntry);
         this.props.close();
        }

    render() {
        return (
            <form onSubmit={this.save}>
                <div className="form-group">

                    <input
                        type="text"
                        value={this.state.firstName}
                        className="form-control"
                        id="firstName"
                        aria-describedby="firstName"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleInputChange}
                        />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        value={this.state.lastName}
                        className="form-control"
                        id="lastName"
                        aria-describedby="lastName"
                        name="lastName"
                        onChange={this.handleInputChange}
                        placeholder="Last Name" />

                </div>
                <div className="form-group">

                    <input
                        type="email"
                        value={this.state.email}
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="email"
                        onChange={this.handleInputChange}
                        placeholder="Email" />

                </div>
                <Button color="inverse" onClick={ this.save } >Add</Button>{' '}
                        <Button color="secondary" onClick={this.props.close} >Cancel</Button>
            </form>
        );
    }
}