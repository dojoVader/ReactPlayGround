import * as React from 'react';
import { IContact } from '../../interfaces/ContactEntry';
import { Button } from 'reactstrap';

interface IEditFormState {
    contact: IContact;
}

export default class EditForm extends React.Component {
    state:IEditFormState ={
        contact:{
            
        }
    }
    handleInputChange = (event: any) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.props.contact[name] = value;
    }

    save = () => {
        //Save the Form Details to the Form
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.save} className="form-edit" method="POST">
                    <div className="form-group">

                        <input
                            type="text"
                            value={this.props.contact.firstName}
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
                            value={this.props.contact.lastName}
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
                            value={this.props.contact.email}
                            className="form-control"
                            id="email"
                            name="email"
                            aria-describedby="email"
                            onChange={this.handleInputChange}
                            placeholder="Email" />

                    </div>
                    <div className="form-group">

                        <input
                            type="url"
                            value={this.props.contact.website}
                            className="form-control"
                            id="website"
                            name="website"
                            aria-describedby="website"
                            onChange={this.handleInputChange}
                            placeholder="Website" />

                    </div>
                    <div className="form-group">

                        <input
                            type="text"
                            value={this.props.contact.company}
                            className="form-control"
                            id="company"
                            name="company"
                            aria-describedby="company"
                            onChange={this.handleInputChange}
                            placeholder="Company" />

                    </div>


                    <Button color="inverse">Update</Button>{' '}
                    <Button color="secondary">Cancel</Button>
                </form>
            </div>
        )
    }
}