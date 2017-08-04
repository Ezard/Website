import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Item} from '../../shared/item';

@Component({
    selector: 'app-details-dialog',
    templateUrl: './details.dialog.html',
    styleUrls: ['./details.dialog.scss']
})
export class DetailsDialogComponent {
    data: Item;

    constructor(public dialogRef: MdDialogRef<DetailsDialogComponent>) {
    }
}
