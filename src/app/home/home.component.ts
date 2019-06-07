import { Component, OnInit } from '@angular/core';
import { DataService} from './../data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  isClicked: boolean = true
  profiles: Object

  constructor(private profileData: DataService) {
    this.profileData.getUsers()
  }

  ngOnInit() {
    this.profileData.getUsers().subscribe( data =>{
      this.profiles = data
      console.log(data)
    })
  }

  firstClick(){
    this.isButtonClicked()
  }
  isButtonClicked(){
    this.isClicked = !this.isClicked
    console.log(this.isClicked)
  }


}
