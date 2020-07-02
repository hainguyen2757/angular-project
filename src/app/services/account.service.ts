import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  insertAccount(acc:Account): Observable<Account> {
    return this.http.post<Account>('http://localhost:8000/api/insert', acc);
    }

}
