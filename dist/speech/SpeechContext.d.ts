import { ExplorationType, ParameterKey, ParameterType } from "../exploration/ExplorationInfo";
import { DataSourceType } from "../measure/DataSourceSpec";
import { CycleDimension } from "../exploration/CyclicTimeFrame";
declare type DateRangeWidgetElementType = 'from' | 'to' | 'period';
export declare enum SpeechContextType {
    Global = "global",
    Time = "time",
    DateElement = "dateElement",
    RangeElement = "rangeElement",
    CycleDimensionElement = "cycleDimensionElement",
    CategoricalRowElement = "categoricalRowElement"
}
export interface SpeechContext {
    type: SpeechContextType;
}
export interface GlobalSpeechContext extends SpeechContext {
    explorationType: ExplorationType;
}
export interface TimeSpeechContext extends SpeechContext {
    timeElementType: DateRangeWidgetElementType | 'date';
    parameterKey?: ParameterKey;
}
export interface DateElementSpeechContext extends SpeechContext {
    explorationType: ExplorationType;
    date: number;
    dataSource: DataSourceType;
}
export interface RangeElementSpeechContext extends SpeechContext {
    explorationType: ExplorationType;
    range: [number, number];
    dataSource: DataSourceType;
}
export interface CycleDimensionElementSpeechContext extends SpeechContext {
    cycleDimension: CycleDimension;
    dataSource: DataSourceType;
}
export interface CategoricalRowElementSpeechContext extends SpeechContext {
    categoryType: ParameterType.DataSource | ParameterType.IntraDayDataSource | ParameterType.CycleDimension | ParameterType.CycleType;
}
export declare namespace SpeechContextHelper {
    function makeGlobalContext(explorationType: ExplorationType): GlobalSpeechContext;
    function makeTimeSpeechContext(timeElementType: DateRangeWidgetElementType | 'date', parameterKey?: ParameterKey): TimeSpeechContext;
    function makeDateElementSpeechContext(explorationType: ExplorationType, date: number, dataSource: DataSourceType): DateElementSpeechContext;
    function makeRangeElementSpeechContext(explorationType: ExplorationType, range: [number, number], dataSource: DataSourceType): RangeElementSpeechContext;
    function makeCycleDimentionElementSpeechContext(cycleDimension: CycleDimension, dataSource: DataSourceType): CycleDimensionElementSpeechContext;
    function makeCategoricalRowElementSpeechContext(categoryType: ParameterType.DataSource | ParameterType.IntraDayDataSource | ParameterType.CycleDimension | ParameterType.CycleType): CategoricalRowElementSpeechContext;
}
export {};
