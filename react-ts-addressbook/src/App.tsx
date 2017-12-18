import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ContactList from './modules/ContactList/ContactList';
import ContactSearch from './modules/ContactSearch/ContactSearch';
import ContentView from './modules/ContentView/ContentView';
import ContactAdd from './modules/ContactAdd/ContactAdd';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="contactApplication" className="container">
          <div className="contact-grid row">
            <div className="left-pane col-md-4">
              
              <ContactAdd />
              <ContactSearch />
              <ContactList />
            
            </div>
            <div className="right-pane col-md-8">
              <div className="contact-header">
                <div className="content-header">
                  <a href="" className="float-left">Edit</a>
                  <a href="" className="float-right">Close</a>
                  <div className="kill-float"/>
                </div>

              </div>
              <div className="contact-info-center col-md-12">
               <ContentView />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
