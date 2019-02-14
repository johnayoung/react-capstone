export default jest.fn().mockImplementation(() => {
  return Promise.resolve({
    data: {}
  });
});
