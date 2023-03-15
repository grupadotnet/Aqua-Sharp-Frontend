import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  getDefaultOptions,
  getDefaultData,
  ChartData,
  colors,
} from '../config';

type Props = ChartProps & { xs?: number };

const BarsChart = (props: Props) => {
  const { dataX, dataY, minY, maxY, titleX, titleY, xs } = props;

  const [options, setOptions] = useState(
    getDefaultOptions(minY, maxY, titleY, titleX)
  );

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

  const handleWindowChange = () => {
    setOptions(getDefaultOptions(minY, maxY, titleY, titleX));
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowChange);

    return window.removeEventListener('resize', handleWindowChange);
  }, []);

  return (
    <Bar
      // style={{ width: '100%', height: '100%' }}
      data={data}
      options={options}
    />
  );
};

export default BarsChart;
