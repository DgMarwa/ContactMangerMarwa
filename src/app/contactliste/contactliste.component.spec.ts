import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlisteComponent } from './contactliste.component';

describe('ContactlisteComponent', () => {
  let component: ContactlisteComponent;
  let fixture: ComponentFixture<ContactlisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactlisteComponent]
    });
    fixture = TestBed.createComponent(ContactlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
