import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, DoCheck } from '@angular/core';
import { Section, PageType } from '../section';
import { MessageType, SimpleMessage } from '../../../common/messaging/messaging.component';
import { MatDialog } from '@angular/material/dialog';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-save-report',
  templateUrl: './save-report.component.html',
  styleUrls: ['./save-report.component.scss']
})
export class SaveReportComponent implements OnInit, DoCheck {

  @Input()
  sections: Section[];

  @Input()
  portraitOrientation: boolean;

  @Input()
  pageType: PageType;

  @Output()
  message = new EventEmitter<SimpleMessage>();

  reportSaveEnabled = true;

  constructor(public dialog: MatDialog, private service: ReportService) { }

  ngDoCheck() {
    this.checkIfReportCanBeSaved();
  }

  ngOnInit(): void {
  }

  save(dialogTemplate: TemplateRef<any>) {
    if (!this.reportSaveEnabled) {
      this.showMessage(MessageType.ERROR, 'Report Has Errors');
      return;
    }
    this.sections.forEach(section => {
      console.log(JSON.stringify(section.dashboard));
    });
    const dialogRef = this.dialog.open(dialogTemplate);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if( result === 'yes') {
        this.saveReort();
      } else{
        this.showMessage(MessageType.INFORM, 'Report Not Saved');
      }
    });
  

  }


  checkIfReportCanBeSaved(){
    this.reportSaveEnabled = true;
    for (let index = 0; index < this.sections.length; index++) {
      const element = this.sections[index];
      if (element.hasLayoutError){
        this.reportSaveEnabled = false;
        return this.reportSaveEnabled;
      }
      
    }
    return this.reportSaveEnabled;
  }

  showMessage(type: MessageType, msg: string) {
    const message = new SimpleMessage();
    message.messageDesc = msg;
    message.messageType = type;
    this.message.emit(message)
  }

  saveReort() {
    this.service.saveReport().subscribe(
      (returnMsg) => {
        this.showMessage(MessageType.CONFIRM, 'Saved Successfully');
      },
      (err) => {
        this.showMessage(MessageType.ERROR, 'Could Not Save Report');
      }
    );
  }

}
