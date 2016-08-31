import {Component} from '@angular/core';
import {Loading} from 'ionic-angular';
import {NavController, NavParams, Alert} from 'ionic-angular';
import {XemQuePage} from '../xem-que/xem-que';
import {Database} from '../../providers/database/database';
import {LunarSolarConverter, Lunar, Solar} from '../../controller/LunarSolarConverter';
import {LacVietDonToan} from '../../controller/LacVietDonToan';
import {SQLite} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/lay-que/lay-que.html'
})
export class LayQuePage {
    time: Date;
    lunar: any;
    solar: any;
    lunarHour: any;
    canChiLunarYear: any;
    batMon = { header: '', details: '' };
    lucNham: any;
    tongKet: any;
    lvdt: LacVietDonToan;
    constructor(private navCtrl: NavController, private database: Database) {
        var self = this;
        self.init();
        // khoi tao converter
        var lunarSolarConverter = new LunarSolarConverter();
        self.time = new Date();
        setInterval(() => self.time = new Date(), 1000);
        // khoi tao ngay duong lich
        self.solar = new Solar();
        self.solar.solarDay = self.time.getDate();
        self.solar.solarMonth = self.time.getMonth() + 1;
        self.solar.solarYear = self.time.getFullYear();
        // chuyen sang ngay am lich
        self.lunar = lunarSolarConverter.SolarToLunar(self.solar);
        // lay gio am lich
        self.lunarHour = lunarSolarConverter.getCanChiHourLunar(self.lunar.lunarMonth, self.pad2(self.time.getHours()) + ':' + self.pad2(self.time.getMinutes()) + ':' + self.pad2(self.time.getSeconds()));

    }

    xemQue() {
        //khoi tao lac viet don toan
        this.lvdt = new LacVietDonToan(this.lunarHour.value, this.lunar.lunarDay, this.lunar.lunarMonth, this.lunar.canChiLunarYear.chiValue);
        this.presentLoading();
        var bmName = '';
        var lnName = '';
        this.database.getBatMon(this.lvdt.getBatMon()).then((result) => {
            this.batMon = { header: result[0].name, details: result[0].details };
            bmName = result[0].name;
        }, (error) => {
            console.log('Error: ', error);
        });
        this.database.getLucNham(this.lvdt.getLucNham()).then((result) => {
            this.lucNham = { header: result[0].name, details: result[0].details };
            lnName = result[0].name;
        }, (error) => {
            console.log('Error: ', error);
        });
        this.database.getTongKet(this.lvdt.getBatMon(), this.lvdt.getLucNham()).then((result) => {
            this.tongKet = { header: bmName + ' ' + lnName, details: result[0].details };
        }, (error) => {
            console.log('Error: ', error);
        });
    }

    presentLoading() {
        let loading = Loading.create({
            content: "Please wait...",
            duration: 1000,
            dismissOnPageChange: true
        });
        this.navCtrl.present(loading);
    }

    init() {
        this.batMon = { header: 'Quẻ Bát Môn', details: 'Bát môn thuộc Dương – theo nguyên lý Dương trước Âm sau và Dương tịnh Âm Động. Nên quẻ Lạc Việt độn toán lấy Bát Môn làm quẻ ngoại thể hiện hoàn cảnh, điều kiện bên ngoài của sự việc, sự vật cần luận đoán.' };
        this.lucNham = { header: 'Quẻ Lục Nhâm', details: ' Lục Nhâm có sau thuộc Âm. Nên quẻ Lạc Việt độn toán lấy Lục Nhâm thể hiện bản chất sự việc sự vật cần luận đoán.' };
        this.tongKet = { header: 'Quẻ Lạc Việt Độn Toán', details: 'Bát Môn độn giáp và Lục Nhâm đại độn là hai nội dung căn bản của phương pháp dự báo Lạc Việt độn toán. Quẻ Lạc Việt độn toán là sự kết hợp giữa hai quẻ Bát Môn và Lục Nhâm trong cùng một thời điểm toán quẻ. Bát môn thuộc Dương – theo nguyên lý Dương trước Âm sau và Dương tịnh Âm Động. Nên quẻ Lạc Việt độn toán lấy Bát Môn làm quẻ ngoại thể hiện hoàn cảnh, điều kiện bên ngoài của sự việc, sự vật cần luận đoán. Lục Nhâm có sau thuộc Âm. Nến quẻ Lạc Việt độn toán lấy Lục Nhâm thể hiện bản chất sự việc sự vật cần luận đoán.' };
    }

    pad2 = function n(n) {
        return n > 9 ? '' + n : '0' + n;
    };
}