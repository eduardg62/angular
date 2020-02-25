import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-model',
  templateUrl: './user-model.component.html',
  styleUrls: ['./user-model.component.css']
})
export class UserModelComponent implements OnInit {
   
    public id:number = 0;
    public username = "john_d";
    public email= "john.doe@gmail.com";
    public info= {
      firstName:"john",
      lastName: "doe",
      jobTitle: "Developer",
      avatar: "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png",
      phoneNumber: "01-234-343434"
    }

  constructor() {
   }

  ngOnInit(): void {
  }

}
