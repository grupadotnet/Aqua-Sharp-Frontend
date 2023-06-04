import { Aquarium } from '../aquarium/aquarium';

export type Device = {
  deviceId: number;
  measurementFrequency: number;
  manualMode: boolean;

  aquarium: Aquarium;
} | null;

export type createDevice = {
  measurementFrequency: number;

  aquarium: Aquarium;
};

export type deviceConfig = {
  aquariumId: number;
  deviceId: number;
  measurementFrequency: number;
};
