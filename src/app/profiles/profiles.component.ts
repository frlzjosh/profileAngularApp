import { Component, OnInit } from '@angular/core';
import { DataService} from './../data.service';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})

export class ProfilesComponent implements OnInit {
  profileData: Object

  constructor(private data: DataService) {
    this.data.getUsers()
   }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.profileData = data
      console.log(this.profileData)
    })
  }

}
