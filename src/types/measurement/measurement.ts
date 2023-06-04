export type createMeasurement = {
  time: Date;
  temperature: number;
  ph: number;
  tds: number;
  lightOn: boolean;
  aquariumId: number;
};

export type Measurement = {
  time: string;
  temperature: number;
  ph: number;
  tds: number;
  lightOn: boolean;
  aquariumId: number;
};
