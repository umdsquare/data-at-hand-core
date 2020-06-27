import { ActionTypeBase } from "../exploration/actions";
import { NumericConditionType } from "../exploration/ExplorationInfo";
import { DataSourceType } from "../measure/DataSourceSpec";


export enum VariableType {
    DataSource = "DataSource",
    Date = "Date",
    Period = "Period",
    Verb = "Verb",
    TimeCycle = "CyclicTime",
    Condition = "Condition"
}

export interface VariableInfo {
    type: VariableType,
    value: any,
    additionalInfo?: any,
    originalText: string,
    id: string
}

export type VariableInfoDict = {
    [id: string]: VariableInfo
}


export enum Intent {
    AssignTrivial = "Assign",
    Browse = "Browse",
    Compare = "Compare",
    Highlight = "Highlight"
}

export interface VerbInfo {
    root: string,
    type: Intent
}

export interface PreProcessedInputText {
    processed: string,
    original: string,
    variables: VariableInfoDict,
    intent: Intent
}


export interface ConditionInfo {
    type: NumericConditionType,
    impliedDataSource?: DataSourceType,
    propertyKey?: "waketime" | "bedtime" | undefined | null
    ref?: number
}


export enum NLUResultType {
    Effective = 1,
    Void = 0,
    Unapplicable = -1,
    Fail = -2,
    NeedPromptingToGlobalCommand = -3
}

export interface NLUResult {
    type: NLUResultType,
    preprocessed: PreProcessedInputText,
    action?: ActionTypeBase | null,
    message?: string,
    globalCommandSimulatedResult?: NLUResult
}