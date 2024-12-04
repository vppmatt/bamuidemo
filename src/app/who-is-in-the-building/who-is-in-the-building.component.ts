import { Component, OnInit } from '@angular/core';
import { AccessRecord } from '../../model/AccessRecord';
import { DataService } from '../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { BuildingSelectorComponent } from '../building-selector/building-selector.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-who-is-in-the-building',
  standalone: true,
  imports: [NgFor, BuildingSelectorComponent, NgIf],
  templateUrl: './who-is-in-the-building.component.html',
  styleUrl: './who-is-in-the-building.component.css'
})
export class WhoIsInTheBuildingComponent implements OnInit {

  accessRecords : AccessRecord[] = [];

  constructor(private dataService: DataService, private route : ActivatedRoute) {}

  updateData(buildingName : string) {
    this.dataService.whoIsInTheBuilding(buildingName)
      .subscribe( data => {
        const map = new Map<string, AccessRecord>();
        data.forEach( record => {
          map.set(record.user, record);
        })
        this.accessRecords = Array.from(map.values()).filter(record => record.status === true)} );
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => this.updateData(params['building']));
  }
}
