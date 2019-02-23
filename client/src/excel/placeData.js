const placeData = (data, path) => {
  const { row, col, worksheet } = path;

  const lastRow = row + (data.length - 1);
  const lastCol = col + (data[0].length - 1);

  const firstCell = worksheet.getCell(row, col);
  const lastCell = worksheet.getCell(lastRow, lastCol);
  const range = firstCell.getBoundingRect(lastCell).insert('down');

  range.values = data;
  range.format.font.bold = true;
  range.format.autofitColumns();
};

export default placeData;
