import { Component } from '@angular/core';
import { UsersService } from './services/users.service'
import { Observable } from 'rxjs';
import { defaultIfEmpty, filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  users$: Observable<any>;
  bufferUsers$: Observable<any>;
  filter = false;
  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.users$ = this.userService.getUsers();
    this.bufferUsers$ = this.users$;
  }

  filterUsers() {
    //filter users, criteria starting letter C (case insensitive)
    const regex = /^c/i;
    this.filter ? this.users$ = this.bufferUsers$ : this.users$ = this.users$.pipe(map(user => user.filter(usr => usr.name.match(regex))));
    this.filter = !this.filter;
  }
}
