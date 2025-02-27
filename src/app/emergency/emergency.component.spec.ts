import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyComponent } from './emergency.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { inject } from '@angular/core';

describe('EmergencyComponent', () => {
  let component: EmergencyComponent;
  let fixture: ComponentFixture<EmergencyComponent>;
  let httpController : HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyComponent);

    httpController = TestBed.inject(HttpTestingController);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('buildings list is populated correctly', ()=> {
     
    //mock the call to the server
    httpController.expectOne("https://someServer.com/api/building")
    .flush([
      {id : 1, name : "First building"},
      {id : 2, name : "Second building"}
    ])

    //check the buildings array contains the expected data
    fixture.detectChanges();

    expect(component.buildings.length).toEqual(2);
  })
});
