export declare function sleep(milis: number): Promise<void>;
export declare function getNumberSequence(from: number, to: number): Array<number>;
export declare function noop(k: any): any;
export declare const STRING_SET_ALPHABETS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
export declare const STRING_SET_NUMBERS = "0123456789";
export declare function randomString(length?: number, set?: string): string;
export declare function clamp(value: number, min: number, max: number): number;
export declare class Lazy<T> {
    readonly generator: () => T;
    private _instance;
    constructor(generator: () => T);
    get(): T;
}
export declare function coverValueInRange(range: [number, number], value: number | undefined | null): [number, number];
export declare function clusterSortedNumbers(arr: Array<number>, minDensity?: number): Array<Array<number>>;
export declare function fastConcatTo<T>(arr1: Array<T>, arr2: Array<T>): Array<T>;
