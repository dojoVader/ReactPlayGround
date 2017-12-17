import * as React from 'react';

export default class ContactSearch extends React.Component {
    render() {
        return <div className="contact-search col-md-12 kill-padding">
            <input type="text" placeholder="Search" className="form-control" />
        </div>
    }
}