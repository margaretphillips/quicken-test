import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserFundService } from '../../services/user-fund.service'
import { User, Expense, UserFund, Fund, ExpenseCategories } from './types'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users_list: any = ''
  user_fund: any = ''
  add_user_show: false

  constructor(private userFundService: UserFundService) {
  }

  getUserExpenses = () => {
    this.userFundService.getUserExpenses()
      .subscribe((data) => {
        this.users_list = data;
      })
  }

  getUserFund = () => {
    this.userFundService.getUserFund()
      .subscribe((data) => {
        this.user_fund = data;
      })
  }

  ngOnInit() {
    this.getUserExpenses()
    this.getUserFund()
  }

}
