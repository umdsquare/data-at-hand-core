import { ExplorationInfoParams } from "./ExplorationInfo";

export enum TouchingElementValueType {
    DayValue = "day",
    RangeAggregated = "rangeA",
    CycleDimension = "cycleDimension"
}

export interface TouchingElementInfo {
    touchId: string;
    elementBoundInScreen: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    params: ExplorationInfoParams;
    value?: any
    valueType?: TouchingElementValueType
}