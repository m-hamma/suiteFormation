import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

   public form:FormGroup;
    ngOnInit():void {
      this.form = new FormGroup({
        email:new FormControl(''),
        hobbies : new FormArray([new FormControl('')]),
        password:new FormControl(''),
        nom:new FormControl(''),
      });

    }


        submit () : void {
          //this.form.reset();
          console.log(this.form.valid);
        }
        get hobbies () {
          return this.form.get('hobbies') as FormArray;
        }
        addHobby () {
          this.hobbies.push(new FormControl(''));
        }
        valider () {
                 console.log(this.form);
                }
}
