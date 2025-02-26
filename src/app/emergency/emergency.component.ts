import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [NgFor],
  templateUrl: './emergency.component.html',
  styleUrl: './emergency.component.css'
})
export class EmergencyComponent implements OnInit {

  constructor(private dataService : DataService) {}

  accessRecords : Array<AccessRecord> = [];

  ngOnInit(): void {
      this.dataService.whoIsInTheBuildingNow("Adel Square")
        .subscribe(data => {

          const lastRecForEachUser = new Map<number, AccessRecord>();
          data.forEach( it => lastRecForEachUser.set(it.user.id, it));
          this.accessRecords = Array.from( lastRecForEachUser.values())
          .filter(it => it.status === true)

        })
  }


}
