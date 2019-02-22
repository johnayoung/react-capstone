import officeError from './error';

const getRange = () => {
  window.Excel.run(context => {
    const userSelectedRange = context.workbook.getSelectedRange();
    userSelectedRange.load('address');
    return context.sync().then(() => {
      console.log(userSelectedRange.address);
    });
  }).catch(error => {
    officeError(error);
  });
};

export default getRange;
