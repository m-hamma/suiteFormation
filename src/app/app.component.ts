import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public form:FormGroup;
  ngOnInit():void {
    this.form = new FormGroup({
      nom:new FormControl(''),
      email:new FormControl(''),
      passwoed:new FormControl('')
    });
  }
  submit () : void {
  console.log(this.form);
  }
}
