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
      nom1:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')
    });
    this.form.addControl('nom', new FormControl(''));
   this.form.removeControl('nom1');
   /* this.form.patchValue({
      email:'mouldha@gmail.com',
    });*/
    this.form.setValue({
          nom:'Hamma',
          email:'mould@gmail.com',
          password:'xxxx',
     });
  }
  submit () : void {
  this.form.reset();
  console.log(this.form);
  }
}
