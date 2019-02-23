function run(context) {
  const myWorkbook = context.workbook;
  const activeCell = myWorkbook.getActiveCell();
  activeCell.load(['address', 'rowIndex', 'columnIndex', 'worksheet']);
}

export default run;
