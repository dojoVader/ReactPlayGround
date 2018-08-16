/**
 * @description This represent the Contact Entry
 */
export interface IContact {

    firstName: string;
    lastName: string;
    phoneNumber: string;
    website: string;
    company: string;
    email: string;
 

}

export interface IContactRepository {
    group: string;
    entries: Array< IContact >;
}

export interface IListContactRepository {
    contacts: Array< IContactRepository >
}