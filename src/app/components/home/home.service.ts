import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class homeServices {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }


}
