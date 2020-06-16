import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Section, PageType } from '../section';
import { MessageType, Message } from '../../../utilities/common-classes';
import { MatDialog } from '@angular/material/dialog';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-save-report',
  templateUrl: './save-report.component.html',
  styleUrls: ['./save-report.component.scss']
})
export class SaveReportComponent implements OnInit {

  @Input()
  sections: Section[];

  @Input()
  portraitOrientation: boolean;

  @Input()
  pageType: PageType;

  @Output()
  message = new EventEmitter<Message>();

  constructor(public dialog: MatDialog, private service: ReportService) { }

  ngOnInit(): void {
  }

  save(dialogTemplate: TemplateRef<any>) {
    if (!this.checkIfReportCanBeSaved()) {
      this.showMessage(MessageType.Failure, 'Report Has Errors');
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
        this.showMessage(MessageType.Inform, 'Report Not Saved');
      }
    });
  

  }


  checkIfReportCanBeSaved(){

    return true;
  }

  showMessage(type: MessageType, msg: string) {
    const message = new Message();
    message.messageDesc = msg;
    message.messageType = type;
    this.message.emit(message)
  }

  saveReort() {
    this.service.saveReport().subscribe(
      (returnMsg) => {
        this.showMessage(MessageType.Success, 'Saved Successfully');
      },
      (err) => {
        this.showMessage(MessageType.Failure, 'Could Not Save Report');
      }
    );
  }

}
