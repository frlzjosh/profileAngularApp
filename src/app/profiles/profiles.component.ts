import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})

export class ProfilesComponent implements OnInit {
  @Input('profile') profile: any
  constructor() {  
  }

  ngOnInit() {
  }

}
