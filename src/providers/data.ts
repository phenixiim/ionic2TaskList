import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import {errorHandler} from "@angular/platform-browser/src/browser";

declare var firebase: any;

/*
 Generated class for the Data provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Data {
    private _todos$: any;
    private _db: any;
    private _todosRef: any;

    constructor() {
        this._db = firebase.database().ref('/');
        this._todosRef = firebase.database().ref('todos');
        this._todosRef.on('child_added', this.handleData, this);
        this._todos$ = new ReplaySubject();
    }

    get todos() {
        return this._todos$;
    }

    handleData(snap) {
        try {
            this._todos$.next(snap.val());
        }
        catch (error) {

            console.log('catching', error);
        }
    }

    save(todo) {
        return this._todosRef.push(todo).key;
    }
}