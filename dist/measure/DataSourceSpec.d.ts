export declare enum DataSourceCategory {
    Step = "step",
    Sleep = "sleep",
    Weight = "weight",
    HeartRate = "heartRate"
}
export declare enum DataSourceType {
    StepCount = "stepcount",
    HoursSlept = "sleep_duration",
    SleepRange = "sleep_range",
    HeartRate = "heart_rate",
    Weight = "weight"
}
export interface DataSourceSpec {
    category: DataSourceCategory;
    type: DataSourceType;
    name: string;
    description: string;
}
export interface DataSourceCategorySpec {
    category: DataSourceCategory;
    name: string;
}
export declare enum MeasureUnitType {
    Metric = "metric",
    US = "us"
}
export declare enum IntraDayDataSourceType {
    StepCount = "step",
    HeartRate = "heart_rate",
    Sleep = "sleep"
}
export declare function getIntraDayDataSourceName(type: IntraDayDataSourceType): string;
export declare function inferIntraDayDataSourceType(dataSource: DataSourceType): IntraDayDataSourceType | null;
export declare function inferDataSource(intraDayDataSource: IntraDayDataSourceType): DataSourceType;
