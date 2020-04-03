"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_INTERACTION_ACTION_PREFIX = "exploration:interaction:user";
var ExplorationActionType;
(function (ExplorationActionType) {
    ExplorationActionType["MemoUiStatus"] = "exploration:interaction:system:memoUIStatus";
    ExplorationActionType["SetRange"] = "exploration:interaction:user:setRange";
    ExplorationActionType["SetDataSource"] = "exploration:interaction:user:setDataSource";
    ExplorationActionType["SetIntraDayDataSource"] = "exploration:interaction:user:setIntraDayDataSource";
    ExplorationActionType["SetDate"] = "exploration:interaction:user:setDate";
    ExplorationActionType["SetCycleType"] = "exploration:interaction:user:etCycleType";
    ExplorationActionType["SetCycleDimension"] = "exploration:interaction:user:setCycleDimension";
    ExplorationActionType["SetHighlightFilter"] = "exploration:interaction:user:setHighlightFilter";
    ExplorationActionType["ShiftAllRanges"] = "exploration:interaction:user:shiftAllRanges";
    ExplorationActionType["GoToBrowseRange"] = "exploration:interaction:user:goToBrowseRange";
    ExplorationActionType["GoToBrowseOverview"] = "exploration:interaction:user:goToBrowseOverview";
    ExplorationActionType["GoToBrowseDay"] = "exploration:interaction:user:goToBrowseDay";
    ExplorationActionType["GoToComparisonCyclic"] = "exploration:interaction:user:goToComparisonCyclic";
    ExplorationActionType["GoToComparisonTwoRanges"] = "exploration:interaction:user:goToComparisonTwoRanges";
    ExplorationActionType["GoToCyclicDetailDaily"] = "exploration:interaction:user:goToCyclicDetailDaily";
    ExplorationActionType["GoToCyclicDetailRange"] = "exploration:interaction:user:goToCyclicDetailRange";
    //History
    ExplorationActionType["RestorePreviousInfo"] = "exploration:interaction:user:restorePreviousInfo";
    ExplorationActionType["GoBack"] = "exploration:interaction:user:goBack";
    ExplorationActionType["Reset"] = "exploration:interaction:system:reset";
    //Touch
    ExplorationActionType["SetTouchElementInfo"] = "exploration:interaction:user:setTouchElementInfo";
})(ExplorationActionType = exports.ExplorationActionType || (exports.ExplorationActionType = {}));
var InteractionType;
(function (InteractionType) {
    InteractionType["TouchOnly"] = "touchonly";
    InteractionType["Speech"] = "speech";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));
//# sourceMappingURL=actions.js.map