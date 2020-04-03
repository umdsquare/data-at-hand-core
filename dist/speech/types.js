"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VariableType;
(function (VariableType) {
    VariableType["DataSource"] = "DataSource";
    VariableType["Date"] = "Date";
    VariableType["Period"] = "Period";
    VariableType["Verb"] = "Verb";
    VariableType["TimeCycle"] = "CyclicTime";
    VariableType["Condition"] = "Condition";
})(VariableType = exports.VariableType || (exports.VariableType = {}));
var Intent;
(function (Intent) {
    Intent["AssignTrivial"] = "Assign";
    Intent["Browse"] = "Browse";
    Intent["Compare"] = "Compare";
    Intent["Highlight"] = "Highlight";
})(Intent = exports.Intent || (exports.Intent = {}));
var NLUResultType;
(function (NLUResultType) {
    NLUResultType[NLUResultType["Effective"] = 1] = "Effective";
    NLUResultType[NLUResultType["Void"] = 0] = "Void";
    NLUResultType[NLUResultType["Unapplicable"] = -1] = "Unapplicable";
    NLUResultType[NLUResultType["Fail"] = -2] = "Fail";
})(NLUResultType = exports.NLUResultType || (exports.NLUResultType = {}));
//# sourceMappingURL=types.js.map