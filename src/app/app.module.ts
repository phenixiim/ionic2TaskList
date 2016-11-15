import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {NewTodoPage} from "../pages/new-todo/new-todo";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        NewTodoPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        NewTodoPage
    ],
    providers: []
})
export class AppModule {
}
