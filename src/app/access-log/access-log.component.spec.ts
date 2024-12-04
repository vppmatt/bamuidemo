import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLogComponent } from './access-log.component';
import { provideHttpClient } from '@angular/common/http';
import { AccessRecord } from '../../model/AccessRecord';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';

describe('AccessLogComponent', () => {
  let component: AccessLogComponent;
  let fixture: ComponentFixture<AccessLogComponent>;

  const dummyData : Array<AccessRecord> = [
    {id: 1, user: 'test1' , time: '20241114', building: 'test1', status: true},
    {id: 2, user: 'test2', time: '20241114', building: 'test2', status: true},
    {id: 3, user: 'test3', time: '20241114', building: 'test3', status: true},
  ];

  beforeEach(async () => {

    const fakeGetAccessRecords = (param : string) : Observable<AccessRecord[]> => {
      return of(dummyData);
    }

    const mockDataService = jasmine.createSpyObj('DataService', ['getAccessRecords']);

    mockDataService.getAccessRecords.and.callFake(fakeGetAccessRecords);

    const mockDataServiceProvider = {provide: DataService, useValue: mockDataService};

    await TestBed.configureTestingModule({
      imports: [AccessLogComponent],
      providers : [provideHttpClient(), mockDataServiceProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('check data is loaded correctly when component starts', () => {
    expect(component.accessRecords.length).toEqual(3);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
