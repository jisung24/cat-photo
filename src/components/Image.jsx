import React from 'react'
import { API_END_POINT } from '../api/catApi.js'
export default function Image({ filePath, onClick }) {
  const selectedImageUrl = `${API_END_POINT}static${filePath}`

  return (
    <div
      className="selectedImageBox"
      onKeyUp={window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
          onClick()
        }
      })}
    >
      <span onClick={onClick} className="selectedImageBox__closeBtn">
        ❌
      </span>
      <img
        src={selectedImageUrl}
        className="selectedImageBox__image"
        alt="선택된 고양이 사진"
      />
    </div>
  )
}
