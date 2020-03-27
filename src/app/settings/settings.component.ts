import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { UserAccount } from '../shared/models/userAccount.model';
import { FormatUtils } from '../shared/utils/format.utils';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public userAccount: UserAccount;
  public parsePhoneNumber = FormatUtils.parsePhoneNumber;

  constructor(
    private accountService: AccountService
  ) {

  }

  ngOnInit(): void {
    this.accountService.getUserAccount().subscribe({
      next: (userAccount) => {
        this.userAccount = userAccount;
        console.log(this.userAccount)
      }
    })
  }

}
