import React from 'react'

export default function Container(props) {
  return (
    <div className={props.classList.join(" ")}>
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}
