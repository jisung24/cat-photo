import React from 'react'
import Span from './atoms/Span'

export default function Breadcrumb({ breadcrumbs, moveSeclectedPath }) {
  return (
    <ul className="breadcrumb">
      {breadcrumbs.map(({ id, name }) => (
        <li
          className="breadcrumb__item"
          key={id}
          onClick={(e) => {
            moveSeclectedPath(id)
          }}
        >
          <Span text={name} />
        </li>
      ))}
    </ul>
  )
}
