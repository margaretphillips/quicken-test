import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  @Input() user_list
  @Input() user_fund

  user_stats: any

  constructor() { }


  ngOnInit() {
    this.user_stats = this.user_fund.users.filter((i) => i.user == this.user_list.user)
  }

}
