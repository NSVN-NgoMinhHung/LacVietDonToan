/*constructor parapeter: 
lunarHourValue: number, lunarDay: number, lunarMonth: number, lunarYearChiValue: number
*/
export class LacVietDonToan {
    private lunarHourValue;
    private lunarDay;
    private lunarMonth;
    private lunarYearChiValue;
    constructor(lunarHourValue: number, lunarDay: number, lunarMonth: number, lunarYearChiValue: number) {
        this.lunarHourValue = lunarHourValue;
        this.lunarDay = lunarDay;
        this.lunarMonth = lunarMonth;
        this.lunarYearChiValue = lunarYearChiValue;
    }

    getBatMon() {
        return ((this.lunarHourValue + this.lunarDay + this.lunarMonth) % 8);
    }

    getLucNham() {
        return ((this.lunarHourValue + this.lunarDay + this.lunarMonth + this.lunarYearChiValue - 3) % 6);
    }
}