import { Line } from 'react-chartjs-2';
import { ChartData, CategoryScale } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { Point } from 'chart.js/dist/helpers/helpers.canvas';
import { BubbleController } from 'chart.js/dist';

const exampleData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

const Chart: React.FC = () => {
  const data: ChartData<
    'line',
    (number | Point | [number, number] | BubbleController | null)[],
    unknown
  > = {
    labels: exampleData.map((data) => data.year),
    datasets: [
      {
        label: undefined,
        data: exampleData.map((data) => data.userGain),
        backgroundColor: ['#344AE1'],
        borderColor: '#344AE1',
        borderWidth: 2,
      },
    ],
  };

  ChartJS.register(CategoryScale);

  const options = {};

  return <Line data={data} options={options} />;
};

export default Chart;
