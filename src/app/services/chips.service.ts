import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChipsModel } from '../models/chips.model';

@Injectable({ providedIn: 'root' })
export class ChipsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ChipsModel[]> {
    return this._httpClient.get<ChipsModel[]>(
      'https://api2.binance.com/api/v3/ticker/24hr'
    );
  }
}
