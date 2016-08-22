export class LacVietDonToan {
    private lunarHourValue;
    private lunarDay;
    private lunarMonth;
    private lunarYearValue;
    constructor(lunarHourValue: any, lunarDay: any, lunarMonth: any, lunarYearValue: any) {
        this.lunarHourValue = lunarHourValue;
        this.lunarDay = lunarDay;
        this.lunarMonth = lunarMonth;
        this.lunarYearValue = lunarYearValue;
    }

    getBatMon() {
        return ((this.lunarHourValue + this.lunarDay + this.lunarMonth) % 8);
    }

    getLucNham() {
        return ((this.lunarHourValue + this.lunarDay + this.lunarMonth + this.lunarYearValue - 3) % 6);
    }
}