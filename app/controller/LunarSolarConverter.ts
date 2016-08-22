export class Lunar {
    isleap: any;
    lunarDay: any;
    lunarMonth: any;
    lunarYear: any;
    canChiLunarDay: any;
    canChiLunarMonth: any;
    canChiLunarYear: any;
    constructor() {
        this.isleap = false;
        this.lunarDay = 0;
        this.lunarMonth = 0;
        this.lunarYear = 0;
    }
    pad2 = function n(n) {
        return n > 9 ? '' + n : '0' + n;
    };
}

export class Solar {
    solarDay: any;
    solarMonth: any;
    solarYear: any;
    constructor() {
        this.solarDay = 0;
        this.solarMonth = 0;
        this.solarYear = 0;
    }

}

export class LunarSolarConverter {
    lunar_month_days: any;
    solar_1_1: any;
    constructor() {
        this.lunar_month_days = [1887, 0x1694, 0x16aa, 0x4ad5,
            0xab6, 0xc4b7, 0x4ae, 0xa56, 0xb52a, 0x1d2a, 0xd54, 0x75aa, 0x156a,
            0x1096d, 0x95c, 0x14ae, 0xaa4d, 0x1a4c, 0x1b2a, 0x8d55, 0xad4,
            0x135a, 0x495d, 0x95c, 0xd49b, 0x149a, 0x1a4a, 0xbaa5, 0x16a8,
            0x1ad4, 0x52da, 0x12b6, 0xe937, 0x92e, 0x1496, 0xb64b, 0xd4a,
            0xda8, 0x95b5, 0x56c, 0x12ae, 0x492f, 0x92e, 0xcc96, 0x1a94,
            0x1d4a, 0xada9, 0xb5a, 0x56c, 0x726e, 0x125c, 0xf92d, 0x192a,
            0x1a94, 0xdb4a, 0x16aa, 0xad4, 0x955b, 0x4ba, 0x125a, 0x592b,
            0x152a, 0xf695, 0xd94, 0x16aa, 0xaab5, 0x9b4, 0x14b6, 0x6a57,
            0xa56, 0x1152a, 0x1d2a, 0xd54, 0xd5aa, 0x156a, 0x96c, 0x94ae,
            0x14ae, 0xa4c, 0x7d26, 0x1b2a, 0xeb55, 0xad4, 0x12da, 0xa95d,
            0x95a, 0x149a, 0x9a4d, 0x1a4a, 0x11aa5, 0x16a8, 0x16d4, 0xd2da,
            0x12b6, 0x936, 0x9497, 0x1496, 0x1564b, 0xd4a, 0xda8, 0xd5b4,
            0x156c, 0x12ae, 0xa92f, 0x92e, 0xc96, 0x6d4a, 0x1d4a, 0x10d65,
            0xb58, 0x156c, 0xb26d, 0x125c, 0x192c, 0x9a95, 0x1a94, 0x1b4a,
            0x4b55, 0xad4, 0xf55b, 0x4ba, 0x125a, 0xb92b, 0x152a, 0x1694,
            0x96aa, 0x15aa, 0x12ab5, 0x974, 0x14b6, 0xca57, 0xa56, 0x1526,
            0x8e95, 0xd54, 0x15aa, 0x49b5, 0x96c, 0xd4ae, 0x149c, 0x1a4c,
            0xbd26, 0x1aa6, 0xb54, 0x6d6a, 0x12da, 0x1695d, 0x95a, 0x149a,
            0xda4b, 0x1a4a, 0x1aa4, 0xbb54, 0x16b4, 0xada, 0x495b, 0x936,
            0xf497, 0x1496, 0x154a, 0xb6a5, 0xda4, 0x15b4, 0x6ab6, 0x126e,
            0x1092f, 0x92e, 0xc96, 0xcd4a, 0x1d4a, 0xd64, 0x956c, 0x155c,
            0x125c, 0x792e, 0x192c, 0xfa95, 0x1a94, 0x1b4a, 0xab55, 0xad4,
            0x14da, 0x8a5d, 0xa5a, 0x1152b, 0x152a, 0x1694, 0xd6aa, 0x15aa,
            0xab4, 0x94ba, 0x14b6, 0xa56, 0x7527, 0xd26, 0xee53, 0xd54, 0x15aa,
            0xa9b5, 0x96c, 0x14ae, 0x8a4e, 0x1a4c, 0x11d26, 0x1aa4, 0x1b54,
            0xcd6a, 0xada, 0x95c, 0x949d, 0x149a, 0x1a2a, 0x5b25, 0x1aa4,
            0xfb52, 0x16b4, 0xaba, 0xa95b, 0x936, 0x1496, 0x9a4b, 0x154a,
            0x136a5, 0xda4, 0x15ac];

        this.solar_1_1 = [1887, 0xec04c, 0xec23f, 0xec435, 0xec649,
            0xec83e, 0xeca51, 0xecc46, 0xece3a, 0xed04d, 0xed242, 0xed436,
            0xed64a, 0xed83f, 0xeda53, 0xedc48, 0xede3d, 0xee050, 0xee244,
            0xee439, 0xee64d, 0xee842, 0xeea36, 0xeec4a, 0xeee3e, 0xef052,
            0xef246, 0xef43a, 0xef64e, 0xef843, 0xefa37, 0xefc4b, 0xefe41,
            0xf0054, 0xf0248, 0xf043c, 0xf0650, 0xf0845, 0xf0a38, 0xf0c4d,
            0xf0e42, 0xf1037, 0xf124a, 0xf143e, 0xf1651, 0xf1846, 0xf1a3a,
            0xf1c4e, 0xf1e44, 0xf2038, 0xf224b, 0xf243f, 0xf2653, 0xf2848,
            0xf2a3b, 0xf2c4f, 0xf2e45, 0xf3039, 0xf324d, 0xf3442, 0xf3636,
            0xf384a, 0xf3a3d, 0xf3c51, 0xf3e46, 0xf403b, 0xf424e, 0xf4443,
            0xf4638, 0xf484c, 0xf4a3f, 0xf4c52, 0xf4e48, 0xf503c, 0xf524f,
            0xf5445, 0xf5639, 0xf584d, 0xf5a42, 0xf5c35, 0xf5e49, 0xf603e,
            0xf6251, 0xf6446, 0xf663b, 0xf684f, 0xf6a43, 0xf6c37, 0xf6e4b,
            0xf703f, 0xf7252, 0xf7447, 0xf763c, 0xf7850, 0xf7a45, 0xf7c39,
            0xf7e4d, 0xf8042, 0xf8254, 0xf8449, 0xf863d, 0xf8851, 0xf8a46,
            0xf8c3b, 0xf8e4f, 0xf9044, 0xf9237, 0xf944a, 0xf963f, 0xf9853,
            0xf9a47, 0xf9c3c, 0xf9e50, 0xfa045, 0xfa238, 0xfa44c, 0xfa641,
            0xfa836, 0xfaa49, 0xfac3d, 0xfae52, 0xfb047, 0xfb23a, 0xfb44e,
            0xfb643, 0xfb837, 0xfba4a, 0xfbc3f, 0xfbe53, 0xfc048, 0xfc23c,
            0xfc450, 0xfc645, 0xfc839, 0xfca4c, 0xfcc41, 0xfce36, 0xfd04a,
            0xfd23d, 0xfd451, 0xfd646, 0xfd83a, 0xfda4d, 0xfdc43, 0xfde37,
            0xfe04b, 0xfe23f, 0xfe453, 0xfe648, 0xfe83c, 0xfea4f, 0xfec44,
            0xfee38, 0xff04c, 0xff241, 0xff436, 0xff64a, 0xff83e, 0xffa51,
            0xffc46, 0xffe3a, 0x10004e, 0x100242, 0x100437, 0x10064b, 0x100841,
            0x100a53, 0x100c48, 0x100e3c, 0x10104f, 0x101244, 0x101438,
            0x10164c, 0x101842, 0x101a35, 0x101c49, 0x101e3d, 0x102051,
            0x102245, 0x10243a, 0x10264e, 0x102843, 0x102a37, 0x102c4b,
            0x102e3f, 0x103053, 0x103247, 0x10343b, 0x10364f, 0x103845,
            0x103a38, 0x103c4c, 0x103e42, 0x104036, 0x104249, 0x10443d,
            0x104651, 0x104846, 0x104a3a, 0x104c4e, 0x104e43, 0x105038,
            0x10524a, 0x10543e, 0x105652, 0x105847, 0x105a3b, 0x105c4f,
            0x105e45, 0x106039, 0x10624c, 0x106441, 0x106635, 0x106849,
            0x106a3d, 0x106c51, 0x106e47, 0x10703c, 0x10724f, 0x107444,
            0x107638, 0x10784c, 0x107a3f, 0x107c53, 0x107e48];

    }
    /**
     * @return {number}
     */
    GetJuliusJd = function (day, month, year) {
        var a = parseInt(((14 - month) / 12).toString());
        var y = year + 4800 - a;
        var m = month + 12 * a - 3;

        return day + parseInt(((153 * m + 2) / 5).toString()) + 365 * y + parseInt((y / 4).toString()) - parseInt((y / 100).toString()) + parseInt((y / 400).toString()) - 32045;
    };

