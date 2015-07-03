export class DeclarationRow {
    constructor() {
    }

    set date(date) {
        this._date = date;
    }

    get date() {
        return this._date;
    }

    set amount(amount) {
        this._amount = amount;
    }

    get amount() {
        return this._amount;
    }

    set photo(photo) {
        this._photo = photo;
    }

    get photo() {
        return this._photo;
    }

    set description(description) {
        this._description = description;
    }

    get description() {
        return this._description;
    }
}