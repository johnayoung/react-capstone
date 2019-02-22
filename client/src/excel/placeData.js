import officeError from './error';

const placeData = (data, path) => {
  window.Excel.run(context => {
    const sheet1 = context.workbook.worksheets.getItem('Sheet1');
    // const firstCell = sheet1.getCell(0, 0);
    const firstCell = path;
    const lastCell = sheet1.getCell(data.length - 1, data[0].length - 1);
    const range = firstCell.getBoundingRect(lastCell).insert('down');

    range.values = data;
    range.format.font.bold = true;
    range.format.autofitColumns();

    return context.sync().then(() => {
      console.log('success');
    });
  }).catch(error => {
    officeError(error);
  });
};

export default placeData;
