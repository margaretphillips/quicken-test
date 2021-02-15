import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { UserFundService } from '../../../../../services/user-fund.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() add_user

  addUserForm = this.formBuilder.group({
    user_name: '',
    food: '',
    travel: '',
    hotel: ''
  });

  createUser() {
    const form = this.addUserForm.value
    let expenses = []
    let expense_item = []

    if (parseInt(form.travel)) {
      expenses.push({ type: 'travel', amount: parseFloat(form.travel).toFixed(2) })
    }
    if (parseInt(form.food)) {
      expenses.push({ type: 'food', amount: parseFloat(form.food).toFixed(2) })
    }
    if (parseInt(form.hotel)) {
      expenses.push({ type: 'hotel', amount: parseFloat(form.hotel).toFixed(2) })
    }

    const user = {
      user: Math.floor((Math.random() * 1000) + 1),
      user_name: form.user_name,
      expenses
    }

    this.userFundService.createUser(user)
      .subscribe((data) => {
        window.location.reload()
      })


  }

  constructor(private userFundService: UserFundService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