    getCanChiHourLunar = function (month, time): Object {
        switch (month) {
            case 1:
                if (time >= '23:20:00' || time < '01:19:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:20:00' && time < '03:19:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:20:00' && time < '05:19:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:20:00' && time < '07:19:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:20:00' && time < '09:19:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:20:00' && time < '11:19:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:20:00' && time < '13:19:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:20:00' && time < '15:19:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:20:00' && time < '17:19:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:20:00' && time < '19:19:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:20:00' && time < '21:19:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:20:00' && time < '23:19:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 2:
                if (time >= '23:00:00' || time < '00:59:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:00:00' && time < '02:59:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:00:00' && time < '04:59:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:00:00' && time < '06:59:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:00:00' && time < '08:59:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:00:00' && time < '10:59:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:00:00' && time < '12:59:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:00:00' && time < '14:59:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:00:00' && time < '16:59:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:00:00' && time < '18:59:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:00:00' && time < '20:59:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:00:00' && time < '23:59:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 3:
                if (time >= '23:30:00' || time < '01:29:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:30:00' && time < '03:29:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:30:00' && time < '05:29:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:30:00' && time < '07:29:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:30:00' && time < '09:29:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:30:00' && time < '11:29:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:30:00' && time < '13:29:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:30:00' && time < '15:29:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:30:00' && time < '17:29:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:30:00' && time < '19:29:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:30:00' && time < '21:29:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:30:00' && time < '23:29:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 4:
                if (time >= '23:40:00' || time < '01:39:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:40:00' && time < '03:39:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:40:00' && time < '05:39:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:40:00' && time < '07:39:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:40:00' && time < '09:39:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:40:00' && time < '11:39:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:40:00' && time < '13:39:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:40:00' && time < '15:39:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:40:00' && time < '17:39:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:40:00' && time < '19:39:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:40:00' && time < '21:39:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:40:00' && time < '23:39:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 5:
                if (time >= '00:20:00' || time < '02:19:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '02:20:00' && time < '04:19:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '04:20:00' && time < '06:19:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '06:20:00' && time < '08:19:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '08:20:00' && time < '10:19:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '10:20:00' && time < '12:19:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '12:20:00' && time < '14:19:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '14:20:00' && time < '16:19:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '16:20:00' && time < '18:19:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '18:20:00' && time < '20:19:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '20:20:00' && time < '22:19:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '22:20:00' && time < '00:19:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 6:
                if (time >= '23:40:00' || time < '01:39:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:40:00' && time < '03:39:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:40:00' && time < '05:39:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:40:00' && time < '07:39:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:40:00' && time < '09:39:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:40:00' && time < '11:39:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:40:00' && time < '13:39:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:40:00' && time < '15:39:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:40:00' && time < '17:39:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:40:00' && time < '19:39:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:40:00' && time < '21:39:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:40:00' && time < '23:39:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 7:
                if (time >= '23:30:00' || time < '01:29:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:30:00' && time < '03:29:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:30:00' && time < '05:29:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:30:00' && time < '07:29:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:30:00' && time < '09:29:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:30:00' && time < '11:29:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:30:00' && time < '13:29:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:30:00' && time < '15:29:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:30:00' && time < '17:29:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:30:00' && time < '19:29:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:30:00' && time < '21:29:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:30:00' && time < '23:29:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 8:
                if (time >= '23:00:00' || time < '01:59:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:00:00' && time < '03:59:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:00:00' && time < '05:59:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:00:00' && time < '07:59:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:00:00' && time < '09:59:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:00:00' && time < '11:59:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:00:00' && time < '13:59:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:00:00' && time < '15:59:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:00:00' && time < '17:59:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:00:00' && time < '19:59:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:00:00' && time < '21:59:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:00:00' && time < '23:59:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 9:
                if (time >= '23:20:00' || time < '01:19:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:20:00' && time < '03:19:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:20:00' && time < '05:19:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:20:00' && time < '07:19:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:20:00' && time < '09:19:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:20:00' && time < '11:19:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:20:00' && time < '13:19:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:20:00' && time < '15:19:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:20:00' && time < '17:19:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:20:00' && time < '19:19:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:20:00' && time < '21:19:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:20:00' && time < '23:19:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 10:
                if (time >= '23:00:00' || time < '01:59:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:00:00' && time < '03:59:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:00:00' && time < '05:59:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:00:00' && time < '07:59:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:00:00' && time < '09:59:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:00:00' && time < '11:59:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:00:00' && time < '13:59:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:00:00' && time < '15:59:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:00:00' && time < '17:59:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:00:00' && time < '19:59:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:00:00' && time < '21:59:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:00:00' && time < '23:59:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 11:
                if (time >= '22:40:00' || time < '00:39:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '00:40:00' && time < '02:39:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '02:40:00' && time < '04:39:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '04:40:00' && time < '06:39:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '06:40:00' && time < '08:39:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '08:40:00' && time < '10:39:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '10:40:00' && time < '12:39:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '12:40:00' && time < '14:39:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '14:40:00' && time < '16:39:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '16:40:00' && time < '18:39:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '18:40:00' && time < '20:39:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '20:40:00' && time < '22:39:59') {
                    return { title: 'Hợi', value: 12 };
                }
            case 12:
                if (time >= '23:00:00' || time < '00:59:59') {
                    return { title: 'Tý', value: 1 };
                } else if (time >= '01:00:00' && time < '02:59:59') {
                    return { title: 'Sửu', value: 2 };
                } else if (time >= '03:00:00' && time < '04:59:59') {
                    return { title: 'Dần', value: 3 };
                } else if (time >= '05:00:00' && time < '06:59:59') {
                    return { title: 'Mão', value: 4 };
                } else if (time >= '07:00:00' && time < '08:59:59') {
                    return { title: 'Thìn', value: 5 };
                } else if (time >= '09:00:00' && time < '10:59:59') {
                    return { title: 'Tỵ', value: 6 };
                } else if (time >= '11:00:00' && time < '12:59:59') {
                    return { title: 'Ngọ', value: 7 };
                } else if (time >= '13:00:00' && time < '14:59:59') {
                    return { title: 'Mùi', value: 8 };
                } else if (time >= '15:00:00' && time < '16:59:59') {
                    return { title: 'Thân', value: 9 };
                } else if (time >= '17:00:00' && time < '18:59:59') {
                    return { title: 'Dậu', value: 10 };
                } else if (time >= '19:00:00' && time < '20:59:59') {
                    return { title: 'Tuất', value: 11 };
                } else if (time >= '21:00:00' && time < '22:59:59') {
                    return { title: 'Hợi', value: 12 };
                }
        }
    };
    /**
    * @return { canValue, chiValue, canTitle, chiTitle };
    */
    getCanChiLunarDay = function (jdDay) {
        var canValue = ((jdDay + 9) % 10);
        var chiValue = ((jdDay + 1) % 12);
        var canTitle;
        var chiTitle;
        switch (canValue) {
            case 0:
                canTitle = 'Giáp';
                break;
            case 1:
                canTitle = 'Ất';
                break;
            case 2:
                canTitle = 'Bính';
                break;
            case 3:
                canTitle = 'Đinh';
                break;
            case 4:
                canTitle = 'Mậu';
                break;
            case 5:
                canTitle = 'Kỷ';
                break;
            case 6:
                canTitle = 'Canh';
                break;
            case 7:
                canTitle = 'Tân';
                break;
            case 8:
                canTitle = 'Nhâm';
                break;
            case 9:
                canTitle = 'Quý';
                break;
        }
        switch (chiValue) {
            case 0:
                chiTitle = 'Tý';
                break;
            case 1:
                chiTitle = 'Sửu';
                break;
            case 2:
                chiTitle = 'Dần';
                break;
            case 3:
                chiTitle = 'Mão';
                break;
            case 4:
                chiTitle = 'Thìn';
                break;
            case 5:
                chiTitle = 'Tỵ';
                break;
            case 6:
                chiTitle = 'Ngọ';
                break;
            case 7:
                chiTitle = 'Mùi';
                break;
            case 8:
                chiTitle = 'Thân';
                break;
            case 9:
                chiTitle = 'Dậu';
                break;
            case 10:
                chiTitle = 'Tuất';
                break;
            case 11:
                chiTitle = 'Hợi';
                break;
        }
        return { canValue: canValue, chiValue: chiValue, canTitle: canTitle, chiTitle: chiTitle };
    };

    /**
    * @return { canValue, canTitle, chiTitle };
    */
    getCanChiLunarMonth = function (lunarMonth, lunarYear) {
        var chiTitle;
        var canTitle;
        var canValue = ((lunarYear * 12 + lunarMonth + 3) % 10);
        switch (lunarMonth) {
            case 1:
                chiTitle = 'Dần';
                break;
            case 2:
                chiTitle = 'Mão';
                break;
            case 3:
                chiTitle = 'Thìn';
                break;
            case 4:
                chiTitle = 'Tỵ';
                break;
            case 5:
                chiTitle = 'Ngọ';
                break;
            case 6:
                chiTitle = 'Mùi';
                break;
            case 7:
                chiTitle = 'Thân';
                break;
            case 8:
                chiTitle = 'Dậu';
                break;
            case 9:
                chiTitle = 'Tuất';
                break;
            case 10:
                chiTitle = 'Hợi';
                break;
            case 11:
                chiTitle = 'Tý';
                break;
            case 12:
                chiTitle = 'Sửu';
                break;
        }
        switch (canValue) {
            case 0:
                canTitle = 'Giáp';
                break;
            case 1:
                canTitle = 'Ất';
                break;
            case 2:
                canTitle = 'Bính';
                break;
            case 3:
                canTitle = 'Đinh';
                break;
            case 4:
                canTitle = 'Mậu';
                break;
            case 5:
                canTitle = 'Kỷ';
                break;
            case 6:
                canTitle = 'Canh';
                break;
            case 7:
                canTitle = 'Tân';
                break;
            case 8:
                canTitle = 'Nhâm';
                break;
            case 9:
                canTitle = 'Quý';
                break;
        }
        return { canValue: canValue, canTitle: canTitle, chiTitle: chiTitle };
    };

    /**
    * @return { canValue, chiValue, canTitle, chiTitle };
    */
    getCanChiLunarYear = function (lunarYear) {
        var canValue = ((lunarYear + 6) % 10);
        var canTitle;
        var chiValue = ((lunarYear + 8) % 12);
        var chiTitle;
        switch (canValue) {
            case 0:
                canTitle = 'Giáp';
                break;
            case 1:
                canTitle = 'Ất';
                break;
            case 2:
                canTitle = 'Bính';
                break;
            case 3:
                canTitle = 'Đinh';
                break;
            case 4:
                canTitle = 'Mậu';
                break;
            case 5:
                canTitle = 'Kỷ';
                break;
            case 6:
                canTitle = 'Canh';
                break;
            case 7:
                canTitle = 'Tân';
                break;
            case 8:
                canTitle = 'Nhâm';
                break;
            case 9:
                canTitle = 'Quý';
                break;
        }
        switch (chiValue) {
            case 0:
                chiTitle = 'Tý';
                break;
            case 1:
                chiTitle = 'Sửu';
                break;
            case 2:
                chiTitle = 'Dần';
                break;
            case 3:
                chiTitle = 'Mão';
                break;
            case 4:
                chiTitle = 'Thìn';
                break;
            case 5:
                chiTitle = 'Tỵ';
                break;
            case 6:
                chiTitle = 'Ngọ';
                break;
            case 7:
                chiTitle = 'Mùi';
                break;
            case 8:
                chiTitle = 'Thân';
                break;
            case 9:
                chiTitle = 'Dậu';
                break;
            case 10:
                chiTitle = 'Tuất';
                break;
            case 11:
                chiTitle = 'Hợi';
                break;
        }
        return { canValue: canValue, chiValue: chiValue, canTitle: canTitle, chiTitle: chiTitle };
    };

    /**
     * @return {number}
     */
    GetBitInt = function (data, length, shift) {
        return (data & (((1 << length) - 1) << shift)) >> shift;
    };

    // WARNING: Dates before Oct. 1582 are inaccurate
    /**
     * @return {number}
     */
    SolarToInt = function (y, m, d) {
        m = (m + 9) % 12;
        y = parseInt(y) - parseInt((m / 10).toString());
        return 365 * y + parseInt((y / 4).toString()) - parseInt((y / 100).toString()) + parseInt((y / 400).toString()) + parseInt(((m * 306 + 5) / 10).toString())
            + (d - 1);
    };

    SolarFromInt = function (g) {
        var y = parseInt(((10000 * g + 14780) / 3652425).toString());
        var ddd = g - (365 * y + parseInt((y / 4).toString()) - parseInt((y / 100).toString()) + parseInt((y / 400).toString()));
        if (ddd < 0) {
            y--;
            ddd = g - (365 * y + parseInt((y / 4).toString()) - parseInt((y / 100).toString()) + parseInt((y / 400).toString()));
        }
        var mi = parseInt(((100 * ddd + 52) / 3060).toString());
        var mm = (mi + 2) % 12 + 1;
        y = y + parseInt(((mi + 2) / 12).toString());
        var dd = ddd - parseInt(((mi * 306 + 5) / 10).toString()) + 1;
        var solar = new Solar();
        solar.solarYear = parseInt((y).toString());
        solar.solarMonth = parseInt((mm).toString());
        solar.solarDay = parseInt((dd).toString());
        return solar;
    };

    LunarToSolar = function (lunar) {
        var days = this.lunar_month_days[lunar.lunarYear - this.lunar_month_days[0]];
        var leap = this.GetBitInt(days, 4, 13);
        var offset = 0;
        var loopend = leap;
        if (!lunar.isleap) {
            if (lunar.lunarMonth <= leap || leap === 0) {
                loopend = lunar.lunarMonth - 1;
            } else {
                loopend = lunar.lunarMonth;
            }
        }
        for (var i = 0; i < loopend; i++) {
            offset += this.GetBitInt(days, 1, 12 - i) === 1 ? 30 : 29;
        }
        offset += lunar.lunarDay;

        var solar11 = this.solar_1_1[lunar.lunarYear - this.solar_1_1[0]];

        var y = this.GetBitInt(solar11, 12, 9);
        var m = this.GetBitInt(solar11, 4, 5);
        var d = this.GetBitInt(solar11, 5, 0);

        return this.SolarFromInt(this.SolarToInt(y, m, d) + offset - 1);
    };

    SolarToLunar = function (solar) {
        var lunar = new Lunar();
        var index = solar.solarYear - this.solar_1_1[0];
        var data = (solar.solarYear << 9) | (solar.solarMonth << 5)
            | (solar.solarDay);
        if (this.solar_1_1[index] > data) {
            index--;
        }
        var solar11 = this.solar_1_1[index];
        var y = this.GetBitInt(solar11, 12, 9);
        var m = this.GetBitInt(solar11, 4, 5);
        var d = this.GetBitInt(solar11, 5, 0);
        var offset = this.SolarToInt(solar.solarYear, solar.solarMonth,
            solar.solarDay) - this.SolarToInt(y, m, d);

        var days = this.lunar_month_days[index];
        var leap = this.GetBitInt(days, 4, 13);

        var lunarY = index + this.solar_1_1[0];
        var lunarM = 1;
        offset += 1;

        for (var i = 0; i < 13; i++) {
            var dm = this.GetBitInt(days, 1, 12 - i) === 1 ? 30 : 29;
            if (offset > dm) {
                lunarM++;
                offset -= dm;
            } else {
                break;
            }
        }
        var lunarD = parseInt((offset).toString());
        lunar.lunarYear = lunarY;
        lunar.canChiLunarYear = this.getCanChiLunarYear(lunarY);
        lunar.lunarMonth = lunarM;
        lunar.canChiLunarMonth = this.getCanChiLunarMonth(lunarM, lunarY);
        lunar.isleap = false;
        if (leap !== 0 && lunarM > leap) {
            lunar.lunarMonth = lunarM - 1;
            if (lunarM === leap + 1) {
                lunar.isleap = true;
            }
        }

        lunar.lunarDay = lunarD;
        lunar.canChiLunarDay = this.getCanChiLunarDay(this.GetJuliusJd(solar.solarDay, solar.solarMonth, solar.solarYear));
        return lunar;
    };
}