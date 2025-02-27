import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {

  userForm = new FormGroup({
    id : new FormControl(0),
    firstname : new FormControl('',[Validators.minLength(2)]),
    surname: new FormControl('', [Validators.required] )
  });

  constructor(private route : ActivatedRoute, private dataService : DataService)
  {}

  userId = 0;

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.userId = +params["id"];
      this.dataService.getUser(this.userId).subscribe( user => {
          this.userForm.patchValue({id : user.id, firstname : user.firstname, 
            surname : user.surname})
      });
    })
  }

  handleSubmit() {  
    console.log(this.userForm.value);
  }

}
