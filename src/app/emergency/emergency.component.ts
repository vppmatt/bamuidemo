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

  loadDataFromServer() {
    console.log("getting data from server");
    this.dataService.getBuildings().subscribe(
      data => {this.buildings = data,
        localStorage.setItem("buildings", JSON.stringify(this.buildings));
        localStorage.setItem("buildings-last-fetch", new Date().toISOString())
      }
    )
  }

  loadDataFromStorage() {
    console.log("getting data from storage");
    const data = "" + localStorage.getItem("buildings");
    console.log(data);
    this.buildings = JSON.parse(data);
  }

  ngOnInit(): void {

    const blf = localStorage.getItem("buildings-last-fetch");
    if (blf != null) {
      const current = new Date();
      const storageTime = new Date(blf);
      const seconds = (current.getTime() - storageTime.getTime()) / 1000;
      if (seconds < 120) {
        console.log("data last fetched less than 2 mins ago");
        this.loadDataFromStorage();
      }
      else {
        console.log("data last fetched more than 2 mins ago");
        this.loadDataFromServer();
      }
    }
    else {
      console.log("no data in local storage");
      this.loadDataFromServer();
    }

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
