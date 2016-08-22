import {Component} from '@angular/core';
import {Loading} from 'ionic-angular';
import {NavController, NavParams, Alert} from 'ionic-angular';
import {XemQuePage} from '../xem-que/xem-que';
import {Database} from '../../providers/database/database';
import {LunarSolarConverter, Lunar, Solar} from '../../controller/LunarSolarConverter';
import {LacVietDonToan} from '../../controller/LacVietDonToan';

@Component({
    templateUrl: 'build/pages/lay-que/lay-que.html'
})
export class LayQuePage {
    time: Date;
    lunar: any;
    solar: any;
    lunarHour: any;
    canChiLunarYear: any;
    constructor(private navCtrl: NavController, private database: Database) {
        // khoi tao converter
        var lunarSolarConverter = new LunarSolarConverter();
        this.time = new Date();
        setInterval(() => this.time = new Date(), 1000);
        // khoi tao ngay duong lich
        this.solar = new Solar();
        this.solar.solarDay = this.time.getDate();
        this.solar.solarMonth = this.time.getMonth() + 1;
        this.solar.solarYear = this.time.getFullYear();
        // chuyen sang ngay am lich
        this.lunar = lunarSolarConverter.SolarToLunar(this.solar);
        // lay gio am lich
        this.lunarHour = lunarSolarConverter.getCanChiHourLunar(this.lunar.lunarMonth, this.pad2(this.time.getHours()) + ':' + this.pad2(this.time.getMinutes()) + ':' + this.pad2(this.time.getSeconds()));
    }

    xemQue() {
        let loading = Loading.create({
            content: "Please wait...",
            duration: 1500,
            dismissOnPageChange: false
        });
        this.navCtrl.present(loading);
    }

    pad2 = function n(n) {
        return n > 9 ? '' + n : '0' + n;
    };
}