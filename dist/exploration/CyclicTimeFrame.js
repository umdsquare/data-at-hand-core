"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CyclicTimeFrame;
(function (CyclicTimeFrame) {
    CyclicTimeFrame["DayOfWeek"] = "dayOfWeek";
    CyclicTimeFrame["MonthOfYear"] = "month";
    CyclicTimeFrame["SeasonOfYear"] = "season";
    //WeekdayWeekends = 'wdwe',
})(CyclicTimeFrame = exports.CyclicTimeFrame || (exports.CyclicTimeFrame = {}));
exports.cyclicTimeFrameSpecs = {};
exports.cyclicTimeFrameSpecs[CyclicTimeFrame.DayOfWeek] = {
    type: CyclicTimeFrame.DayOfWeek,
    name: 'Days of the Week',
};
exports.cyclicTimeFrameSpecs[CyclicTimeFrame.MonthOfYear] = {
    type: CyclicTimeFrame.MonthOfYear,
    name: 'Months of the Year',
};
/*
cyclicTimeFrameSpecs[CyclicTimeFrame.SeasonOfYear] = {
  type: CyclicTimeFrame.SeasonOfYear,
  name: 'Seasons of the Year',
};*/
/*
cyclicTimeFrameSpecs[CyclicTimeFrame.WeekdayWeekends] = {
  type: CyclicTimeFrame.WeekdayWeekends,
  name: 'Weekday / Weekends',
};*/
var CycleDimension;
(function (CycleDimension) {
    CycleDimension["Sunday"] = "day|dayOfWeek|0";
    CycleDimension["Monday"] = "day|dayOfWeek|1";
    CycleDimension["Tuesday"] = "day|dayOfWeek|2";
    CycleDimension["Wednesday"] = "day|dayOfWeek|3";
    CycleDimension["Thursday"] = "day|dayOfWeek|4";
    CycleDimension["Friday"] = "day|dayOfWeek|5";
    CycleDimension["Saturday"] = "day|dayOfWeek|6";
    CycleDimension["January"] = "year|month|1";
    CycleDimension["February"] = "year|month|2";
    CycleDimension["March"] = "year|month|3";
    CycleDimension["April"] = "year|month|4";
    CycleDimension["May"] = "year|month|5";
    CycleDimension["June"] = "year|month|6";
    CycleDimension["July"] = "year|month|7";
    CycleDimension["August"] = "year|month|8";
    CycleDimension["September"] = "year|month|9";
    CycleDimension["October"] = "year|month|10";
    CycleDimension["November"] = "year|month|11";
    CycleDimension["December"] = "year|month|12";
    CycleDimension["Spring"] = "year|season|0";
    CycleDimension["Summer"] = "year|season|1";
    CycleDimension["Fall"] = "year|season|2";
    CycleDimension["Winter"] = "year|season|3";
    //Weekdays = 'week|wdwe|0',
    //Weekends = 'week|wdwe|1',
})(CycleDimension = exports.CycleDimension || (exports.CycleDimension = {}));
const cycleDimensionSpecs = {};
cycleDimensionSpecs[CycleDimension.Monday] = { name: 'Monday' };
cycleDimensionSpecs[CycleDimension.Tuesday] = { name: 'Tuesday' };
cycleDimensionSpecs[CycleDimension.Wednesday] = { name: 'Wednesday' };
cycleDimensionSpecs[CycleDimension.Thursday] = { name: 'Thursday' };
cycleDimensionSpecs[CycleDimension.Friday] = { name: 'Friday' };
cycleDimensionSpecs[CycleDimension.Saturday] = { name: 'Saturday' };
cycleDimensionSpecs[CycleDimension.Sunday] = { name: 'Sunday' };
cycleDimensionSpecs[CycleDimension.January] = { name: 'January' };
cycleDimensionSpecs[CycleDimension.February] = { name: 'February' };
cycleDimensionSpecs[CycleDimension.March] = { name: 'March' };
cycleDimensionSpecs[CycleDimension.April] = { name: 'April' };
cycleDimensionSpecs[CycleDimension.May] = { name: 'May' };
cycleDimensionSpecs[CycleDimension.June] = { name: 'June' };
cycleDimensionSpecs[CycleDimension.July] = { name: 'July' };
cycleDimensionSpecs[CycleDimension.August] = { name: 'August' };
cycleDimensionSpecs[CycleDimension.September] = { name: 'September' };
cycleDimensionSpecs[CycleDimension.October] = { name: 'October' };
cycleDimensionSpecs[CycleDimension.November] = { name: 'November' };
cycleDimensionSpecs[CycleDimension.December] = { name: 'December' };
cycleDimensionSpecs[CycleDimension.Spring] = { name: 'Spring' };
cycleDimensionSpecs[CycleDimension.Summer] = { name: 'Summber' };
cycleDimensionSpecs[CycleDimension.Fall] = { name: 'Fall' };
cycleDimensionSpecs[CycleDimension.Winter] = { name: 'Winter' };
//cycleDimensionSpecs[CycleDimension.Weekdays] = {name: 'Weekdays'};
//cycleDimensionSpecs[CycleDimension.Weekends] = {name: 'Weekends'};
for (const dimension of Object.keys(cycleDimensionSpecs)) {
    const split = dimension.split('|');
    cycleDimensionSpecs[dimension].cycleType = split[1];
    cycleDimensionSpecs[dimension].dimension = dimension;
    cycleDimensionSpecs[dimension].level = split[0];
    cycleDimensionSpecs[dimension].timeKey = Number.parseInt(split[2]);
}
function getHomogeneousCycleDimensionList(dimension) {
    const spec = getCycleDimensionSpec(dimension);
    return getFilteredCycleDimensionList(spec.cycleType);
}
exports.getHomogeneousCycleDimensionList = getHomogeneousCycleDimensionList;
function getFilteredCycleDimensionList(cycleType) {
    return Object.keys(cycleDimensionSpecs)
        .filter(dimension => cycleDimensionSpecs[dimension].cycleType === cycleType)
        .map(dimension => cycleDimensionSpecs[dimension]);
}
exports.getFilteredCycleDimensionList = getFilteredCycleDimensionList;
function getCycleDimensionSpec(dimension) {
    return cycleDimensionSpecs[dimension];
}
exports.getCycleDimensionSpec = getCycleDimensionSpec;
function getCycleTypeOfDimension(dimension) {
    return cycleDimensionSpecs[dimension].cycleType;
}
exports.getCycleTypeOfDimension = getCycleTypeOfDimension;
function getCycleLevelOfDimension(dimension) {
    return cycleDimensionSpecs[dimension].level;
}
exports.getCycleLevelOfDimension = getCycleLevelOfDimension;
function getTimeKeyOfDimension(dimension) {
    return cycleDimensionSpecs[dimension].timeKey;
}
exports.getTimeKeyOfDimension = getTimeKeyOfDimension;
function getCycleDimensionWithTimeKey(cycleType, timeKey) {
    return Object.keys(cycleDimensionSpecs).find(dimension => cycleDimensionSpecs[dimension].cycleType === cycleType && cycleDimensionSpecs[dimension].timeKey === timeKey);
}
exports.getCycleDimensionWithTimeKey = getCycleDimensionWithTimeKey;
//# sourceMappingURL=CyclicTimeFrame.js.map