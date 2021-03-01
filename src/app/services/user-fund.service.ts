import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserFundService {
  constructor(private http: HttpClient) { }

  getUserExpenses() {
    return this.http.get('http://localhost:3000/user_expense')
  }
  getUserFund() {
    return this.http.get('http://localhost:3000/fund')
  }
  createUser(user) {
    return this.http.post('http://localhost:3000/user_expense', user)
  }

}

