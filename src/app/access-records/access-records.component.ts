import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';
import  {AgGridAngular} from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';


import { ModuleRegistry } from 'ag-grid-community'; 
import { AllCommunityModule, themeBalham } from 'ag-grid-community'; 

@Component({
  selector: 'app-access-records',
  standalone: true,
  imports: [NgFor,AgGridAngular],
  templateUrl: './access-records.component.html',
  styleUrl: './access-records.component.css'
})
export class AccessRecordsComponent implements OnInit {

  gridTheme = themeBalham;

  columnDefs : ColDef[] = [
    {field : "id"},
    {field : "user", valueGetter : params => {
      return `${params.data.user.firstname} ${params.data.user.surname}`
    } },
    {field : "time"},
    {field : "building", filter: true},
    {field : "status", headerName: "direction",
      valueGetter : params => params.data.status ? "in" : "out"
    }
  ];

  constructor(private dataService : DataService) {}

  accessRecords : AccessRecord[] = [];

  ngOnInit() {
    ModuleRegistry.registerModules([ AllCommunityModule ]); 
      this.dataService.getAccessRecords("20250225")
          .subscribe(data => this.accessRecords = data)
  }


}
