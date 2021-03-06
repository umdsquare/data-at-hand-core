import { DataSourceType, IntraDayDataSourceType } from "../measure/DataSourceSpec";import { CyclicTimeFrame, CycleDimension } from "./CyclicTimeFrame";import { DataDrivenQuery } from "./ExplorationInfo";import { TouchingElementInfo } from "./TouchingElementInfo";

export const USER_INTERACTION_ACTION_PREFIX = "exploration:interaction:user"

export enum ExplorationActionType {
  MemoUiStatus = 'exploration:interaction:system:memoUIStatus',

  SetRange = 'exploration:interaction:user:setRange',
  SetDataSource = 'exploration:interaction:user:setDataSource',
  SetIntraDayDataSource = 'exploration:interaction:user:setIntraDayDataSource',
  SetDate = 'exploration:interaction:user:setDate',
  SetCycleType = 'exploration:interaction:user:etCycleType',
  SetCycleDimension = 'exploration:interaction:user:setCycleDimension',

  SetDataDrivenQuery = 'exploration:interaction:user:setDataDrivenQuery',

  ShiftAllRanges = 'exploration:interaction:user:shiftAllRanges',

  GoToBrowseRange = 'exploration:interaction:user:goToBrowseRange',
  GoToBrowseOverview = 'exploration:interaction:user:goToBrowseOverview',
  GoToBrowseDay = 'exploration:interaction:user:goToBrowseDay',
  GoToComparisonCyclic = 'exploration:interaction:user:goToComparisonCyclic',
  GoToComparisonTwoRanges = 'exploration:interaction:user:goToComparisonTwoRanges',
  GoToCyclicDetailDaily = "exploration:interaction:user:goToCyclicDetailDaily",
  GoToCyclicDetailRange = "exploration:interaction:user:goToCyclicDetailRange",

  //History
  RestorePreviousInfo = 'exploration:interaction:user:restorePreviousInfo',
  GoBack = 'exploration:interaction:user:goBack',
  Reset = 'exploration:interaction:system:reset',

  //Touch
  SetTouchElementInfo = 'exploration:interaction:user:setTouchElementInfo',
}

export enum InteractionType {
  TouchOnly = 'touch',
  SpeechOnly = 'speech',
  TouchAndSpeech = "touchspeech"
}

export interface ActionTypeBase {
    type: string,
    _metadata?: any
}

export interface ExplorationActionBase extends ActionTypeBase {
  interactionType: InteractionType;
  interactionContext?: string;
}

export interface MemoUIStatusAction extends ActionTypeBase {
  key: string;
  value: any;
}

export interface ResetAction extends ActionTypeBase {
  resetRange: [number, number]
}

export interface SetRangeAction extends ExplorationActionBase {
  range: [number, number];
  key?: string;
}

export interface SetDateAction extends ExplorationActionBase {
  date: number;
}

export interface SetDataSourceAction extends ExplorationActionBase {
  dataSource: DataSourceType;
}

export interface SetIntraDayDataSourceAction extends ExplorationActionBase {
  intraDayDataSource: IntraDayDataSourceType;
}

export interface SetCycleTypeAction extends ExplorationActionBase {
  cycleType: CyclicTimeFrame;
}

export interface SetDataDrivenQueryAction extends ExplorationActionBase {
  dataDrivenQuery: DataDrivenQuery | null,
  range?: [number, number];
}

export interface GoToBrowseRangeAction extends ExplorationActionBase {
  dataSource?: DataSourceType;
  range?: [number, number];
}

export interface GoToBrowseDayAction extends ExplorationActionBase {
  intraDayDataSource?: IntraDayDataSourceType;
  date?: number;
}

export interface GoToComparisonCyclicAction extends ExplorationActionBase {
  dataSource?: DataSourceType;
  range?: [number, number];
  cycleType?: CyclicTimeFrame;
}

export interface GoToComparisonTwoRangesAction extends ExplorationActionBase {
  dataSource?: DataSourceType;
  rangeA?: [number, number];
  rangeB?: [number, number];
}

export interface GoToCyclicDetailAction extends ExplorationActionBase {
  dataSource?: DataSourceType;
  range?: [number, number];
  cycleDimension?: CycleDimension;
}

export interface SetCycleDimensionAction extends ExplorationActionBase {
  cycleDimension: CycleDimension;
}

export interface ShiftAllRangesAction extends ExplorationActionBase {
  direction: 'past' | 'future'
}

export interface SetTouchingElementInfoAction extends ActionTypeBase {
  info: TouchingElementInfo | null;
}