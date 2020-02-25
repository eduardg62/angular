import { Component, OnInit } from '@angular/core';
import { UserModelComponent } from 'src/app/models/user-model/user-model.component';


@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  currentUser: UserModelComponent;

  constructor() { }

  ngOnInit(): void {

    this.currentUser = new UserModelComponent();
    this.currentUser.email = "mail@mail.com";

    console.log("User Container Init");
  }

  onIDClick(value) {
    this.currentUser.id = value;
  }

}
