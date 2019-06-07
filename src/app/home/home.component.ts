import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  isClicked: boolean = true

  constructor() {
  }

  ngOnInit() {

  }

  firstClick(){
    this.isButtonClicked()
  }
  isButtonClicked(){
    this.isClicked = !this.isClicked
    console.log(this.isClicked)
  }


}
