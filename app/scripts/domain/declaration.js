import {DeclarationRow} from 'row';

export class Declaration {
    constructor() {
        this.date = new Date();
        this.rows = [];
    }

    approve() {
        this.approvedOn = new Date();
    }

    decline(reason) {
        this.declinedOn = new Date();
        this.reason = reason;
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