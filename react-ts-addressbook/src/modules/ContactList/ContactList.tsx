import * as React from 'react';
const logo = require('../../logo.svg');



export default class ContactList extends React.Component {
    render() {
        return        <div>
        <div className="contact-listing col-md-12 kill-padding">
            {/* Holds the Contact Lists per Alphabets */}
            <div className="contact-letter-group kill-padding col-md-12">
                <div className="contact-letter-alphabet col-md-12">
                    A
          </div>
                <div className="contact-letter-items col-md-12">
                    <div className="contact-letter-entity col-md-12">
                        <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                        <span className="contact-letter-entity-name float-left">
                            Alexander Alex
              </span>
                    </div>

                    <div className="contact-letter-entity col-md-12">
                        <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                        <span className="contact-letter-entity-name float-left">
                            Aderemi Okeowo
          </span>
                    </div>
                    <div className="contact-letter-entity col-md-12">
                        <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                        <span className="contact-letter-entity-name float-left">
                            Aderemi Okeowo
          </span>
                    </div>
                    <div className="contact-letter-entity col-md-12">
                        <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                        <span className="contact-letter-entity-name float-left">
                            Aderemi Okeowo
          </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-listing col-md-12 kill-padding">
                {/* Holds the Contact Lists per Alphabets */}
                <div className="contact-letter-group kill-padding col-md-12">
                  <div className="contact-letter-alphabet col-md-12">
                    B
                  </div>
                  <div className="contact-letter-items col-md-12">
                    <div className="contact-letter-entity col-md-12">
                      <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                      <span className="contact-letter-entity-name float-left">
                        Blexander Alex
                      </span>
                    </div>

                    <div className="contact-letter-entity col-md-12">
                      <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                      <span className="contact-letter-entity-name float-left">
                        Bderemi Okeowo
                  </span>
                    </div>
                    <div className="contact-letter-entity col-md-12">
                      <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                      <span className="contact-letter-entity-name float-left">
                        Bderemi Okeowo
                  </span>
                    </div>
                    <div className="contact-letter-entity col-md-12">
                      <img src={logo} className="rounded mx-auto d-block float-left" alt="..." />
                      <span className="contact-letter-entity-name float-left">
                        Bderemi Okeowo
                  </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    }
}

