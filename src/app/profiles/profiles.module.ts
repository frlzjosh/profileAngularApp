import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { ProfilesRoutingModule} from './profiles-routing.modules'
import { ProfilePageComponent } from './../profile-page/profile-page.component'
import { ProfilesComponent } from './profiles.component';

@NgModule({
  declarations: [
    ProfilesComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    ProfilesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProfilesRoutingModule]
})
export class ProfileModule { }
