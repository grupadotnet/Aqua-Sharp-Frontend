import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  getDefaultOptions,
  getDefaultData,
  ChartData,
  colors,
} from '../config';

type Props = ChartProps & { xs?: number };

const LineChart = (props: Props) => {
  const { dataX, dataY, minY, maxY, titleX, titleY, xs } = props;

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

  const handleWindowChange = () => {
    setOptions(getDefaultOptions(minY, maxY, titleY, titleX));
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowChange);

    // return window.removeEventListener('resize', handleWindowChange);
  }, []);

  return (
    <Line
      // style={{ width: '100%', height: '100%' }}
      data={chartData}
      options={options}
    />
  );
};

export default LineChart;
