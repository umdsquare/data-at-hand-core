"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InteractionTransitionLogType;
(function (InteractionTransitionLogType) {
    InteractionTransitionLogType["Transition"] = "trans";
    InteractionTransitionLogType["VerboseEvent"] = "event";
})(InteractionTransitionLogType = exports.InteractionTransitionLogType || (exports.InteractionTransitionLogType = {}));
var VerboseEventTypes;
(function (VerboseEventTypes) {
    VerboseEventTypes["Reset"] = "Reset";
    VerboseEventTypes["LoggingTurnedOn"] = "LoggingTurnedOn";
    VerboseEventTypes["LoggingTurnedOff"] = "LoggingTurnedOff";
    VerboseEventTypes["SpeechCommandFail"] = "SpeechCommandFail";
    VerboseEventTypes["RejectedMultimodal"] = "RejectedMultimodal";
    VerboseEventTypes["CanceledSpeechPromptDialog"] = "CanceledSpeechPromptDialog";
    VerboseEventTypes["VoidSpeechAction"] = "VoidSpeech";
})(VerboseEventTypes = exports.VerboseEventTypes || (exports.VerboseEventTypes = {}));
//# sourceMappingURL=types.js.map