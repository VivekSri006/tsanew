import { Component, OnInit } from '@angular/core';
import Keyboard from "simple-keyboard";
import 'simple-keyboard/build/css/index.css';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showhide:boolean = false;
  keyboard!: Keyboard;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      // onChange: input  => this.onChange(input),
      // onKeyPress: button => this.onKeyPress(button)
    });
  }

  
  showKeyboard(){
    console.log("jhfvuhfvi")
    this.showhide = !this.showhide;
    if(this.showhide){
      let keyboard = document.getElementById("keyboard")
      console.log("keyboard in if",keyboard)
      if(keyboard){
        keyboard.style.display = "block";
      }
    }else{
      let keyboard = document.getElementById("keyboard")
      console.log("keyboard in else",keyboard)
      if(keyboard){
        keyboard.style.display = "none";
      }
    }
    
  }

  // showKeyboard(){
  //   this.showhide = !this.showhide;
  //   if(this.showhide){
  //     document.getElementById("keyboard").style.display = "block";
  //   }else{
  //     document.getElementById("keyboard").style.display = "none";
  //   }
    
  // }
}
