import axios from 'axios';
import { IContactRepository, IContact } from '../interfaces/ContactEntry';

export default class ContactService {

    static data: Array<IContactRepository> = [];
    static getContacts() {

        return axios.get('./data/contacts.json');
    }

    static setContacts(data: Array<IContactRepository>) {
        ContactService.data = data;
    }

    static read() {
        return ContactService.data;
    }

    static add(contact: IContact) {
        // Get the First Index of the letter
        var indexLetter: string = contact.firstName.charAt(0);
        for (var index = 0; index < ContactService.data.length; index++) {
            var groupEntry: string = ContactService.data[index].group;
            if (indexLetter === groupEntry) {
                var contactEntries: Array<IContact> = ContactService.data[index].entries;
                contactEntries.push(contact);
                return true;
            }
        }

        // If we reach here it means contact group doesn't exists
        ContactService.data.push({
            entries: [contact],
            group: indexLetter
        });
        return true;
    }
}