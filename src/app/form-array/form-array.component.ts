import { Component, OnInit } from '@angular/core';

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
        password:new FormControl(''),
        nom:new FormControl(''),
      });

    }


        submit () : void {
          //this.form.reset();
          console.log(this.form.valid);
        }
}
