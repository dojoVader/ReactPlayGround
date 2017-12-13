import * as React from "react";
import * as ReactDOM from "react-dom";
import { Person } from "./components/Person";


ReactDOM.render(
    <Person age={24} description="I am a Software Engineer at Interswitch" name="Okeowo Aderemi" />,
     document.getElementById("example")   
);