import { Component } from '@angular/core';
import { UsersService } from './services/users.service'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$: Observable<any>
  constructor(private userService: UsersService) {

  }
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.users$ = this.userService.getUsers();
  }
}
