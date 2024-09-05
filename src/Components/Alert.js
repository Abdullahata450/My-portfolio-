import React from 'react'

export default function Alert(props) {
  return (
      <div style={{ height:"50px"}}>
   {  props.showAlert &&  <div className= {`alert alert-${props.showAlert.type} alert-dismissible fade show`} role="alert">
        <strong style={{textAlign:"center"}}>{props.showAlert.msg}</strong>
    </div>}

    </div>

  )
}
