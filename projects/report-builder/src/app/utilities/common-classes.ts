export enum MessageType {
  Success = 'successMsg',
  Inform = 'informMsg',
  Failure = 'failureMsg',
  Warning = 'warningMsg'
}

export class Message {
  messageType: MessageType;
  messageDesc: string;
}