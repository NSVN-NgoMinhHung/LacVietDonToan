import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/xem-que/xem-que.html'
})
export class XemQuePage {
    selectedItem: any;

    constructor(private navCtrl: NavController, navParams: NavParams) {
        this.selectedItem = navParams.get('item');
    }
}