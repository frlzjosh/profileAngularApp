import { Component, OnInit } from '@angular/core';
import { DataService} from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  isClicked: boolean = true
  user: Object;

  constructor(private data: DataService ) {
    this.data.getUsers()
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.user = data;
      console.log(this.user)
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
