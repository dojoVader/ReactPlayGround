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

export default interface IContactRepository{
    contact:IContact
}