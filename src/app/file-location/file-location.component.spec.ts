import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileLocationComponent } from './file-location.component';

describe('FileLocationComponent', () => {
  let component: FileLocationComponent;
  let fixture: ComponentFixture<FileLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
