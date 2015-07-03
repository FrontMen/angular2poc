import {DeclarationRow} from 'row';

export class Declaration {
    constructor() {
        this._date = new Date();
        this.rows = [];
    }

    approve() {
        this._approvedOn = new Date();
    }

    decline(reason) {
        this._declinedOn = new Date();
        this._reason = reason;
    }

    get approvedOn() {
        return this._approvedOn;
    }

    get declinedOn() {
        return this._declinedOn;
    }

    get reason() {
        return this._reason;
    }

    get date() {
        return this._date;
    }

    addRow() {
        var row = new DeclarationRow();

        this.rows.push(row);

        return row;
    }

    removeRow(row) {
        let index = row.indexOf(row);

        if (index >= 0) {
            this.rows.splice(index, 1);
        }
    }
}