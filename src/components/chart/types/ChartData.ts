import {
  ChartData as data,
  Point,
  BubbleController,
  ChartTypeRegistry,
} from 'chart.js';

type ChartData<T extends keyof ChartTypeRegistry> = data<
  T,
  (number | Point | [number, number] | BubbleController | null | string)[],
  unknown
>;

export default ChartData;
