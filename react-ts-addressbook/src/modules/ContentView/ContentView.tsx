import * as React from 'react';
const logo = require('../../logo.svg');

export default class  ContactView extends React.Component{
     render(){
         return  <div className="contact-view row">
         <div className="image col-md-4">
         <img src={logo} className="rounded mx-auto d-block " alt="..." />
         </div>
         <div className="contact-details col-md-8">
         <h3>Okeowo Aderemi</h3>
         <br/>
         <h5>Contact Information</h5>
             <hr/>
             
             <p>+2348162985504</p>
             <p>www.okeowoaderemi.com</p>
             <p>okeowoaderemi@gmail.com</p>
             <h5>Organization</h5>
             <hr/>
             <p>Interswitch Group Limited</p>
         </div>
       </div>
     }
}