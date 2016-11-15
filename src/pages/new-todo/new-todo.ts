import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NewTodoPage Page');
  }

}
