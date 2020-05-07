import React from 'react';
class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }
    list = ["Instagram", "WhatsApp", "Oculus"];

    saveText = (e) => {
        e.preventDefault();
        this.setState({ text: e.target.value });
        e.target.value = "";
    }

    addText = () => {
        if(this.state.text !== ""){
            this.list.push(this.state.text);
            this.setState({ text: null }); /// Clear the state
        }

    }
    render() {
        return (
            < div className="shopping-list" >
                <h1>Shopping List for {this.props.name}</h1>
                <input type="text" placeholder="Enter text" onBlur={this.saveText} />
                <button onClick={this.addText}>Add Item</button>
                <ul>
                    {
                        this.list.map((item) => <li>{item}</li>)
                    }
                </ul>
            </div >
        )
    }
}

export default ShoppingList;