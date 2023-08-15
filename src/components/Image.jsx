import React, { useState } from 'react'

export default function Image({ filePath, onClick }) {
  const [selectedImageUrl, setSelectedImageUrl] = useState(`https://kdt-frontend.cat-api.programmers.co.kr/static${filePath}`)
  return (
    <div>
      <span onClick = { onClick }>❌</span>
      <p>띄울 이미지 :  { filePath }</p>
      <img src={ selectedImageUrl } alt="선택된 고양이 사진"/>
    </div>
  )
}
