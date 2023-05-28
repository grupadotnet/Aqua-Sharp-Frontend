import { ChartWrapper, exampleData, LineChart, Tile } from '@/components';

const Aquarium = () => {
  return (
    <div>
      <Tile header="temperatura">siema</Tile>
      <ChartWrapper>
        <LineChart
          minY={20000}
          // maximum on y axis (optional - not giving maximum makes the highest value as maximum)
          maxY={100000}
          // data displayed on x axis, it has to be array of numbers/strings (required)
          dataX={exampleData.map((el) => el.year)}
          // data displayed on y axis, it has to be array of numbers/string (required)
          dataY={exampleData.map((el) => el.userGain)}
          // title of an X axis, it has to be string (optional)
          titleX="years"
          // title of an Y axis, it has to be string (optional)
          titleY="user gain"
        />
      </ChartWrapper>
    </div>
  );
};

export default Aquarium;
