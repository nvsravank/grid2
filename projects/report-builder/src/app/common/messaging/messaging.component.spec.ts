import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EventEmitter,  SimpleChanges } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessagingComponent, MessageDisplayType, MessageType, SimpleMessage } from './messaging.component';
import { HttpClient } from '@angular/common/http';

describe('MessagingComponent', () => {
  let component: MessagingComponent;
  let fixture: ComponentFixture<MessagingComponent>;
  let matDialog: MatDialog;
  const change: SimpleChanges = {};

  const dialogMock = {
    open: () => {
      return {
        afterClosed: () => { return of(true); }
      };
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MessagingComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {}},
        { provide: MatDialog, useValue: dialogMock }
      ]
    })
    .compileComponents().then( () => {
      fixture = TestBed.createComponent(MessagingComponent);
      component = fixture.componentInstance;
      component.displayType = MessageDisplayType.INPAGE;
      component.hideAfterInterval = 1000;
      component.message = {
        messageType: MessageType.CONFIRM,
        messageDesc: 'Test Message'
      }
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
