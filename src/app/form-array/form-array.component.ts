import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

   public form:FormGroup;
   public cities = [
   {label:'Paris',value:'paris'},
   {label:'Lyon',value:'lyon'}];
    constructor( private fb:FormBuilder){
    }
    ngOnInit():void {
    this.form=this.fb.group({
            email:['', Validators.required],
            hobbies : this.fb.array([]),
            password:[''],
            nom:[''],
            gender:[''],
            city:[''],
            majeur:['']
    });
    /*this.form.valueChanges.subscribe((value)=>{
    console.log(value);
    });
    this.form.statusChanges.subscribe((statut)=>{
        console.log(statut);
        });*/
      /*this.form = new FormGroup({
        email:new FormControl(''),
        hobbies : new FormArray([new FormControl('')]),
        password:new FormControl(''),
        nom:new FormControl(''),
      });*/

    }


        submit () : void {
          //this.form.reset();
          console.log(this.form.valid);
        }
        get hobbies () {
          return this.form.get('hobbies') as FormArray;
        }
        addHobby () {
        const control = new FormControl('');
        control.valueChanges.subscribe((value)=>{
            console.log(value);
            });
          this.hobbies.push(control);
        }
        valider () {
                 console.log(this.form);
                }
}
