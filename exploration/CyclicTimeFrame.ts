export enum CyclicTimeFrame {
  DayOfWeek = 'dayOfWeek',
  MonthOfYear = 'month',
  SeasonOfYear = 'season',
  //WeekdayWeekends = 'wdwe',
}

export const cyclicTimeFrameSpecs: {
  [type: string]: {type: CyclicTimeFrame; name: string};
} = {};
cyclicTimeFrameSpecs[CyclicTimeFrame.DayOfWeek] = {
  type: CyclicTimeFrame.DayOfWeek,
  name: 'Days of the Week',
};
cyclicTimeFrameSpecs[CyclicTimeFrame.MonthOfYear] = {
  type: CyclicTimeFrame.MonthOfYear,
  name: 'Months of the Year',
};
/*
cyclicTimeFrameSpecs[CyclicTimeFrame.SeasonOfYear] = {
  type: CyclicTimeFrame.SeasonOfYear,
  name: 'Seasons of the Year',
};*/
/*
cyclicTimeFrameSpecs[CyclicTimeFrame.WeekdayWeekends] = {
  type: CyclicTimeFrame.WeekdayWeekends,
  name: 'Weekday / Weekends',
};*/

export enum CycleDimension {
  Sunday = 'day|dayOfWeek|0',
  Monday = 'day|dayOfWeek|1',
  Tuesday = 'day|dayOfWeek|2',
  Wednesday = 'day|dayOfWeek|3',
  Thursday = 'day|dayOfWeek|4',
  Friday = 'day|dayOfWeek|5',
  Saturday = 'day|dayOfWeek|6',

  January = 'year|month|1',
  February = 'year|month|2',
  March = 'year|month|3',
  April = 'year|month|4',
  May = 'year|month|5',
  June = 'year|month|6',
  July = 'year|month|7',
  August = 'year|month|8',
  September = 'year|month|9',
  October = 'year|month|10',
  November = 'year|month|11',
  December = 'year|month|12',

  Spring = 'year|season|0',
  Summer = 'year|season|1',
  Fall = 'year|season|2',
  Winter = 'year|season|3',

  //Weekdays = 'week|wdwe|0',
  //Weekends = 'week|wdwe|1',
}

export interface CycleDimensionSpec {
  name: string;
  cycleType: CyclicTimeFrame;
  dimension: CycleDimension;
  level: "year"|"day",
  timeKey: number
}

const cycleDimensionSpecs: {[key: string]: CycleDimensionSpec} = {};
cycleDimensionSpecs[CycleDimension.Monday] = {name: 'Monday'} as any;
cycleDimensionSpecs[CycleDimension.Tuesday] = {name: 'Tuesday'} as any;
cycleDimensionSpecs[CycleDimension.Wednesday] = {name: 'Wednesday'} as any;
cycleDimensionSpecs[CycleDimension.Thursday] = {name: 'Thursday'} as any;
cycleDimensionSpecs[CycleDimension.Friday] = {name: 'Friday'} as any;
cycleDimensionSpecs[CycleDimension.Saturday] = {name: 'Saturday'} as any;
cycleDimensionSpecs[CycleDimension.Sunday] = {name: 'Sunday'} as any;

cycleDimensionSpecs[CycleDimension.January] = {name: 'January'} as any;
cycleDimensionSpecs[CycleDimension.February] = {name: 'February'} as any;
cycleDimensionSpecs[CycleDimension.March] = {name: 'March'} as any;
cycleDimensionSpecs[CycleDimension.April] = {name: 'April'} as any;
cycleDimensionSpecs[CycleDimension.May] = {name: 'May'} as any;
cycleDimensionSpecs[CycleDimension.June] = {name: 'June'} as any;
cycleDimensionSpecs[CycleDimension.July] = {name: 'July'} as any;
cycleDimensionSpecs[CycleDimension.August] = {name: 'August'} as any;
cycleDimensionSpecs[CycleDimension.September] = {name: 'September'} as any;
cycleDimensionSpecs[CycleDimension.October] = {name: 'October'} as any;
cycleDimensionSpecs[CycleDimension.November] = {name: 'November'} as any;
cycleDimensionSpecs[CycleDimension.December] = {name: 'December'} as any;

/*
cycleDimensionSpecs[CycleDimension.Spring] = {name: 'Spring'} as any;
cycleDimensionSpecs[CycleDimension.Summer] = {name: 'Summber'} as any;
cycleDimensionSpecs[CycleDimension.Fall] = {name: 'Fall'} as any;
cycleDimensionSpecs[CycleDimension.Winter] = {name: 'Winter'} as any;*/

//cycleDimensionSpecs[CycleDimension.Weekdays] = {name: 'Weekdays'};
//cycleDimensionSpecs[CycleDimension.Weekends] = {name: 'Weekends'};

for (const dimension of Object.keys(cycleDimensionSpecs)) {
  const split = dimension.split('|')
  cycleDimensionSpecs[dimension].cycleType = split[1] as CyclicTimeFrame;
  cycleDimensionSpecs[dimension].dimension = dimension as any;
  cycleDimensionSpecs[dimension].level = split[0] as any;
  cycleDimensionSpecs[dimension].timeKey = Number.parseInt(split[2])
  
}

export const allSupportedCycleDimensionSpecs = Object.keys(cycleDimensionSpecs).map(d => cycleDimensionSpecs[d])

export function getHomogeneousCycleDimensionList(dimension: CycleDimension){
  const spec = getCycleDimensionSpec(dimension)
  return getFilteredCycleDimensionList(spec.cycleType)
}

export function getFilteredCycleDimensionList(
  cycleType: CyclicTimeFrame,
): CycleDimensionSpec[] {
  return Object.keys(cycleDimensionSpecs)
    .filter(dimension => cycleDimensionSpecs[dimension].cycleType === cycleType)
    .map(dimension => cycleDimensionSpecs[dimension]);
}

export function getCycleDimensionSpec(
  dimension: CycleDimension,
): CycleDimensionSpec {
  return cycleDimensionSpecs[dimension];
}

export function getCycleTypeOfDimension(dimension: CycleDimension): CyclicTimeFrame{
  return cycleDimensionSpecs[dimension].cycleType!
}

export function getCycleLevelOfDimension(dimension: CycleDimension): "year" | "day"{
  return cycleDimensionSpecs[dimension].level!
}

export function getTimeKeyOfDimension(dimension: CycleDimension): number{
  return cycleDimensionSpecs[dimension].timeKey!
}

export function getCycleDimensionWithTimeKey(cycleType: CyclicTimeFrame, timeKey: number): CycleDimension{
  return Object.keys(cycleDimensionSpecs).find(dimension => cycleDimensionSpecs[dimension].cycleType === cycleType && cycleDimensionSpecs[dimension].timeKey === timeKey) as CycleDimension
}