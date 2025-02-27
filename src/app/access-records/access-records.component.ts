import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';
import  {AgGridAngular} from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

//TO DO - REVIEW 

import { ModuleRegistry } from 'ag-grid-community'; 
import { ClientSideRowModelModule } from 'ag-grid-community'; 

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css'

@Component({
  selector: 'app-access-records',
  standalone: true,
  imports: [NgFor,AgGridAngular],
  templateUrl: './access-records.component.html',
  styleUrl: './access-records.component.css'
})
export class AccessRecordsComponent implements OnInit {

  columnDefs : ColDef[] = [
    {field : "id"},
    {field : "user", valueGetter : params => {
      return `${params.data.user.firstname} ${params.data.user.surname}`
    } },
    {field : "time"},
    {field : "building"},
    {field : "status", headerName: "direction",
      valueGetter : params => params.data.status ? "in" : "out"
    }
  ];

  constructor(private dataService : DataService) {}

  accessRecords : AccessRecord[] = [];

  ngOnInit() {
    ModuleRegistry.registerModules([ ClientSideRowModelModule ]); 
      this.dataService.getAccessRecords("20250225")
          .subscribe(data => this.accessRecords = data)
  }


}
