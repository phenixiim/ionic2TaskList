import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {Data} from "../../providers/data";
import {NewTodoPage} from "../new-todo/new-todo";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public todos: any[] = [];

    constructor(public navCtrl: NavController, private _data: Data) {
        let that = this;
        this._data.todos.subscribe((data) => {
            that.todos.push(data);
        }, (err) => {
            console.error(err);
        });
    }

    newTodo() {
        this.navCtrl.push(NewTodoPage);
    }

}
