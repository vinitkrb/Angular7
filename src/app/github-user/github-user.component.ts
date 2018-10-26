import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})

export class GithubUserComponent implements OnInit {

  users: User[] = [];
  followers: any;
  search: Subject<string> = new Subject<string>();
  selectedUser: User = new User();
  loadingFollowers: boolean = false;

  constructor(private userService: UserService) {
    this.search.pipe(
      debounceTime(250)
    ).subscribe((searchTerm) => {
      // call to user service and search by query
      this.userService.search(searchTerm).subscribe(res => {
        this.users = res.items as User[];
      });
    })
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    }, error => {
      console.log(error);
    });
  }

  onSearch(q: string) {
    if (q !== "") {
      this.search.next(q);
    } else {
      alert("User not found.")
    }
  }

  viewUser(user: User) {
    this.selectedUser = user;
    this.userService.getUserFollowers(user.login).subscribe(res => {
      this.selectedUser.followers = res as User[];
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
}
