import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPostTableModel } from '../models/job-post-table.model';

@Injectable({ providedIn: 'root' })
export class JobPostTableService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<JobPostTableModel[]> {
    return this._httpClient.get<JobPostTableModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags'
    );
  }
}
