import {
  ChartData,
  Point,
  BubbleController,
  ChartTypeRegistry,
} from 'chart.js';

type chartData<T extends keyof ChartTypeRegistry> = ChartData<
  T,
  (number | Point | [number, number] | BubbleController | null | string)[],
  unknown
>;

export default chartData;
