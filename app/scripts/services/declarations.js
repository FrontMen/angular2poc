import {Http} from '../../../node_modules/angular2/http';
import {Declaration} from '../domain/declaration.js';

export class DeclarationService {

    constructor(Http) {
        this.$http = Http;
    }

    getAll() {
        return new Promise(
            function (resolve, reject) {
                var items = localStorage.getItem("declarations");

                if (items) {
                    resolve(items);
                } else {
                    this.$http.get("/db/bonnetjes.json").then(function (data) {
                        save(data);
                    });
                }
            });
    }

    create() {
        return new Declaration();
    }

    save(items) {
        localStorage.setItem("declarations", items);
    }
}