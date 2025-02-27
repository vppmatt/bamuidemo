import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRecordsComponent } from './access-records.component';
import { provideHttpClient } from '@angular/common/http';
import { AccessRecord } from '../../model/AccessRecord';
import { of } from 'rxjs';
import { DataService } from '../data.service';

describe('AccessRecordsComponent', () => {
  let component: AccessRecordsComponent;
  let fixture: ComponentFixture<AccessRecordsComponent>;

  const dummyData : AccessRecord[] = [
    {id : 1, user : {id : 11, firstname: "jo", surname: "blogs"}, time : "", building : "", status : true},
    {id : 2, user : {id : 11, firstname: "jo", surname: "blogs"}, time : "", building : "", status : true},
    {id : 3, user : {id : 11, firstname: "jo", surname: "blogs"}, time : "", building : "", status : true}
  ]; 

  beforeEach(async () => {

    const mockDataService = jasmine.createSpyObj('DataService', ['getAccessRecords']);
    mockDataService.getAccessRecords.and.callFake( () => of(dummyData));


    await TestBed.configureTestingModule({
      imports: [AccessRecordsComponent],
      providers: [provideHttpClient(), {provide : DataService, useValue : mockDataService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check loaded data is stored in array', () => {
    expect(component.accessRecords.length).toEqual(3);
  })
});
