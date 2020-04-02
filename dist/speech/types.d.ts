import { ActionTypeBase } from "../exploration/actions";
export declare enum NLUResultType {
    Effective = 1,
    Void = 0,
    Unapplicable = -1,
    Fail = -2
}
export interface NLUResult {
    type: NLUResultType;
    action?: ActionTypeBase | null;
}
