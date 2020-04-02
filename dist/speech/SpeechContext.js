"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpeechContextType;
(function (SpeechContextType) {
    SpeechContextType["Global"] = "global";
    SpeechContextType["Time"] = "time";
    SpeechContextType["DateElement"] = "dateElement";
    SpeechContextType["RangeElement"] = "rangeElement";
    SpeechContextType["CycleDimensionElement"] = "cycleDimensionElement";
    SpeechContextType["CategoricalRowElement"] = "categoricalRowElement";
})(SpeechContextType = exports.SpeechContextType || (exports.SpeechContextType = {}));
var SpeechContextHelper;
(function (SpeechContextHelper) {
    function makeGlobalContext(explorationType) {
        return {
            type: SpeechContextType.Global,
            explorationType
        };
    }
    SpeechContextHelper.makeGlobalContext = makeGlobalContext;
    function makeTimeSpeechContext(timeElementType, parameterKey) {
        return {
            type: SpeechContextType.Time,
            timeElementType,
            parameterKey
        };
    }
    SpeechContextHelper.makeTimeSpeechContext = makeTimeSpeechContext;
    function makeDateElementSpeechContext(explorationType, date, dataSource) {
        return {
            type: SpeechContextType.DateElement,
            explorationType,
            date,
            dataSource
        };
    }
    SpeechContextHelper.makeDateElementSpeechContext = makeDateElementSpeechContext;
    function makeRangeElementSpeechContext(explorationType, range, dataSource) {
        return {
            type: SpeechContextType.RangeElement,
            explorationType,
            range,
            dataSource
        };
    }
    SpeechContextHelper.makeRangeElementSpeechContext = makeRangeElementSpeechContext;
    function makeCycleDimentionElementSpeechContext(cycleDimension, dataSource) {
        return {
            type: SpeechContextType.CycleDimensionElement,
            cycleDimension,
            dataSource
        };
    }
    SpeechContextHelper.makeCycleDimentionElementSpeechContext = makeCycleDimentionElementSpeechContext;
    function makeCategoricalRowElementSpeechContext(categoryType) {
        return {
            type: SpeechContextType.CategoricalRowElement,
            categoryType
        };
    }
    SpeechContextHelper.makeCategoricalRowElementSpeechContext = makeCategoricalRowElementSpeechContext;
})(SpeechContextHelper = exports.SpeechContextHelper || (exports.SpeechContextHelper = {}));
//# sourceMappingURL=SpeechContext.js.map