import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StringTruncate } from '../pipes/truncate.pipe';
import { CommentsService, SearchData } from '../services/comments.service';
import { Observable, of } from 'rxjs';



describe('Integration::AppComponent', () => {
  
  it('should test header display original title', () => {
    const {fixture} = setup();
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('Search Items');
  });

  it('form should be valid', () => {
    const {comp,fixture} = setup();
    comp.myForm.controls['continent'].setValue('somedata');
    expect(comp.myForm.valid).toBeTruthy();
  });

  it('should test onSubmit function', () => {
    const {comp,fixture,testBedService,data} = setup();
    comp.onSubmit({continent:"somedatayouhavetosearch"});
    fixture.detectChanges();
    expect(comp.searchResult).toBe(data);
  });

  it('should search with less than three character function', () => {
    const {comp,fixture,testBedService,data} = setup();
    comp.onSubmit({continent:"so"});
    fixture.detectChanges();
    expect(comp.errorMessage).toBe('Please enter search text more than 3 characters')
  });
});

function setup() {
  let testBedService: Partial<CommentsService>;
  const data = [{
    email:"kshore@gmail.com",
    name:"kishore",
    body:"somedataaftersearchbyuser"
  }];
    testBedService = {
      getContacts:() => {
        return of(data)
      }
    }
  TestBed.configureTestingModule({
    declarations: [SearchComponent,StringTruncate],
    imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
    providers: [{ provide: CommentsService, useValue: testBedService }]
  }).compileComponents();

  const fixture = TestBed.createComponent(SearchComponent);

  const comp = fixture.componentInstance;
  comp.ngOnInit();
  testBedService = TestBed.get(CommentsService);
  const de = fixture.debugElement;
  const el = de.nativeElement;

  return { comp, fixture, de, el, testBedService,data };
}
