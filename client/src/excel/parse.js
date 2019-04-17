import Papa from 'papaparse';
import doCSV from '../utils/flatten';

const parse = response => {
  const data = response;
  const readyJson = doCSV(data);
  const unparse = Papa.unparse(readyJson);
  const parsed = Papa.parse(unparse);

  return parsed.data;
};

export default parse;
