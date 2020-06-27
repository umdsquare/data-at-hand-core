import { ExplorationInfo } from "../exploration/ExplorationInfo";
import { ActionTypeBase } from "../exploration/actions";
import { SpeechContext } from "../speech/SpeechContext";
import { NLUResult } from "../speech/types";

export enum InteractionTransitionLogType {
    Transition = "trans",
    VerboseEvent = "event"
}

export enum VerboseEventTypes {
    Reset = "Reset",
    LoggingTurnedOn = "LoggingTurnedOn",
    LoggingTurnedOff = "LoggingTurnedOff",
    SpeechCommandFail = "SpeechCommandFail",

    RejectedMultimodal = "RejectedMultimodal",

    VoidSpeechAction = "VoidSpeech"
}

export interface SpeechCommandLog {
    id: string,
    inputText: string,
    explorationInfo: ExplorationInfo,
    speechContext: SpeechContext,
    result: NLUResult
}

interface StateLogBase {
    type: InteractionTransitionLogType,
    id: string,
    timestamp: number
}

export interface InteractionStateTransitionLog extends StateLogBase {
    type: InteractionTransitionLogType.Transition,
    service: string,
    action: ActionTypeBase
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
    action: ActionTypeBase,
    speechLogId: string
}

export interface SpeechCommandFailEventLog extends VerboseEventLog{
    event: VerboseEventTypes.SpeechCommandFail,
    speechLogId: string
}