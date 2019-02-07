const validate = values => {
    const errors = {}
    if (!values.collectionName) {
      errors.collectionName = 'Required'
    }
    return errors
  }
  
  export default validate