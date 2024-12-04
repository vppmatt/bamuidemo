import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSortComponent } from './user-sort.component';

describe('UserSortComponent', () => {
  let component: UserSortComponent;
  let fixture: ComponentFixture<UserSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first name sort should change the value of sortType to 2', () => {
      //click on the button
      const button : HTMLElement = fixture.debugElement
          .query( x => x.nativeElement.textContent === "sort by first name").nativeElement;
      button.click();
      fixture.detectChanges();    
      //expect the sortType = 2
      expect(component.sortType).toEqual(2);
  });

  it('first name sort should call handleChange with a parameter of 2', () => {
    //click on the button
    const button : HTMLElement = fixture.debugElement
        .query( x => x.nativeElement.textContent === "sort by first name").nativeElement;
    spyOn(component, 'handleClick').and.callThrough();
    button.click();
    fixture.detectChanges();    
    //expect the sortType = 2
    expect(component.handleClick).toHaveBeenCalledWith(2);
});

it('first name sort should fire the event with a value of 2', () => {
  //click on the button
  const button : HTMLElement = fixture.debugElement
      .query( x => x.nativeElement.textContent === "sort by first name").nativeElement;
  let result = -1;
  let errorOcurred = false;
  // component.sortEvent.subscribe( { next : data => result = data,
  //   error : error => errorOcurred = true
  // });
  component.sortEvent.subscribe( data => result = data );
      
  button.click();
  fixture.detectChanges();    
  //expect the sortType = 2
  expect(result).toEqual(2);
});

  
});
