import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user_list
  @Input() user_fund

  user_stats: any

  constructor() { }

  ngOnInit() {
    this.user_stats = this.user_fund.users.filter((i) => i.user == this.user_list.user)
  }

}
