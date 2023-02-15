import { Line } from 'react-chartjs-2';
import { getDefaultOptions, getDefaultData, ChartData, colors } from './config';

const LineChart = (props: ChartProps) => {
  const { dataX, dataY, minY, maxY, titleX, titleY } = props;

  const defaultData = getDefaultData(dataX, dataY);
  const chartData: ChartData<'line'> = {
    ...defaultData,
    datasets: [
      {
        data: defaultData.datasets[0].data,
        backgroundColor: colors.lightPrimary,
        pointBackgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={getDefaultOptions(minY, maxY, titleY, titleX)}
    />
  );
};

export default LineChart;
