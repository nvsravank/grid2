import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export enum MessageType {
  CONFIRM = 'confirm',
  INFORM = 'inform',
  ERROR = 'error',
  WARN = 'warn'
}

export enum MessageDisplayType {
  INPAGE = 'inpage',
  MODAL = 'modal'
}

export class SimpleMessage {
  messageType: MessageType;
  messageDesc: string;
}

@Component({
  selector: 'common-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit, OnChanges {
  // These Inputs provide different ways to wire the messaging component.
  @Input() displayType: MessageDisplayType = MessageDisplayType.INPAGE; // Defaulted to inpage unless specified when using the component.
  @Input() hideAfterInterval: number; // This input us only used for inline messaging. It can be any positive number between 0 and 5000 and represents the number of milliseconds.

  @Input() buttonLabel: string = 'OK'; // This input is only used for modal windows style messaging.
  @Input() width: string = "350px"; // This input is only used for modal windows style messaging.
  @Output() notifyActionClicked: EventEmitter<string> = new EventEmitter(); // The output is provided as a service and is only used for modal windows style messaging.
  @ViewChild('dialog') public dialogTemplateRef: TemplateRef<any>;

  @Input() message: SimpleMessage; // This is the actual message. Changing this Input will trigger a message.

  enableInpageMessage: boolean = false;
  modaelDialogRef: MatDialogRef<TemplateRef<any>>;
  MessageType = MessageType;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    this.initMessage();
  }

  initMessage() {
    console.log(this.message);
    if (this.message.messageDesc == null || this.message.messageDesc == '') return;
    if (this.message.messageType != MessageType.CONFIRM && this.message.messageType != MessageType.INFORM && this.message.messageType != MessageType.ERROR && this.message.messageType != MessageType.WARN) return;
    if (this.displayType == MessageDisplayType.INPAGE) this.showInpageMessage();
    else if (this.displayType == MessageDisplayType.MODAL) this.showModalMessage();
  }

  showInpageMessage() {
    this.enableInpageMessage = true;
    let interval = Number(this.hideAfterInterval);
    if (interval && interval !== null &&interval > 0 && interval <= 5000) {
      setTimeout( () => {
        this.enableInpageMessage = false;;
      }, interval);
    }
  }

  showModalMessage() {
    this.enableInpageMessage = false;
    this.modaelDialogRef = this.matDialog.open(this.dialogTemplateRef, {
      disableClose: true,
      autoFocus: false,
      width: this.width
    });
    this.modaelDialogRef.afterClosed().subscribe( result => {
      this.notifyActionClicked.emit(result);
    });
  }

  hideMessage() {
    this.enableInpageMessage = false;
  }

}
