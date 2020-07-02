import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Items} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems():Observable <Items[]>{
    return this.http.get<Items[]>('http://localhost:8000/api/items/');

    }
}
