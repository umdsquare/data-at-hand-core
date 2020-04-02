"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
/**
 *
 *   YYYYMMDD
 */
class DateTimeHelper {
    static toDate(numberedDate) {
        return new Date(DateTimeHelper.getYear(numberedDate), DateTimeHelper.getMonth(numberedDate) - 1, DateTimeHelper.getDayOfMonth(numberedDate));
    }
    static toNumberedDateFromValues(year, month, day) {
        return year * 10000 + month * 100 + day;
    }
    static toNumberedDateFromDate(date) {
        return this.toNumberedDateFromValues(date_fns_1.getYear(date), date_fns_1.getMonth(date) + 1, date_fns_1.getDate(date));
    }
    static getYear(numberedDate) {
        return Math.floor(numberedDate / 10000);
    }
    static getMonth(numberedDate) {
        return Math.floor((numberedDate % 10000) / 100);
    }
    static getDayOfMonth(numberedDate) {
        return numberedDate % 100;
    }
    static toFormattedString(numberedDate) {
        return pad(this.getYear(numberedDate), 4) + "-" + pad(this.getMonth(numberedDate), 2) + "-" + pad(this.getDayOfMonth(numberedDate), 2);
    }
    static fromFormattedString(str) {
        const split = str.split('-');
        return this.toNumberedDateFromValues(Number.parseInt(split[0]), Number.parseInt(split[1]), Number.parseInt(split[2]));
    }
    static splitRange(start, end, maxNumDays) {
        const startDate = this.toDate(start);
        const endDate = this.toDate(end);
        const wholeDiff = date_fns_1.differenceInDays(endDate, startDate) + 1;
        if (wholeDiff <= maxNumDays) {
            return [[start, end]];
        }
        else {
            var chunks = [];
            var pointer = endDate;
            var leftDays = wholeDiff;
            while (leftDays >= maxNumDays) {
                const newStart = date_fns_1.subDays(pointer, maxNumDays - 1);
                chunks.push([this.toNumberedDateFromDate(newStart), this.toNumberedDateFromDate(pointer)]);
                pointer = date_fns_1.subDays(newStart, 1);
                leftDays -= maxNumDays;
            }
            if (leftDays > 0) {
                chunks.push([this.toNumberedDateFromDate(date_fns_1.subDays(pointer, leftDays - 1)), this.toNumberedDateFromDate(pointer)]);
            }
            return chunks;
        }
    }
    static getNumDays(start, end) {
        const fromDate = typeof start === 'number' ? DateTimeHelper.toDate(start) : start;
        const toDate = typeof end === 'number' ? DateTimeHelper.toDate(end) : end;
        return -date_fns_1.differenceInCalendarDays(fromDate, toDate) + 1;
    }
    static rangeSemantic(start, end, ref) {
        const fromDate = typeof start === 'number' ? DateTimeHelper.toDate(start) : start;
        const toDate = typeof end === 'number' ? DateTimeHelper.toDate(end) : end;
        const numDays = -date_fns_1.differenceInCalendarDays(fromDate, toDate) + 1;
        if (date_fns_1.isSameYear(fromDate, toDate) === true && date_fns_1.getDayOfYear(fromDate) === 1 && (date_fns_1.isLeapYear(fromDate) === true && numDays === 366 || date_fns_1.isLeapYear(fromDate) === false && numDays === 365)) {
            return {
                semantic: 'year',
                differenceToRef: ref ? date_fns_1.getYear(ref) - date_fns_1.getYear(fromDate) : undefined
            };
        }
        if (date_fns_1.isSameYear(fromDate, toDate) === true && date_fns_1.getMonth(fromDate) === date_fns_1.getMonth(toDate) && date_fns_1.isFirstDayOfMonth(fromDate) === true && date_fns_1.isLastDayOfMonth(toDate)) {
            return {
                semantic: 'month',
                differenceToRef: ref ? 12 * (date_fns_1.getYear(ref) - date_fns_1.getYear(fromDate)) + date_fns_1.getMonth(ref) - date_fns_1.getMonth(fromDate) : undefined
            };
        }
        else if (numDays === 7) {
            if (date_fns_1.isMonday(fromDate)) {
                return {
                    semantic: 'mondayWeek',
                    differenceToRef: ref ? Math.floor(date_fns_1.differenceInCalendarDays(date_fns_1.startOfWeek(ref, { weekStartsOn: 1 }), fromDate) / 7) : undefined
                };
            }
            else if (date_fns_1.isSunday(fromDate)) {
                return {
                    semantic: 'sundayWeek',
                    differenceToRef: ref ? Math.floor(date_fns_1.differenceInCalendarDays(date_fns_1.startOfWeek(ref, { weekStartsOn: 0 }), fromDate) / 7) : undefined
                };
            }
        }
        return null;
    }
    static getSemanticRange(ref, semantic, offset = 0) {
        let startFunc;
        let endFunc;
        let offsetFunc;
        switch (semantic) {
            case 'year':
                startFunc = date_fns_1.startOfYear;
                endFunc = date_fns_1.endOfYear;
                offsetFunc = date_fns_1.addYears;
                break;
            case 'month':
                startFunc = date_fns_1.startOfMonth;
                endFunc = date_fns_1.endOfMonth;
                offsetFunc = date_fns_1.addMonths;
                break;
            case 'mondayWeek':
                startFunc = this.mondayWeekStartFunc;
                endFunc = this.mondayWeekEndFunc;
                offsetFunc = date_fns_1.addWeeks;
                break;
            case 'sundayWeek':
                startFunc = this.sundayWeekStartFunc;
                endFunc = this.sundayWeekEndFunc;
                offsetFunc = date_fns_1.addWeeks;
                break;
            default: throw Error("Unsupported semantic: " + semantic);
        }
        const offsetDate = offsetFunc(ref, offset);
        return [
            this.toNumberedDateFromDate(startFunc(offsetDate)),
            this.toNumberedDateFromDate(endFunc(offsetDate))
        ];
    }
    static formatDuration(durationInSeconds, roundToMins = false) {
        var usedDuration = durationInSeconds;
        if (usedDuration === 0) {
            return "0";
        }
        if (roundToMins === true) {
            if (durationInSeconds % 60 >= 30)
                usedDuration = durationInSeconds - (durationInSeconds % 60) + 60;
            else
                usedDuration = durationInSeconds - (durationInSeconds % 60);
        }
        const hours = Math.floor(usedDuration / 3600);
        const minutes = Math.floor((usedDuration % 3600) / 60);
        const seconds = usedDuration % 60;
        return ((hours > 0 ? (hours + "h ") : "") + (minutes > 0 ? (minutes + "m ") : "") + (seconds > 0 ? (seconds + "s ") : "")).trim();
    }
    static formatDurationParsed(durationInSeconds, roundToMins = false) {
        var usedDuration = durationInSeconds;
        if (usedDuration === 0) {
            return [{ type: "digit", text: "0" }, { type: "digit", text: " mins" }];
        }
        if (roundToMins === true) {
            if (durationInSeconds % 60 >= 30)
                usedDuration = durationInSeconds - (durationInSeconds % 60) + 60;
            else
                usedDuration = durationInSeconds - (durationInSeconds % 60);
        }
        const hours = Math.floor(usedDuration / 3600);
        const minutes = Math.floor((usedDuration % 3600) / 60);
        const seconds = usedDuration % 60;
        const result = [];
        if (hours > 0) {
            result.push({ type: 'digit', text: hours.toString() });
            result.push({ type: 'unit', text: "hr" });
        }
        if (minutes > 0) {
            result.push({ type: "digit", text: minutes.toString() });
            result.push({ type: "unit", text: "min" });
        }
        if (seconds > 0) {
            result.push({ type: "digit", text: seconds.toString() });
            result.push({ type: "unit", text: "sec" });
        }
        return result;
    }
    static pageRange(start, end, direction) {
        const startDate = typeof start === 'number' ? DateTimeHelper.toDate(start) : start;
        const endDate = typeof end === 'number' ? DateTimeHelper.toDate(end) : end;
        const semanticTest = this.rangeSemantic(startDate, endDate);
        if (semanticTest) {
            return this.getSemanticRange(startDate, semanticTest.semantic, direction);
        }
        else {
            const numDays = date_fns_1.differenceInDays(endDate, startDate) + 1;
            return [DateTimeHelper.toNumberedDateFromDate(date_fns_1.addDays(startDate, direction * numDays)),
                DateTimeHelper.toNumberedDateFromDate(date_fns_1.addDays(endDate, direction * numDays))];
        }
    }
    static formatRange(range, singleLine = false) {
        const startDate = DateTimeHelper.toDate(range[0]);
        const endDate = DateTimeHelper.toDate(range[1]);
        if (date_fns_1.isSameYear(startDate, endDate) && DateTimeHelper.getMonth(range[0]) === 1 && DateTimeHelper.getDayOfMonth(range[0]) === 1 && DateTimeHelper.getMonth(range[1]) === 12 && DateTimeHelper.getDayOfMonth(range[1]) === 31) {
            //yaer
            return [DateTimeHelper.getYear(range[0]).toString()];
        }
        else if (date_fns_1.isSameMonth(startDate, endDate) && DateTimeHelper.toNumberedDateFromDate(date_fns_1.startOfMonth(startDate)) === range[0] && DateTimeHelper.toNumberedDateFromDate(date_fns_1.endOfMonth(endDate)) === range[1]) {
            return [date_fns_1.format(startDate, "MMMM yyyy")];
        }
        else if (date_fns_1.isSameYear(startDate, endDate) === true) {
            if (date_fns_1.isSameMonth(startDate, endDate) === true) {
                return singleLine === true ? [`${date_fns_1.format(startDate, "MMM dd")} - ${date_fns_1.format(endDate, "dd")}, ${date_fns_1.format(endDate, "yyyy")}`]
                    : [`${date_fns_1.format(startDate, "MMM dd")} - ${date_fns_1.format(endDate, "dd")}`, date_fns_1.format(endDate, "yyyy")];
            }
            else
                return singleLine === true ? [`${date_fns_1.format(startDate, "MMM dd")} - ${date_fns_1.format(endDate, "MMM dd")}, ${date_fns_1.format(endDate, "yyyy")}`]
                    : [`${date_fns_1.format(startDate, "MMM dd")} - ${date_fns_1.format(endDate, "MMM dd")}`, date_fns_1.format(endDate, "yyyy")];
        }
        else
            return singleLine === true ? [`${date_fns_1.format(startDate, "MMM dd, yyyy")} - ${date_fns_1.format(endDate, "MMM dd, yyyy")}`]
                : [date_fns_1.format(startDate, "MMM dd, yyyy -"), date_fns_1.format(endDate, "MMM dd, yyyy")];
    }
    static subtract(left, right) {
        if (left[0] <= right[1] && left[1] >= right[0]) {
            //overlaps
            if (left[0] < right[0] && left[1] > right[1]) {
                return {
                    overlap: true,
                    rest: [
                        [left[0], DateTimeHelper.toNumberedDateFromDate(date_fns_1.subDays(DateTimeHelper.toDate(right[0]), 1))],
                        [DateTimeHelper.toNumberedDateFromDate(date_fns_1.addDays(DateTimeHelper.toDate(right[1]), 1)), left[1]]
                    ]
                };
            }
            else if (left[0] < right[0] && left[1] <= right[1]) {
                return {
                    overlap: true,
                    rest: [
                        [left[0], DateTimeHelper.toNumberedDateFromDate(date_fns_1.subDays(DateTimeHelper.toDate(right[0]), 1))]
                    ]
                };
            }
            else if (left[0] >= right[0] && left[1] > right[1]) {
                return {
                    overlap: true,
                    rest: [
                        [DateTimeHelper.toNumberedDateFromDate(date_fns_1.addDays(DateTimeHelper.toDate(right[1]), 1)), left[1]]
                    ]
                };
            }
            else {
                return {
                    overlap: true,
                    rest: []
                };
            }
        }
        else {
            return {
                overlap: false,
                rest: [left]
            };
        }
    }
}
exports.DateTimeHelper = DateTimeHelper;
DateTimeHelper.mondayWeekStartFunc = (date) => date_fns_1.startOfWeek(date, { weekStartsOn: 1 });
DateTimeHelper.mondayWeekEndFunc = (date) => date_fns_1.endOfWeek(date, { weekStartsOn: 1 });
DateTimeHelper.sundayWeekStartFunc = (date) => date_fns_1.startOfWeek(date, { weekStartsOn: 0 });
DateTimeHelper.sundayWeekEndFunc = (date) => date_fns_1.endOfWeek(date, { weekStartsOn: 0 });
function pad(n, len) {
    var s = n.toString();
    if (s.length < len) {
        s = ('0000' + s).slice(-len);
    }
    return s;
}
exports.pad = pad;
function isToday(date, today = new Date()) {
    return date_fns_1.isSameDay(date, today);
}
exports.isToday = isToday;
function isYesterday(date, today = new Date()) {
    return date_fns_1.differenceInDays(today, date) === 1;
}
exports.isYesterday = isYesterday;
//# sourceMappingURL=time.js.map