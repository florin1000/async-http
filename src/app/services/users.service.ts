import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com/';
  private url = 'users'

  private users$ = this.http.get<ApiResponse<User>>(`${this.baseUrl}${this.url}`)

  getUsers() {
    return this.users$;
  }
}
