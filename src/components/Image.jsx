import React from 'react'
import { API_END_POINT } from '../api/catApi.js'
export default function Image({ filePath, onClick }) {
  const selectedImageUrl = `${API_END_POINT}static${filePath}`

  return (
    <div
      onKeyUp={window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
          onClick()
        }
      })}
    >
      <span onClick={onClick}>❌</span>
      <p>띄울 이미지 : {filePath}</p>
      <img src={selectedImageUrl} alt="선택된 고양이 사진" />
    </div>
  )
}
