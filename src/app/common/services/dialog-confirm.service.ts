import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogInformationComponent } from '@common/components/dialog-information/dialog-information.component';
import { IDialogInformation } from '@common/models/dialog/dialog-information.model';

@Injectable({
  providedIn: 'root'
})
export class DialogConfirmService {
  public constructor(
    private matDialog: MatDialog
  ) { }

  public confirmDialog(mess: string, type: 'info' | 'delete' | 'confirm' = 'info'): MatDialogRef<DialogInformationComponent> {
    const dialogData: IDialogInformation = {
      type: type ,
      content: mess,
      positive: {
        title: 'common.button.yes',
        click: () => {
          // this.dialogConfirmResponse.next(true);
          dialogConfirmRef.close(true);
        }
      },
      negative: {
        title: 'common.button.no',
        click: () => {
          // this.dialogConfirmResponse.next(false);
          dialogConfirmRef.close(false);
        }
      }
    };
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.restoreFocus = undefined;
    dialogConfig.data = dialogData;
    dialogConfig.disableClose = true;
    const dialogConfirmRef: MatDialogRef<DialogInformationComponent> = this.matDialog.open(DialogInformationComponent, dialogConfig);

    return dialogConfirmRef;
  }

  public confirmCustomBntDialog(mess: string, type: 'info' | 'delete' | 'confirm' = 'info',bntYes?:string,bntNo?:string): MatDialogRef<DialogInformationComponent> {
    const dialogData: IDialogInformation = {
      type: type ,
      content: mess,
      positive: {
        title: bntYes? bntYes : 'common.button.yes',
        click: () => {
          // this.dialogConfirmResponse.next(true);
          dialogConfirmRef.close(true);
        }
      },
      negative: {
        title: bntNo? bntNo : 'common.button.no',
        click: () => {
          // this.dialogConfirmResponse.next(false);
          dialogConfirmRef.close(false);
        }
      }
    };
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.restoreFocus = undefined;
    dialogConfig.data = dialogData;
    dialogConfig.disableClose = true;
    const dialogConfirmRef: MatDialogRef<DialogInformationComponent> = this.matDialog.open(DialogInformationComponent, dialogConfig);

    return dialogConfirmRef;
  }


  public successRegisterMessage(): void {
    const dialogData: IDialogInformation = {
      type: 'success',
      content: 'common.message.success',
      negative: {
        title: 'common.button.ok',
        click: () => {
          dialogConfirmRef.close();
        }
      }
    };
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = dialogData;
    dialogConfig.disableClose = false;
    const dialogConfirmRef: MatDialogRef<DialogInformationComponent> = this.matDialog.open(DialogInformationComponent, dialogConfig);
  }

  public errorRegisterMessage(mess: string): MatDialogRef<DialogInformationComponent> {
    const dialogData: IDialogInformation = {
      type: 'error',
      content: mess,
      negative: {
        title: 'common.button.ok',
        click: () => {
          dialogConfirmRef.close();
        }
      }
    };
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = dialogData;
    dialogConfig.disableClose = false;
    const dialogConfirmRef: MatDialogRef<DialogInformationComponent> = this.matDialog.open(DialogInformationComponent, dialogConfig);

    return dialogConfirmRef;
  }

  public customMessage(type: 'error' | 'success', message: string): void {
    const dialogData: IDialogInformation = {
      type: type,
      content: message,
      negative: {
        title: 'common.button.ok',
        click: () => {
          dialogConfirmRef.close();
        }
      }
    };
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = dialogData;
    dialogConfig.disableClose = false;
    const dialogConfirmRef: MatDialogRef<DialogInformationComponent> = this.matDialog.open(DialogInformationComponent, dialogConfig);
  }
}
