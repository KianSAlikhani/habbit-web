import { Injectable } from '@angular/core';
import { UserAccount } from '../models/userAccount.model';
import * as moment from 'moment';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _userAccount: UserAccount = {
    id: 'testId',
    name: 'Test User',
    username: 'TestUser',
    birthday: moment('01/01/2020', 'MM/DD/YYYY'),
    email: 'testuser@example.com',
    areaCode: '1',
    phoneNumber: '1234567890'
  }

  constructor() { }

  getUserAccount(): Observable<UserAccount> {
    return of(this._userAccount);
  }
}
