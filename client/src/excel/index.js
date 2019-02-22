import axios from 'axios';
import Papa from 'papaparse';
import doCSV from '../utils/flatten';
import getRange from './getRange';

const placeData = () => {
  return axios
    .get('https://api.apis.guru/v2/specs/1forge.com/0.0.1/swagger.json')
    .then(response => {
      const { data } = response;
      console.log('data is ', data);
      const readyJson = doCSV(data);
      console.log('readyjson is ', readyJson);
      const unparse = Papa.unparse(readyJson);
      console.log('unparse is ', unparse);
      const parsed = Papa.parse(unparse);
      console.log('parsed is ', parsed);
      const range = getRange();
      return parsed.data;
    })
    .then(parsed => {
      window.Excel.run(context => {
        const data = parsed;
        const sheet1 = context.workbook.worksheets.getItem('Sheet1');
        const firstCell = sheet1.getCell(0, 0);
        const lastCell = sheet1.getCell(data.length - 1, data[0].length - 1);
        const range = firstCell.getBoundingRect(lastCell).insert('down');

        range.values = data;
        range.format.font.bold = true;
        range.format.autofitColumns();

        return context.sync().then(() => {
          console.log('success');
        });
      }).catch(error => {
        console.log(`Error: ${error}`);
      });
    });
};

export default placeData;
