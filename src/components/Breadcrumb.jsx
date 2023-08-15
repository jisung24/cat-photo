import React from 'react'

export default function Breadcrumb({ breadcrumbs, moveSeclectedPath }) {
  console.log(breadcrumbs);
  return (
    <div>
        <p>
          {
            breadcrumbs.map(({ id, name }) => 
              <li 
                key={ id }
                onClick = {(e) => {
                  moveSeclectedPath(id);
                }}
              >{ name }</li>
              //브래드 크럼브도 list인데 id가 있어야지 그치..?
            )
          }
        </p>
    </div>
  )
}
