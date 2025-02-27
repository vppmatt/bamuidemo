import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from '../../model/Building';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [NgFor],
  templateUrl: './emergency.component.html',
  styleUrl: './emergency.component.css'
})
export class EmergencyComponent implements OnInit {

  constructor(private dataService : DataService, private route: ActivatedRoute,
      private router : Router
  ) {}

  accessRecords : Array<AccessRecord> = [];

  building = "";

  buildings : Building[] = [];

  ngOnInit(): void {
    this.dataService.getBuildings().subscribe(
      data => this.buildings = data
    )

    this.route.params.subscribe( params => {
      this.building = params["building"];
      if (this.building != null) 
         this.loadData();
    })
      
  }

  handleChangeBuilding(event : Event) {
      const selectElement : HTMLSelectElement = event.target as HTMLSelectElement;
      const selectedBuilding = selectElement.value;
      this.router.navigate(["/emergency", selectedBuilding])
  }

  loadData() {
    this.dataService.whoIsInTheBuildingNow(this.building)
        .subscribe(data => {

          const lastRecForEachUser = new Map<number, AccessRecord>();
          data.forEach( it => lastRecForEachUser.set(it.user.id, it));
          this.accessRecords = Array.from( lastRecForEachUser.values())
          .filter(it => it.status === true)

        })
  }


}
