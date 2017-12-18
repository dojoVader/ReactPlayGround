import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ContactList from './modules/ContactList/ContactList';
import ContactSearch from './modules/ContactSearch/ContactSearch';
import ContentView from './modules/ContentView/ContentView';
import ContactAdd from './modules/ContactAdd/ContactAdd';
import ContactHeader from './modules/ContactHeader/ContactHeader';

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
              <ContactHeader title="Address Book" />
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
