import { Bar } from 'react-chartjs-2';
import { getDefaultOptions, getDefaultData, ChartData, colors } from './config';

const BarsChart = (props: ChartProps) => {
  const { dataX, dataY, minY, maxY, titleX, titleY } = props;

  const defaultData = getDefaultData(dataX, dataY);
  const data: ChartData<'bar'> = {
    ...defaultData,
    datasets: [
      {
        data: defaultData.datasets[0].data,
        backgroundColor: colors.primary,
        barPercentage: 0.33,
      },
    ],
  };

  return (
    <Bar data={data} options={getDefaultOptions(minY, maxY, titleY, titleX)} />
  );
};

export default BarsChart;
