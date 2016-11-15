import {Component} from '@angular/core';
import {NavController, Toast, ToastController} from 'ionic-angular';
import {Data} from '../../providers/data'
import {Todo} from "../../models/todo";

/*
 Generated class for the NewTodo page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-new-todo',
    templateUrl: 'new-todo.html'
})
export class NewTodoPage {

    todo: Todo;

    constructor(public navCtrl: NavController, public _data: Data, public toastCtrl: ToastController) {
        this.todo = new Todo();
    }

    ionViewDidLoad() {
        console.log('Hello NewTodoPage Page');
    }

    save() {
        var key = this._data.save(this.todo);
        if (key) {
            let toast = this.toastCtrl.create({
                message: 'Todo SAVED!',
                duration: 3000
            });
            toast.present();

            this.navCtrl.pop();
        }

    }

}
