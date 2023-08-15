import React from 'react'

export default function Breadcrumb({ breadcrumbs, moveSeclectedPath }) {
  return (
    <div>
      <p>
        {breadcrumbs.map(({ id, name }) => (
          <li
            key={id}
            onClick={(e) => {
              moveSeclectedPath(id)
            }}
          >
            {name}
          </li>
        ))}
      </p>
    </div>
  )
}
