import { Device } from '../device/device';

export type Aquarium = {
  aquariumId: number;
  name: string;
  length: number;
  width: number;
  height: number;
  temperature: number;
  ph: number;
  dawn: Date;
  sunset: Date;
  device: Device;
};

export type PaginatedAquarium = {
  aquariumId: number;
  name: string;
  temperatures: { temperature: number; time: Date }[];
  phs: { ph: number; time: Date }[];
  dawn: Date;
  sunset: Date;
  lightOn?: boolean;
};

export type createAquarium = {
  name: string;
  length: number;
  width: number;
  temperature: number;
  ph: number;
  dawn: Date;
  sunset: Date;
  measurementFrequency: number;
};
