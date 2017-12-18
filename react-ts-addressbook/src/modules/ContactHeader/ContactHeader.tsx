import * as React from 'react';

interface IContactHeaderProps {
    title?: string;
}

export default class ContactHeader extends React.Component <IContactHeaderProps> {
   
    render() {
        return (
            <div className="contact-header">
                <div className="content-header">
                    <span className="float-left">{this.props.title}</span>
                    
                    <div className="kill-float" />
                </div>

            </div>
        );
    }
}