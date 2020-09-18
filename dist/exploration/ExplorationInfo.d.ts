import { DataSourceType } from "../measure/DataSourceSpec";
export interface ExplorationInfo {
    type: ExplorationType;
    values: ExplorationInfoParams;
    dataDrivenQuery?: DataDrivenQuery;
}
export declare enum ExplorationType {
    B_Overview = "b_overview",
    B_Range = "b_range",
    B_Day = "b_day",
    C_Cyclic = "c_cyclic",
    C_CyclicDetail_Daily = "c_cyclic_detail_daily",
    C_CyclicDetail_Range = "c_cyclic_detail_range",
    C_TwoRanges = "c_two_ranges"
}
export declare enum ExplorationMode {
    Browse = "browse",
    Compare = "compare"
}
export declare enum ParameterType {
    DataSource = "src",
    IntraDayDataSource = "intra_day_src",
    Date = "date",
    Range = "range",
    CycleType = "cycle",
    CycleDimension = "cycle_dim"
}
export declare enum ParameterKey {
    RangeA = "rangeA",
    RangeB = "rangeB",
    Pivot = "pivot"
}
export interface ExplorationInfoParameter {
    parameter: ParameterType;
    key?: ParameterKey;
    value: any;
}
export declare type ExplorationInfoParams = Array<ExplorationInfoParameter>;
export declare enum NumericConditionType {
    Min = "min",
    Max = "max",
    Less = "less",
    More = "more"
}
export interface DataDrivenQuery {
    dataSource: DataSourceType;
    type: NumericConditionType;
    propertyKey?: string;
    ref?: number;
}
