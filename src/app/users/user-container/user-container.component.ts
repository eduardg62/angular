import { Component, OnInit } from '@angular/core';
import { UserModelComponent } from 'src/app/models/user-model/user-model.component';


@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  currentUser: UserModelComponent;
  users: UserModelComponent[] = new Array;

  constructor() { }

  ngOnInit(): void {

    this.users = [
    //  new UserModelComponent ({id: 0, username: "string", email: string})
    ]

    this.currentUser = new UserModelComponent();
    this.currentUser.email = "mail@mail.com";

    console.log("User Container Init");
  }

  onIDClick(value) {
    this.currentUser.id = value;
  }

}
