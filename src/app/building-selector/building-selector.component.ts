import { Component, OnInit } from '@angular/core';
import { Building } from '../../model/Building';
import { DataService } from '../services/data.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-building-selector',
  standalone: true,
  imports: [NgFor],
  templateUrl: './building-selector.component.html',
  styleUrl: './building-selector.component.css'
})
export class BuildingSelectorComponent implements OnInit {

  buildings : Building[] = [];
  currentBuilding : string = "";

  constructor(private dataService : DataService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
      this.dataService.getBuildings().subscribe(data => this.buildings = data);
      this.route.params.subscribe(params => this.currentBuilding = params['building']);
  }

  onChange(event : Event) {
    const building = (event.target as HTMLSelectElement).value;
    this.router.navigate(["emergency", building]);
  }

}
