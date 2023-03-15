import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  getDefaultOptions,
  getDefaultData,
  ChartData,
  colors,
} from '../config';

const LineChart = (props: ChartProps) => {
  const { dataX, dataY, minY, maxY, titleX, titleY } = props;

  const [options, setOptions] = useState(
    getDefaultOptions(minY, maxY, titleY, titleX)
  );

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

  useEffect(() => {
    function handleResize() {
      setOptions(getDefaultOptions(minY, maxY, titleY, titleX));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <Line style={{ height: '100%' }} data={chartData} options={options} />;
};

export default LineChart;
