/**
 *
 *   YYYYMMDD
 */
export declare class DateTimeHelper {
    static toDate(numberedDate: number): Date;
    static toNumberedDateFromValues(year: number, month: number, day: number): number;
    static toNumberedDateFromDate(date: Date): number;
    static getYear(numberedDate: number): number;
    static getMonth(numberedDate: number): number;
    static getDayOfMonth(numberedDate: number): number;
    static toFormattedString(numberedDate: number): string;
    static fromFormattedString(str: string): number;
    static splitRange(start: number, end: number, maxNumDays: number): Array<[number, number]>;
    static getNumDays(start: number | Date, end: number | Date): number;
    static rangeSemantic(start: number | Date, end: number | Date, ref?: Date): {
        semantic: "mondayWeek" | "sundayWeek" | "month" | "year";
        differenceToRef?: number;
    } | null;
    static mondayWeekStartFunc: (date: Date) => Date;
    static mondayWeekEndFunc: (date: Date) => Date;
    static sundayWeekStartFunc: (date: Date) => Date;
    static sundayWeekEndFunc: (date: Date) => Date;
    static getSemanticRange(ref: Date, semantic: 'year' | 'month' | 'sundayWeek' | 'mondayWeek', offset?: number): [number, number];
    static formatDuration(durationInSeconds: number, roundToMins?: boolean): string;
    static formatDurationParsed(durationInSeconds: number, roundToMins?: boolean): Array<{
        type: "unit" | "digit";
        text: string;
    }>;
    static pageRange(start: number | Date, end: number | Date, direction: -1 | 1): [number, number];
    static formatRange(range: [number, number], singleLine?: boolean): string[];
    static subtract(left: [number, number], right: [number, number]): {
        overlap: boolean;
        rest: Array<[number, number]>;
    };
}
export declare function pad(n: number, len: number): string;
export declare function isToday(date: Date, today?: Date): boolean;
export declare function isYesterday(date: Date, today?: Date): boolean;
