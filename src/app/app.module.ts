import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './users/user-container/user-container.component';
import { UserModelComponent } from './models/user-model/user-model.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserModelComponent
  ],
  imports: [
      BrowserModule,
      FormsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
