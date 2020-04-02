export declare enum CyclicTimeFrame {
    DayOfWeek = "dayOfWeek",
    MonthOfYear = "month",
    SeasonOfYear = "season"
}
export declare const cyclicTimeFrameSpecs: {
    [type: string]: {
        type: CyclicTimeFrame;
        name: string;
    };
};
export declare enum CycleDimension {
    Sunday = "day|dayOfWeek|0",
    Monday = "day|dayOfWeek|1",
    Tuesday = "day|dayOfWeek|2",
    Wednesday = "day|dayOfWeek|3",
    Thursday = "day|dayOfWeek|4",
    Friday = "day|dayOfWeek|5",
    Saturday = "day|dayOfWeek|6",
    January = "year|month|1",
    February = "year|month|2",
    March = "year|month|3",
    April = "year|month|4",
    May = "year|month|5",
    June = "year|month|6",
    July = "year|month|7",
    August = "year|month|8",
    September = "year|month|9",
    October = "year|month|10",
    November = "year|month|11",
    December = "year|month|12",
    Spring = "year|season|0",
    Summer = "year|season|1",
    Fall = "year|season|2",
    Winter = "year|season|3"
}
export interface CycleDimensionSpec {
    name: string;
    cycleType: CyclicTimeFrame;
    dimension: CycleDimension;
    level: "year" | "day";
    timeKey: number;
}
export declare function getHomogeneousCycleDimensionList(dimension: CycleDimension): CycleDimensionSpec[];
export declare function getFilteredCycleDimensionList(cycleType: CyclicTimeFrame): CycleDimensionSpec[];
export declare function getCycleDimensionSpec(dimension: CycleDimension): CycleDimensionSpec;
export declare function getCycleTypeOfDimension(dimension: CycleDimension): CyclicTimeFrame;
export declare function getCycleLevelOfDimension(dimension: CycleDimension): "year" | "day";
export declare function getTimeKeyOfDimension(dimension: CycleDimension): number;
export declare function getCycleDimensionWithTimeKey(cycleType: CyclicTimeFrame, timeKey: number): CycleDimension;
