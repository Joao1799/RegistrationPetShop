import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {
    private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }
  postRegisterUser(infoUser: any){
    return this.http.post<any[]>(`${this.apiUrl}/users`,infoUser)
  }

  postRegisterPet(infoPet: any, userID: any) {
    return this.http.post<any[]>(`${this.apiUrl}/pets`, { ...infoPet, userId: userID });
  }
}
