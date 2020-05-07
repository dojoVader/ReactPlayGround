import React from 'react';
class ShoppingList extends React.Component {

    list = ["Instagram","WhatsApp","Oculus"];
    render() {
        return (
            < div className="shopping-list" >
                <h1>Shopping List for {this.props.name}</h1>
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