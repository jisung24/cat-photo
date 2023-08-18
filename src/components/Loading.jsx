import React from 'react'

export default React.memo(function Loading() {
  return (
    <div className="loading loading--focus">
      <h1 className="loading__waiting">로딩중...!</h1>
    </div>
  )
})
