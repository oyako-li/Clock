const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      console.log(getCLS(onPerfEntry));
      console.log(getFID(onPerfEntry));
      console.log(getFCP(onPerfEntry));
      console.log(getLCP(onPerfEntry));
      console.log(getTTFB(onPerfEntry));
    });
  }
};

export default reportWebVitals;
