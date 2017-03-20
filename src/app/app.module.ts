import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserRequestDetailsComponent} from './ManageAPIKey/user-request-details.component';
import { NewRequestsComponentComponent } from './new-requests-component/new-requests-component.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRequestDetailsComponent,
    NewRequestsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
