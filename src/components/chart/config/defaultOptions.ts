const getDefaultOptions = (
  minY?: number,
  maxY?: number,
  titleY?: string,
  titleX?: string
) => ({
  responsive: true,
  maintainAspectRatio: false,
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
      title: {
        display: true,
        text: titleY,
        padding: {
          bottom: 25,
        },
        font: {
          weight: 'bold',
          size: 18,
        },
      },
    },
    x: {
      title: {
        fontWeight: 700,
        display: true,
        text: titleX,
        padding: {
          top: 25,
        },
        font: {
          weight: 'bold',
          size: 18,
        },
      },
    },
  },
});

export default getDefaultOptions;
