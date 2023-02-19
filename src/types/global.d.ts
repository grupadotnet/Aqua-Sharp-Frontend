export {};

declare global {
  type ChartProps = {
    dataX: string[] | number[];
    dataY: string[] | number[];
    minY?: number;
    maxY?: number;
    titleX?: string;
    titleY?: string;
  };
}
