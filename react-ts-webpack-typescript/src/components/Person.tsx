import * as React from "react";
import { ComponentState } from "react";


export interface IPersonProps {
    name: String;
    age: number;
    description: String
}

//Component
export class Person extends React.Component<IPersonProps, {}>{
    constructor(props:IPersonProps){
        super(props);
        this.state={
            triggered:false
        }

        
    }

    greet =()=>{
        console.log(this.props);
        this.setState({
            triggered:true
        });
        console.log(this.state,this.props);
    }
    render() {
        return <div>
            Hi my name is {this.props.name}, I am {this.props.age} and this is all about me : {this.props.description}
            <br/>
            <button onClick={this.greet} >Say</button>
            {this.state.triggered && <h3>I have been triggered </h3>}
        </div>
    }
}
