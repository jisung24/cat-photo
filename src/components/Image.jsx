import React from 'react'

export default function Image({ filePath, onClick }) {
  const selectedImageUrl = `https://kdt-frontend.cat-api.programmers.co.kr/static${filePath}`

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
