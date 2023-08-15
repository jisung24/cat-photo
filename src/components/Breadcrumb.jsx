import React from 'react'

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
          {name}
        </li>
      ))}
    </ul>
  )
}
