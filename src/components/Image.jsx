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
      style={{
        width: '500px',
        height: '500px',
        border: '5px solid black',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <span onClick={onClick} className="selectedImageBox__closeBtn">
        ❌
      </span>
      <img
        src={selectedImageUrl}
        className="selectedImageBox__image"
        alt="선택된 고양이 사진"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
