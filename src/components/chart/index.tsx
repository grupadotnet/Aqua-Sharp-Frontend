import { Line } from 'react-chartjs-2';
import { ChartData, CategoryScale } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { Point } from 'chart.js/dist/helpers/helpers.canvas';
import { BubbleController } from 'chart.js/dist';

// just for example
export const exampleData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 50000,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 80000,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 50000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 80000,
    userLost: 3221,
  },
];

type Props = {
  dataX: string[] | number[];
  dataY: string[] | number[];
  minY?: number;
  maxY?: number;
};

const Chart: React.FC<Props> = ({ dataX, dataY, minY, maxY }: Props) => {
  ChartJS.register(CategoryScale);

  const charData: ChartData<
    'line',
    (number | Point | [number, number] | BubbleController | null | string)[],
    unknown
  > = {
    labels: dataX,
    datasets: [
      {
        data: dataY,
        backgroundColor: '#344AE115',
        pointBackgroundColor: '#344AE1',
        borderColor: '#344AE1',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    tension: 0.4,
    scales: {
      y: {
        min: minY,
        max: maxY,
      },
    },
  };

  return <Line data-testid="line-chart" data={charData} options={options} />;
};

export default Chart;
