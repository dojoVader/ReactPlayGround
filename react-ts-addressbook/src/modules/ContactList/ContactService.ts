import axios from 'axios';

export default class ContactService {
    
    static getContacts() {
     return axios.get('./data/contacts.json');
    }
}