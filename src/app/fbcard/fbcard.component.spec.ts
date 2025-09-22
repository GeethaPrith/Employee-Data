import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from '../models/card';
import { FbcardComponent } from './fbcard.component';
import { CardService } from '../services/card.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

fdescribe('FbcardComponent', () => {
  let component: FbcardComponent;
  let fixture: ComponentFixture<FbcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers:[CardService,HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment likes when like() is called', () => {
    const card: Card  = {
      likes:0,
      id: 0,
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      image: '',
    }; 
    component.like(card); 
    expect(card.likes).toBe(1);
  });
});
