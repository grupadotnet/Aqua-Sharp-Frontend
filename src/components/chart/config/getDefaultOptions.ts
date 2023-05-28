const getDefaultOptions = (
  minY?: number,
  maxY?: number,
  titleY?: string,
  titleX?: string
) => ({
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
        display: Boolean(titleY),
        text: titleY,
        padding: {
          bottom:
            window.innerWidth > 1440
              ? 25
              : window.innerWidth > 1024
              ? 15
              : window.innerWidth > 768
              ? 10
              : 5,
        },
        font: {
          weight: 'bold',
          size:
            window.innerWidth > 1440
              ? 20
              : window.innerWidth > 1024
              ? 18
              : window.innerWidth > 768
              ? 16
              : window.innerWidth > 400
              ? 14
              : 12,
        },
      },
    },
    x: {
      title: {
        fontWeight: 700,
        display: Boolean(titleX),
        text: titleX,
        padding: {
          top:
            window.innerWidth > 1440
              ? 25
              : window.innerWidth > 1024
              ? 15
              : window.innerWidth > 768
              ? 10
              : 5,
        },
        font: {
          weight: 'bold',
          size:
            window.innerWidth > 1440
              ? 20
              : window.innerWidth > 1024
              ? 18
              : window.innerWidth > 768
              ? 16
              : window.innerWidth > 400
              ? 14
              : 12,
        },
      },
    },
  },
});

export default getDefaultOptions;
