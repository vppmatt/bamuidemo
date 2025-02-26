import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-access-records',
  standalone: true,
  imports: [NgFor],
  templateUrl: './access-records.component.html',
  styleUrl: './access-records.component.css'
})
export class AccessRecordsComponent implements OnInit {

  constructor(private dataService : DataService) {}

  accessRecords : AccessRecord[] = [];

  ngOnInit() {
      this.dataService.getAccessRecords("20250225")
          .subscribe(data => this.accessRecords = data)
  }


}
