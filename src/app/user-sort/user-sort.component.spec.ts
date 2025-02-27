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

  it("sort type is set to 3 when user clicks on surname button", () =>{
      const button : HTMLElement = fixture.debugElement.
          query( e => e.nativeElement.textContent === "sort by surname").nativeElement;
      button.click();
      fixture.detectChanges();
      expect(component.sortType).toEqual(3);
  } );
});
