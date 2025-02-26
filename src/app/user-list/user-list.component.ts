import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../../model/User';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  constructor(private dataService : DataService) {}

  users : User[] = [];

  ngOnInit(): void {
    this.dataService.getUsers().subscribe( data => this.users = data); 
  }

}
