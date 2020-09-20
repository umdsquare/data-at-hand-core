"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataSourceCategory;
(function (DataSourceCategory) {
    DataSourceCategory["Step"] = "step";
    DataSourceCategory["Sleep"] = "sleep";
    DataSourceCategory["Weight"] = "weight";
    DataSourceCategory["HeartRate"] = "heartRate";
})(DataSourceCategory = exports.DataSourceCategory || (exports.DataSourceCategory = {}));
var DataSourceType;
(function (DataSourceType) {
    DataSourceType["StepCount"] = "step_count";
    DataSourceType["HoursSlept"] = "sleep_duration";
    DataSourceType["SleepRange"] = "sleep_range";
    DataSourceType["HeartRate"] = "heart_rate";
    DataSourceType["Weight"] = "weight";
})(DataSourceType = exports.DataSourceType || (exports.DataSourceType = {}));
var MeasureUnitType;
(function (MeasureUnitType) {
    MeasureUnitType["Metric"] = "metric";
    MeasureUnitType["US"] = "us";
})(MeasureUnitType = exports.MeasureUnitType || (exports.MeasureUnitType = {}));
var IntraDayDataSourceType;
(function (IntraDayDataSourceType) {
    IntraDayDataSourceType["StepCount"] = "step";
    IntraDayDataSourceType["HeartRate"] = "heart_rate";
    IntraDayDataSourceType["Sleep"] = "sleep";
})(IntraDayDataSourceType = exports.IntraDayDataSourceType || (exports.IntraDayDataSourceType = {}));
function getIntraDayDataSourceName(type) {
    switch (type) {
        case IntraDayDataSourceType.StepCount:
            return "Step Count";
        case IntraDayDataSourceType.Sleep:
            return "Sleep";
        case IntraDayDataSourceType.HeartRate:
            return "Heart Rate";
    }
}
exports.getIntraDayDataSourceName = getIntraDayDataSourceName;
function inferIntraDayDataSourceType(dataSource) {
    switch (dataSource) {
        case DataSourceType.StepCount:
            return IntraDayDataSourceType.StepCount;
        case DataSourceType.HeartRate:
            return IntraDayDataSourceType.HeartRate;
        case DataSourceType.HoursSlept:
        case DataSourceType.SleepRange:
            return IntraDayDataSourceType.Sleep;
        default: return null;
    }
}
exports.inferIntraDayDataSourceType = inferIntraDayDataSourceType;
function inferDataSource(intraDayDataSource) {
    switch (intraDayDataSource) {
        case IntraDayDataSourceType.StepCount:
            return DataSourceType.StepCount;
        case IntraDayDataSourceType.Sleep:
            return DataSourceType.SleepRange;
        case IntraDayDataSourceType.HeartRate:
            return DataSourceType.HeartRate;
    }
}
exports.inferDataSource = inferDataSource;
//# sourceMappingURL=DataSourceSpec.js.map