import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';


  getUsers(): Observable<User[]> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }

  postUsers(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  updateUsers(userId: number , user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${userId}`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${userId}`);
  }
}
