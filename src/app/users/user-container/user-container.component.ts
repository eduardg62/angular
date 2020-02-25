import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model/user-model';



@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  currentUser: UserModel;
  users: UserModel[];

  constructor() { }

  ngOnInit(): void { 

    this.users = [
      new UserModel (0, "A", "A@A.com"),
      new UserModel (1, "B", "B@B.com"),
      new UserModel (2, "C", "C@C.com"),
      new UserModel (3, "D", "D@D.com"),
      new UserModel (4, "I", "I@I.com"),
    ]
  }

  onIDClick(value) {
    this.currentUser.id = value;
  }

}
