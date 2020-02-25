import { Component, OnInit } from '@angular/core';
import { UserModelComponent } from 'src/app/models/user-model/user-model.component';


@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  currentUser: UserModelComponent;
  users: Array<UserModelComponent> = [];

  constructor() { }

  ngOnInit(): void { 

    this.users = [
      new UserModelComponent (0, "A", "A@A.com"),
      new UserModelComponent (1, "B", "B@B.com"),
      new UserModelComponent (2, "C", "C@C.com"),
      new UserModelComponent (3, "D", "D@D.com"),
      new UserModelComponent (4, "I", "I@I.com"),
    ]

    console.log("User Container Init");
  }

  onIDClick(value) {
    this.currentUser.id = value;
  }

}
