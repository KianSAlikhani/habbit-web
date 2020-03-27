import { Moment } from 'moment';

export class UserAccount {
    id: string;
    name: string;
    username: string;
    birthday: Moment;
    areaCode: string;
    phoneNumber: string;
    email: string;
}