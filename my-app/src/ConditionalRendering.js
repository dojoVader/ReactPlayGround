import React from 'react';

export class ConditionalRendering extends React.Component {

    message = (age) => {
        if(isNaN(age)){
            return null;
        }
        return age <= 15 ? "Not Old Enough" : "Old Enough";
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Old enough to enter the Danger Zone ?</p>
                <h4>{this.message(this.props.age)}</h4>
            </div>
        );
    }

}