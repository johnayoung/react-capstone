import React from 'react'

function FieldError(props) {
  return (
    <p class="text-red text-xs italic">{props.error}</p>
  )
}

export default FieldError

