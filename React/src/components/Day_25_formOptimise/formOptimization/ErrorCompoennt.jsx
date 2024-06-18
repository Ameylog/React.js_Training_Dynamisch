import React from 'react'

function ErrorCompoennt(props) {

  const { error } = props
  return (
    <div>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
    </div>
  )
}

export default ErrorCompoennt;
