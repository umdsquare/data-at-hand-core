"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(milis) {
    return new Promise(resolve => setTimeout(resolve, milis));
}
exports.sleep = sleep;
function getNumberSequence(from, to) {
    const result = [];
    for (let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}
exports.getNumberSequence = getNumberSequence;
function noop(k) { return k; }
exports.noop = noop;
exports.STRING_SET_ALPHABETS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
exports.STRING_SET_NUMBERS = '0123456789';
function randomString(length = 5, set = exports.STRING_SET_ALPHABETS) {
    const result = new Array(length);
    for (let i = 0; i < result.length; i++) {
        result[i] = set.charAt(Math.random() * (set.length - 1));
    }
    return result.join("");
}
exports.randomString = randomString;
function clamp(value, min, max) {
    return Math.min(max, Math.max(value, min));
}
exports.clamp = clamp;
class Lazy {
    constructor(generator) {
        this.generator = generator;
        this._instance = undefined;
    }
    get() {
        if (this._instance == null) {
            this._instance = this.generator();
        }
        return this._instance;
    }
}
exports.Lazy = Lazy;
function coverValueInRange(range, value) {
    if (value != null) {
        range[0] = Math.min(range[0], value);
        range[1] = Math.max(range[1], value);
    }
    return range;
}
exports.coverValueInRange = coverValueInRange;
function clusterSortedNumbers(arr, minDensity = 5) {
    if (arr.length > 2) {
        const clusters = [];
        let currentCluster = [arr[0]];
        let pointer = 0;
        while (++pointer < arr.length) {
            const prev = arr[pointer - 1];
            const curr = arr[pointer];
            if (curr - prev <= minDensity) {
                currentCluster.push(curr);
            }
            else {
                //separate cluster
                clusters.push(currentCluster);
                currentCluster = [curr];
            }
        }
        clusters.push(currentCluster);
        return clusters;
    }
    else {
        return [arr];
    }
}
exports.clusterSortedNumbers = clusterSortedNumbers;
function fastConcatTo(arr1, arr2) {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    arr1.length = arr1Length + arr2Length;
    for (let i = 0; i < arr2Length; i++) {
        arr1[arr1Length + i] = arr2[i];
    }
    return arr1;
}
exports.fastConcatTo = fastConcatTo;
//# sourceMappingURL=index.js.map