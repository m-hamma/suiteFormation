import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public form:FormGroup;
  ngOnInit():void {
    this.form = new FormGroup({
      nom:new FormControl('',[this.validatorPaul, Validators.required],this.validatorAsynch),
      email:new FormControl('',Validators.email),
      password:new FormControl('')
    });
    this.form.addControl('nom1', new FormControl('',this.validatorPaul));
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
   validatorPaul(formControl:FormControl):{[s:string]:boolean} {
             if (formControl.value === 'paul') {
               return {notPaul:true};
             } else {
               return null;
             }
   }
   validatorAsynch(formControl:FormControl):Promise<{[s:string]:boolean} | null>{
          return new Promise((resolve, reject) =>
          {
            setTimeout(()=> {
              resolve(null);
            },5000);
          }
          )

      }
      submit () : void {
        //this.form.reset();
        console.log(this.form.valid);
      }
}
