const formBuilder = values => {
  // baseUrl, path, parameters to buildUrl
  const { baseUrl, path } = values;
  const keys = Object.keys(values);
  const pathKeys = keys.filter(key => key.includes('path -'));
  const queryKeys = keys.filter(key => key.includes('query -'));
  let parameters = [];

  // {name: '', in: '', default: ''}
  const pathParameters = pathKeys
    .filter(key => values[key])
    .reduce((acc, cv) => {
      const nameSplit = cv.replace('path - ', '');
      acc.push({ name: nameSplit, in: 'path', default: values[cv] });
      return acc;
    }, []);

  const queryParameters = queryKeys
    .filter(key => values[key])
    .reduce((acc, cv) => {
      const nameSplit = cv.replace('query - ', '');
      acc.push({ name: nameSplit, in: 'query', default: values[cv] });
      return acc;
    }, []);

  parameters = parameters.concat(...pathParameters, ...queryParameters);

  const finalValues = {
    baseUrl,
    path,
    parameters
  };

  return finalValues;
};

export default formBuilder;
