export interface IForecast {
  approvedTime?: Date;
  referenceTime?: Date;
  geometry?: IGeometry;
  timeSeries?: ITimeSeries[];
}

export interface IGeometry {
  type?: string;
  coordinates?: number[];

}

export interface ITimeSeries {
  validTime?: Date;
  parameters?: IParameters[];
}

export interface IParameters {
  name?: string;
  levelType?: string;
  level?: number;
  values?: number[];
}

