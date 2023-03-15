import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  getDefaultOptions,
  getDefaultData,
  ChartData,
  colors,
} from '../config';

const BarsChart = (props: ChartProps) => {
  const { dataX, dataY, minY, maxY, titleX, titleY } = props;

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

  useEffect(() => {
    function handleResize() {
      setOptions(getDefaultOptions(minY, maxY, titleY, titleX));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <Bar style={{ height: '100%' }} data={data} options={options} />;
};

export default BarsChart;
