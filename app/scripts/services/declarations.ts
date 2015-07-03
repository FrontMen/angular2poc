import {HttpBackend, httpInjectables} from '../../node_modules/angular2/http';

export class DeclarationService {
    $http: HttpBackend;
    $q:Promise;
    cachedDeclarations:Array;

    constructor($http: HttpBackend, $q: Promise) {
        this.$http = $http;
        this.$q = $q
    }

    getAll() {
        return new Promise(
            function (resolve, reject) {
                if (!localStorage.getItem("declarations")) {

                }
                if (this.cachedDeclarations) {
                }



                this.$http.get('/books').then(function(data){

                    this.cachedBooks = data.books;
                    return this.cachedBooks;
                })
            });
    }
}