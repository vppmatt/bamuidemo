import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {

  // userForm = new FormGroup(
  //   { id : new FormControl(''),
  //     firstname: new FormControl(''),
  //     surname: new FormControl('')
  //   }
  // );

  userForm! : FormGroup;

  userId = 0;

  constructor(private route: ActivatedRoute, private dataService: DataService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group( {
      id : '',
      firstname : ['', [Validators.required, Validators.minLength(4)]],
      surname : ['', [Validators.required, Validators.minLength(4)]],
    }
    

  )


    this.route.params.subscribe(params => {
      this.userId = +params['id'];
        this.dataService.getUser(this.userId).subscribe ( data => {
          console.log(data)
          this.userForm.patchValue({id : `${data.id}`, firstname : data.firstname, surname: data.surname})
        }
        ); 
    })
  }

  handleSubmit() {
    console.log(this.userForm);
  }
}
