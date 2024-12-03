import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-access-log',
  standalone: true,
  imports: [NgFor],
  templateUrl: './access-log.component.html',
  styleUrl: './access-log.component.css'
})
export class AccessLogComponent implements OnInit {

  accessRecords : AccessRecord[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.getAccessRecords("20241203").subscribe( data => this.accessRecords = data );
  }


}
