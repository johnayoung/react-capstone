const officeError = error => {
  console.log(`Error: ${error}`);
  if (error instanceof window.OfficeExtension.Error) {
    console.log(`Debug info: ${JSON.stringify(error.debugInfo)}`);
  }
};

export default officeError;
