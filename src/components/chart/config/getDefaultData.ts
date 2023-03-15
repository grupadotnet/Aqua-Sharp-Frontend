const getDefaultData = (
  dataX: number[] | string[],
  dataY: number[] | string[]
) => ({
  labels: dataX,
  datasets: [
    {
      data: dataY,
    },
  ],
});

export default getDefaultData;
