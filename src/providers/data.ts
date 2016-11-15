import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

declare var firebase: any;

/*
 Generated class for the Data provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Data {
    private _db: any;
    private _todosRef: any;

    constructor() {
        this._db = firebase.database().ref('/');
        this._todosRef = firebase.database().ref('todos');
        this._todosRef.on('child_added', this.handleData, this);
    }

    handleData(snap){

    }
}