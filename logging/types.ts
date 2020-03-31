import { ExplorationInfo } from "../exploration/ExplorationInfo";

export enum InteractionTransitionLogType {
    Transition = "trans",
    VerboseEvent = "event"
}

export enum VerboseEventTypes {
    Reset = "Reset",
    LoggingTurnedOn = "LoggingTurnedOn",
    LoggingTurnedOff = "LoggingTurnedOff",
    SpeechCommandFail = "SpeechCommandFail",

    VoidSpeechAction = "VoidSpeech"
}

interface StateLogBase {
    type: InteractionTransitionLogType,
    id: string,
    timestamp: number
}

export interface InteractionStateTransitionLog extends StateLogBase {
    type: InteractionTransitionLogType.Transition,
    service: string,
    action: { type: string, metadata?: any },
    nextInfo: ExplorationInfo,
}

export interface VerboseEventLog extends StateLogBase {
    type: InteractionTransitionLogType.VerboseEvent,
    event: VerboseEventTypes,
}

export interface SimpleEventLog extends VerboseEventLog {
    event: VerboseEventTypes.Reset | VerboseEventTypes.LoggingTurnedOn | VerboseEventTypes.LoggingTurnedOff,
    info: ExplorationInfo,
    service: string
}

export interface VoidSpeechEventLog extends VerboseEventLog {
    event: VerboseEventTypes.VoidSpeechAction,
    action: { type: string, metadata?: any },
    speechLogId: string
}

export interface SpeechCommandFailEventLog extends VerboseEventLog{
    event: VerboseEventTypes.SpeechCommandFail,
    speechLogId: string
}