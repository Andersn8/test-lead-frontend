import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Virement } from '../models/virement';

@Injectable({
  providedIn: 'root',
})
export class VirementService {
  url = 'http://localhost:3000/virement/';

  constructor(private http: HttpClient) {}
  getAllVirement() {
    return this.http.get<Virement[]>(this.url);
  }
  addVirement(v: any) {
    return this.http.post(this.url, v);
  }
}
