import { Component, OnInit } from '@angular/core';
import { AccessRecord } from '../../model/AccessRecord';
import { DataService } from '../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-who-is-in-the-building',
  standalone: true,
  imports: [NgFor],
  templateUrl: './who-is-in-the-building.component.html',
  styleUrl: './who-is-in-the-building.component.css'
})
export class WhoIsInTheBuildingComponent implements OnInit {

  accessRecords : AccessRecord[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.whoIsInTheBuilding("Adel Square")
      .subscribe( data => {
        const map = new Map<string, AccessRecord>();
        data.forEach( record => {
          map.set(record.user, record);
        })
        this.accessRecords = Array.from(map.values()).filter(record => record.status = true)} );
  }
}