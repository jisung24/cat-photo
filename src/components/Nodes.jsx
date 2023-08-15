import React, { useState } from 'react'
import Image from './Image'

export default function Nodes({
  fileData,
  directoryClick,
  breadcrumbsLength,
  goPrev,
  // trailing comma : 배열, obj등 콤마를 이용한 항목의 나열에서
  // 마지막 항목에도 콤마를 붙여주는 행위
}) {
  const [imageAction, setImageAction] = useState(false)
  const [filePath, setFilePath] = useState('') // filePath가 바뀔 때 마다... useEffect
  const fileClick = (filePath) => {
    setImageAction((prev) => !prev)
    setFilePath((prev) => filePath)
  }
  return (
    <div>
      <ul>
        {breadcrumbsLength !== 1 && (
          <li
            onClick={() => {
              goPrev()
            }}
          >
            <img
              src="https://cdn.roto.codes/images/prev.png"
              alt="뒤로가기 사진"
            />
          </li>
        )}
        {fileData.map(({ id, type, name, filePath, parent }) => (
          <li
            key={id}
            onClick={() => {
              if (type === 'DIRECTORY') {
                // 아 이름 수정
                directoryClick(id, name)
              } else if (type === 'FILE') {
                fileClick(filePath)
              }
            }}
          >
            <h2>filename : {name}</h2>
            <p>file or dic : {type}</p>
            <p>부모 id : {parent && parent.id}</p>
            {filePath === 'FILE' && <p>{filePath}</p>}
          </li>
        ))}
        {imageAction && (
          <Image
            onClick={() => setImageAction((prev) => !prev)}
            filePath={filePath}
          />
        )}
      </ul>
    </div>
  )
}
