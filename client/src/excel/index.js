import getRange from './getRange';
import placeData from './placeData';
import officeError from './error';
import parse from './parse';
import tryCatch from './functionHelper';

// async function setData(response) {
//   const parsedData = parse(response);
//   await window.Excel.run(async context => {
//     const userSelectedRange = context.workbook.getSelectedRange();
//     userSelectedRange.load(['address', 'rowIndex', 'columnIndex', 'worksheet']);

//     await context.sync().then(() => {
//       const { rowIndex, columnIndex, worksheet } = userSelectedRange;
//       const path = { row: rowIndex, col: columnIndex, worksheet };
//       placeData(parsedData, path);
//     });
//   });
// }

const setData = async response => {
  await window.Excel.run(async context => {
    const parsedData = parse(response);
    console.log('parsed data is ', parsedData);
    // const range = await getRange();
    const myWorkbook = context.workbook;
    const activeCell = myWorkbook.getActiveCell();
    activeCell.load(['address', 'rowIndex', 'columnIndex', 'worksheet']);

    return context.sync().then(() => {
      const { rowIndex, columnIndex, worksheet } = activeCell;
      const path = { row: rowIndex, col: columnIndex, worksheet };
      placeData(parsedData, path);
    });
  });
};

export default setData;
